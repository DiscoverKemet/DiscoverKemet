(() => {
  const statusNode = () => document.getElementById('databaseStatus');
  const language = () => document.documentElement.lang === 'en' ? 'en' : 'ar';
  const labels = {
    ar: {
      checking: 'جارٍ التحقق من اتصال قاعدة البيانات…',
      loaded: n => 'قاعدة البيانات متصلة — تم تحميل ' + n + ' وجهة.',
      empty: 'اتصل الموقع بقاعدة البيانات، لكن جدول الأماكن فارغ. شغّل ملف supabase/schema.sql في Supabase SQL Editor.',
      failed: message => 'تعذّر تحميل قاعدة البيانات: ' + message,
      unconfigured: 'قاعدة البيانات غير مهيأة بعد. يلزم ضبط إعدادات Supabase في config.js.',
      map: 'افتح الموقع على خرائط Google',
      sources: 'المصادر والمراجع',
      sourceIntro: 'مصادر المعلومات والصور وتراخيصها لكل وجهة.',
      info: 'مصدر المعلومات',
      photo: 'مصدر الصورة',
      license: 'الترخيص',
      open: 'افتح المصدر ↗'
    },
    en: {
      checking: 'Checking database connection…',
      loaded: n => 'Database connected — loaded ' + n + ' destinations.',
      empty: 'Connected, but the places table is empty. Run supabase/schema.sql in the Supabase SQL Editor.',
      failed: message => 'Could not load database: ' + message,
      unconfigured: 'Database is not configured yet. Add the Supabase settings in config.js.',
      map: 'Open in Google Maps',
      sources: 'Sources and references',
      sourceIntro: 'Information sources, image records, and licenses for every destination.',
      info: 'Information source',
      photo: 'Image source',
      license: 'License',
      open: 'Open source ↗'
    }
  };
  let currentStatus = ['checking', undefined];
  function setStatus(state, detail) {
    currentStatus = [state, detail];
    const node = statusNode();
    if (!node) return;
    const copy = labels[language()];
    node.dataset.state = state;
    node.textContent = state === 'loaded' ? copy.loaded(detail)
      : state === 'empty' ? copy.empty
      : state === 'failed' ? copy.failed(String(detail || 'Network or Supabase error').slice(0, 180))
      : state === 'unconfigured' ? copy.unconfigured : copy.checking;
  }
  function watchQuery(query) {
    return new Proxy(query, {
      get(target, property) {
        const value = Reflect.get(target, property, target);
        if (property === 'then' && typeof value === 'function') {
          return (resolve, reject) => value.call(target, result => {
            if (result?.error) setStatus('failed', result.error.message);
            else if (Array.isArray(result?.data)) setStatus(result.data.length ? 'loaded' : 'empty', result.data.length);
            return resolve ? resolve(result) : result;
          }, error => {
            setStatus('failed', error?.message || error);
            return reject ? reject(error) : Promise.reject(error);
          });
        }
        if (typeof value === 'function') return (...args) => {
          const next = value.apply(target, args);
          return next && typeof next === 'object' ? watchQuery(next) : next;
        };
        return value;
      }
    });
  }
  if (window.MASR_CONFIG?.supabaseUrl && window.MASR_CONFIG?.supabaseAnonKey && window.supabase?.createClient) {
    setStatus('checking');
    const createClient = window.supabase.createClient.bind(window.supabase);
    window.supabase.createClient = (...args) => {
      const client = createClient(...args);
      const from = client.from.bind(client);
      client.from = (table, ...rest) => {
        const query = from(table, ...rest);
        return table === 'sites' ? watchQuery(query) : query;
      };
      return client;
    };
  } else {
    document.addEventListener('DOMContentLoaded', () => setStatus('unconfigured'), { once: true });
  }

  const mapUrl = (lat, lng) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(lat + ',' + lng);
  const coordinatePair = text => {
    const match = String(text || '').match(/(-?\d+(?:\.\d+)?)\s*°?\s*,\s*(-?\d+(?:\.\d+)?)\s*°?/);
    return match ? [Number(match[1]), Number(match[2])] : null;
  };
  function addMapLink(parent, coords, extraClass) {
    if (!parent || !coords || parent.querySelector('.google-map-link')) return;
    const a = document.createElement('a');
    a.className = 'google-map-link' + (extraClass ? ' ' + extraClass : '');
    a.href = mapUrl(coords[0], coords[1]);
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = labels[language()].map + ' ↗';
    parent.appendChild(a);
  }
  function enhanceCards(root) {
    root.querySelectorAll?.('.site-card').forEach(card => {
      const meta = card.querySelector('.site-meta');
      const coords = coordinatePair(meta?.querySelector('span')?.textContent);
      addMapLink(card.querySelector('.site-info'), coords);
    });
  }
  function enhanceModal(root) {
    const body = root.querySelector('#modalBody');
    if (!body) return;
    const coords = [...body.querySelectorAll('p')].map(p => coordinatePair(p.textContent)).find(Boolean);
    addMapLink(body, coords, 'modal-map-link');
  }
  function renderSources() {
    const root = document.getElementById('sourceList');
    const details = document.getElementById('sourceDetails');
    if (!root || !Array.isArray(window.DISCOVER_KEMET_SOURCES)) return;
    const copy = labels[language()];
    const entries = [];
    window.DISCOVER_KEMET_SOURCES.forEach(site => {
      const name = site.name?.[language()] || site.name?.en || site.id;
      if (site.source) entries.push({name, kind: copy.info, url: site.source});
      if (site.imagePage) entries.push({name, kind: site.imageCredit ? copy.photo + ' — ' + site.imageCredit : copy.photo, url: site.imagePage});
      if (site.imageLicense) entries.push({name, kind: copy.license, url: site.imageLicense});
    });
    document.querySelectorAll('#siteGrid .site-card').forEach(card => {
      const name = card.querySelector('h3')?.textContent?.trim();
      const source = card.querySelector('.site-meta a[data-source]');
      const photo = card.querySelector('.image-credit[data-source]');
      if (name && source?.href) entries.push({name, kind: copy.info, url: source.href});
      if (name && photo?.href) entries.push({name, kind: copy.photo, url: photo.href});
    });
    [
      ['UNESCO World Heritage Centre', 'https://whc.unesco.org/'],
      ['Egyptian Ministry of Tourism and Antiquities', 'https://egymonuments.gov.eg/'],
      ['Experience Egypt — official tourism portal', 'https://www.experienceegypt.eg/'],
      ['Wikimedia Commons — image records', 'https://commons.wikimedia.org/'],
      ['OpenStreetMap — map data and attribution', 'https://www.openstreetmap.org/copyright']
    ].forEach(([name, url]) => entries.push({name, kind: copy.info, url}));
    const seen = new Set();
    root.replaceChildren();
    entries.forEach(item => {
      const key = item.name + '|' + item.url;
      if (seen.has(key)) return;
      seen.add(key);
      const li = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = item.name + ' — ' + item.kind + ': ';
      const link = document.createElement('a');
      link.href = item.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = copy.open;
      li.append(label, link);
      root.appendChild(li);
    });
    const intro = document.getElementById('sourceIntro');
    if (intro) intro.textContent = copy.sourceIntro;
    const title = document.getElementById('sourceTitle');
    if (title) title.textContent = copy.sources;
    if (details) details.open = false;
  }

  const popupLabel = () => labels[language()].map + ' ↗';
  if (window.L?.Marker?.prototype) {
    const bindPopup = window.L.Marker.prototype.bindPopup;
    window.L.Marker.prototype.bindPopup = function(content, ...args) {
      const point = this.getLatLng();
      if (typeof content === 'string' && point) {
        content += '<br><a href="' + mapUrl(point.lat, point.lng) + '" target="_blank" rel="noopener noreferrer">' + popupLabel() + '</a>';
      }
      return bindPopup.call(this, content, ...args);
    };
  }
  document.addEventListener('DOMContentLoaded', () => {
    renderSources();
    enhanceCards(document);
    enhanceModal(document);
    const cards = document.getElementById('siteGrid');
    if (cards) new MutationObserver(() => { enhanceCards(cards); renderSources(); }).observe(cards, {childList: true, subtree: true});
    const modal = document.getElementById('modal');
    if (modal) new MutationObserver(() => enhanceModal(modal)).observe(modal, {childList: true, subtree: true});
    document.getElementById('languageToggle')?.addEventListener('click', () => {
      setTimeout(() => { setStatus(currentStatus[0], currentStatus[1]); enhanceCards(document); enhanceModal(document); renderSources(); }, 0);
    });
  }, { once: true });

  function waitForStartup() {
    const started = Date.now();
    const loader = document.getElementById('siteLoader');
    const status = document.getElementById('databaseStatus');
    const note = document.getElementById('loaderStatus');
    const hide = () => { if (!loader || loader.classList.contains('is-hidden')) return; loader.classList.add('is-hidden'); document.body.classList.remove('app-loading'); window.setTimeout(() => loader.remove(), 500); };
    const poll = () => {
      const en = language() === 'en';
      const title = loader?.querySelector('h1');
      const description = loader?.querySelector('p');
      if (title) title.textContent = en ? 'Preparing your journey' : 'نجهّز رحلتك';
      if (description) description.textContent = en ? 'Loading destinations and the map, then checking the database.' : 'نحمّل الوجهات والخريطة ونتحقق من قاعدة البيانات.';
      const state = status?.dataset.state || 'checking';
      if (status && state !== 'checking' && document.readyState === 'complete') {
        if (note) note.textContent = state === 'loaded' ? (en ? 'Database ready. Opening your guide…' : 'قاعدة البيانات جاهزة، جارٍ فتح الدليل…') : (en ? 'Opening the guide; connection details are shown below.' : 'جارٍ فتح الدليل، وتظهر حالة الاتصال أسفل الصفحة.');
        hide();
        return;
      }
      if (Date.now() - started > 18000) {
        if (note) note.textContent = en ? 'Taking longer than expected; opening the guide now.' : 'استغرق التحميل وقتًا أطول من المتوقع؛ جارٍ فتح الدليل.';
        hide();
        return;
      }
      if (note) note.textContent = en ? 'Loading the site and checking the database…' : 'جارٍ تحميل الموقع والتحقق من قاعدة البيانات…';
      window.setTimeout(poll, 200);
    };
    poll();
    window.setTimeout(() => { if (loader && !loader.classList.contains('is-hidden')) hide(); }, 20000);
  }
  document.addEventListener('DOMContentLoaded', waitForStartup, { once: true });
})();