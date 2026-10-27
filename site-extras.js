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
      open: 'افتح المصدر ↗',
      galleryTitle: 'صور المكان', galleryLoading: 'جارٍ البحث عن صور للموقع من مصادر مفتوحة…',
      galleryEmpty: 'لم نعثر حاليًا على خمس صور متاحة برخصة الملكية العامة أو CC0 لهذا المكان.',
      galleryError: 'تعذّر تحميل الصور الآن. اضغط هنا للمحاولة مرة أخرى عند توفر الإنترنت.', photoCredit: 'المصوّر', photoLicense: 'الترخيص',
      galleryCount: n => n + ' صور متاحة — تُستبعد النتائج التي تذكر أشخاصًا في عنوانها',
      visitedTitle: 'الأماكن التي زرتها', visitedSubtitle: 'سجّل زيارتك بنفسك من صفحة المكان لتجده هنا لاحقًا.',
      visitedEmpty: 'لم تسجّل زيارة بعد. افتح أي مكان واضغط «تمت الزيارة».', visitedClear: 'مسح سجل الزيارات',
      visitedCount: n => 'سجل الزيارات: ' + n, visitButton: 'تمت الزيارة', visitedButtonMarked: 'زرتها ✓ · اضغط لإزالة العلامة',
      visitAdded: 'أُضيف المكان إلى سجل زياراتك.', visitRemoved: 'أُزيل المكان من سجل زياراتك.', visitStorage: 'يُحفظ السجل على هذا الجهاز.'
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
      open: 'Open source ↗',
      galleryTitle: 'Place photos', galleryLoading: 'Finding openly licensed photos of this place…',
      galleryEmpty: 'Fewer than five public-domain or CC0 photos are currently available for this place.',
      galleryError: 'Photos could not be loaded. Click here to retry when online.', photoCredit: 'Photographer', photoLicense: 'License',
      galleryCount: n => n + ' available photos · titles mentioning people are filtered out',
      visitedTitle: 'Places I have visited', visitedSubtitle: 'Mark a place as visited on its page to keep it here.',
      visitedEmpty: 'No visits recorded yet. Open a place and select “Visited”.', visitedClear: 'Clear visit history',
      visitedCount: n => 'Places visited: ' + n, visitButton: 'Mark as visited', visitedButtonMarked: 'Visited ✓ · click to remove',
      visitAdded: 'Added to your visited places.', visitRemoved: 'Removed from your visited places.', visitStorage: 'Saved on this device.'
    }
  };

  const copyOverrides = {
    ar: {
      announcement: 'دليل المواقع الأثرية والمتاحف والوجهات الطبيعية في مصر', brandSub: 'دليل السياحة والآثار في مصر',
      heroEyebrow: 'معلومات عملية عن المواقع المصرية', heroTitle: 'اكتشف<br/><em>مصر</em>',
      heroDescription: 'اعرف تاريخ كل وجهة وموقعها على الخريطة ومصادر معلوماتها قبل الزيارة.',
      heroCta: 'تصفح الوجهات', heroMap: 'عرض الخريطة', scroll: 'اكتشف الوجهات', statNote: 'اختر وجهة لعرض تفاصيلها.',
      sitesKicker: 'دليل الوجهات', sitesHeading: 'أماكن <em>للزيارة</em>',
      sitesSub: 'ابحث حسب المنطقة أو النوع، ثم افتح صفحة المكان لمعرفة التفاصيل والمصادر.', allSites: 'عرض جميع الوجهات',
      mapKicker: 'المواقع على الخريطة', mapHeading: 'خريطة<br/><em>مصر</em>',
      mapDescription: 'اختر علامة لعرض موقع الوجهة وإحداثياتها.', openMap: 'فتح خريطة أكبر',
      quizKicker: 'أسئلة عن مصر', quizHeading: 'اختبر<br/><em>معلوماتك</em>',
      quizDescription: 'اختر مجال الأسئلة وعددها. يظهر مصدر الإجابة بعد كل سؤال.',
      newsletterKicker: 'حساب المستخدم', newsletterHeading: 'احفظ الأماكن التي تهمك',
      newsletterDescription: 'أنشئ حسابًا لحفظ الوجهات ومتابعة نتائج الاختبارات.', joinUs: 'إنشاء حساب',
      footerText: 'تجد معلومات كل وجهة وروابط مصادرها في صفحة المكان.'
    },
    en: {
      announcement: 'A guide to Egypt’s archaeological sites, museums, and natural destinations', brandSub: 'Egypt heritage and travel guide',
      heroEyebrow: 'Practical information about places in Egypt', heroTitle: 'Explore<br/><em>Egypt</em>',
      heroDescription: 'Check a destination’s history, map location, and information sources before you visit.',
      heroCta: 'Browse destinations', heroMap: 'View the map', scroll: 'Browse destinations', statNote: 'Choose a destination to view its details.',
      sitesKicker: 'Destination guide', sitesHeading: 'Places to <em>visit</em>',
      sitesSub: 'Search by region or type, then open a place to view details and sources.', allSites: 'View all destinations',
      mapKicker: 'Destinations on the map', mapHeading: 'Map of<br/><em>Egypt</em>',
      mapDescription: 'Select a marker to see a destination and its coordinates.', openMap: 'Open larger map',
      quizKicker: 'Questions about Egypt', quizHeading: 'Check your<br/><em>knowledge</em>',
      quizDescription: 'Choose a topic and question count. The answer source appears after each question.',
      newsletterKicker: 'Your account', newsletterHeading: 'Keep track of places you want to visit',
      newsletterDescription: 'Create an account to save destinations and track quiz results.', joinUs: 'Create account',
      footerText: 'Each destination page includes its information and source links.'
    }
  };
  function applyCopyOverrides() {
    if (typeof COPY === 'undefined') return;
    Object.assign(COPY.ar, copyOverrides.ar);
    Object.assign(COPY.en, copyOverrides.en);
  }

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
    const title = body.querySelector('#modalTitle');
    const records = window.DISCOVER_KEMET_SOURCES || [];
    const current = records.find(site => [site.name?.ar, site.name?.en].includes(title?.textContent?.trim()));
    if (current) addVisitedAction(body, current);
    if (current && !body.querySelector('[data-photo-gallery]')) loadPhotoGallery(body, current);
  }
  const galleryCache = new Map();
  // These existing thumbnails were checked and contain people, so keep them out of the galleries.
  const peopleInExistingPhoto = new Set(['saqqara','memphis','islamic-cairo','aby-simbel','hatshepsut','dendera','pompeys-pillar','unfinished-obelisk','saint-catherine','nmec','bibliotheca-alexandrina','al-muizz-street','montaza-gardens','white-desert','sharm-el-sheikh','dahab-blue-hole','grand-egyptian-museum']);
  const prohibitedPhotoTerms = /\b(people|person|man|woman|men|women|tourist|tourists|crowd|crowds|selfie|portrait|group|wedding|meeting|president|minister)\b|سائح|سياح|اشخاص|أشخاص|رجل|امرأة|حشد|جمهور|اجتماع|رئيس|وزير/i;
  const unescapeMarkup = value => { const node = document.createElement('textarea'); node.innerHTML = String(value || ''); return node.value.trim(); };
  const photoLicenseAllowed = value => /\bCC0\b|public domain|public domain mark|\bPD-(?:old|US|USGov)\b/i.test(String(value || ''));
  function addGalleryCredit(site, photo) {
    const list = window.DISCOVER_KEMET_GALLERY_CREDITS || (window.DISCOVER_KEMET_GALLERY_CREDITS = []);
    if (!list.some(item => item.page === photo.page)) list.push({id: site.id, name: site.name, page: photo.page, license: photo.license, licenseUrl: photo.licenseUrl, artist: photo.artist});
    renderSources();
  }
  function textNode(tag, value, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = value;
    return node;
  }
  function renderPhotoGallery(body, site, photos) {
    if (!body.isConnected || body.querySelector('[data-photo-gallery]')) return;
    const copy = labels[language()];
    const section = document.createElement('section');
    section.className = 'place-photo-gallery';
    section.dataset.photoGallery = site.id;
    section.setAttribute('aria-label', copy.galleryTitle);
    section.append(textNode('h3', copy.galleryTitle));
    section.append(textNode('p', copy.galleryCount(photos.length), 'gallery-note'));
    if (!photos.length) section.append(textNode('p', copy.galleryEmpty, 'gallery-message'));
    const grid = document.createElement('div');
    grid.className = 'place-photo-grid';
    photos.forEach((photo, index) => {
      addGalleryCredit(site, photo);
      const card = document.createElement('figure');
      card.className = 'place-photo-item';
      const link = document.createElement('a');
      link.href = photo.page;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', copy.open + ' ' + (index + 1));
      const image = document.createElement('img');
      image.loading = 'lazy';
      image.src = photo.thumb;
      image.alt = (site.name?.[language()] || site.name?.en || site.id) + ' — ' + (index + 1);
      link.append(image);
      card.append(link);
      const caption = document.createElement('figcaption');
      const name = document.createElement('a');
      name.href = photo.page;
      name.target = '_blank';
      name.rel = 'noopener noreferrer';
      name.textContent = photo.title.replace(/^File:/, '');
      caption.append(name, textNode('small', copy.photoCredit + ': ' + (photo.artist || 'Wikimedia Commons')),
        textNode('small', copy.photoLicense + ': ' + photo.license));
      card.append(caption);
      grid.append(card);
    });
    if (photos.length) section.append(grid);
    const mapLink = body.querySelector('.modal-map-link');
    body.insertBefore(section, mapLink || null);
  }
  async function fetchPublicDomainPhotos(site, body) {
    const english = site.name?.en || site.id;
    const search = 'filetype:bitmap ' + english + ' Egypt -people -person -tourist -tourists -man -woman -crowd -portrait';
    const url = 'https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=' + encodeURIComponent(search) + '&gsrnamespace=6&gsrlimit=50&prop=imageinfo&iiprop=url%7Cextmetadata&iiurlwidth=720&format=json&origin=*';
    const response = await fetch(url, {headers: {'Accept': 'application/json'}});
    if (!response.ok) throw new Error('Wikimedia Commons returned ' + response.status);
    const data = await response.json();
    const pages = Object.values(data.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    const photos = [];
    const seen = new Set();
    const sourceRecord = (window.DISCOVER_KEMET_SOURCES || []).find(item => item.id === site.id);
    const cardImage = document.querySelector('#siteGrid [data-site-id="' + CSS.escape(site.id) + '"] .site-photo img');
    if (!peopleInExistingPhoto.has(site.id) && sourceRecord?.imagePage && photoLicenseAllowed(sourceRecord.imageCredit) && cardImage?.src) {
      photos.push({title: (site.name?.en || site.id) + ' (existing site photo)', thumb: cardImage.src, page: sourceRecord.imagePage,
        artist: sourceRecord.imageCredit, license: sourceRecord.imageCredit.split('·').pop().trim(), licenseUrl: sourceRecord.imageLicense});
      seen.add(sourceRecord.imagePage);
    }
    for (const page of pages) {
      const info = page.imageinfo?.[0];
      const meta = info?.extmetadata || {};
      const license = unescapeMarkup(meta.LicenseShortName?.value);
      if (!info?.thumburl || !info?.descriptionurl || !photoLicenseAllowed(license) || prohibitedPhotoTerms.test(page.title)) continue;
      if (seen.has(page.title) || seen.has(info.descriptionurl)) continue;
      seen.add(page.title);
      seen.add(info.descriptionurl);
      photos.push({title: page.title, thumb: info.thumburl, page: info.descriptionurl,
        artist: unescapeMarkup(meta.Artist?.value || meta.Credit?.value).replace(/\s+/g, ' ').slice(0, 160),
        license, licenseUrl: meta.LicenseUrl?.value || 'https://creativecommons.org/publicdomain/zero/1.0/'});
      if (photos.length === 5) break;
    }
    if (photos[0] && peopleInExistingPhoto.has(site.id)) {
      const image = document.querySelector('#siteGrid [data-site-id="' + CSS.escape(site.id) + '"] .site-photo img');
      if (image) image.src = photos[0].thumb;
    }
    return photos;
  }
  async function loadPhotoGallery(body, site) {
    if (body.dataset.galleryLoading === site.id) return;
    body.dataset.galleryLoading = site.id;
    const section = document.createElement('section');
    section.className = 'place-photo-gallery';
    section.dataset.photoGallery = site.id;
    section.append(textNode('h3', labels[language()].galleryTitle), textNode('p', labels[language()].galleryLoading, 'gallery-message'));
    body.append(section);
    try {
      let photos = galleryCache.get(site.id);
      if (!photos) {
        photos = await fetchPublicDomainPhotos(site, body);
        galleryCache.set(site.id, photos);
      }
      if (!body.isConnected || body.dataset.galleryLoading !== site.id) return;
      section.remove();
      body.dataset.galleryLoading = '';
      renderPhotoGallery(body, site, photos);
    } catch (error) {
      console.warn('Place photo gallery unavailable:', error);
      const retry = document.createElement('button');
      retry.className = 'gallery-retry';
      retry.type = 'button';
      retry.textContent = labels[language()].galleryError;
      retry.addEventListener('click', () => { section.remove(); body.dataset.galleryLoading = ''; galleryCache.delete(site.id); loadPhotoGallery(body, site); });
      section.replaceChildren(textNode('h3', labels[language()].galleryTitle), retry);
      body.dataset.galleryLoading = '';
    }
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
    (window.DISCOVER_KEMET_GALLERY_CREDITS || []).forEach(photo => {
      const name = photo.name?.[language()] || photo.name?.en || photo.id;
      entries.push({name, kind: copy.photo + ' — ' + (photo.artist || 'Wikimedia Commons'), url: photo.page});
      entries.push({name, kind: copy.license + ' — ' + photo.license, url: photo.licenseUrl});
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


  const visitedStorageKey = 'discoverkemet-visited-v1';
  function getVisitedIds() {
    try { const value = JSON.parse(localStorage.getItem(visitedStorageKey) || '[]'); return Array.isArray(value) ? value.map(String) : []; }
    catch (error) { return []; }
  }
  function saveVisitedIds(ids) {
    try { localStorage.setItem(visitedStorageKey, JSON.stringify(ids)); }
    catch (error) { console.warn('Could not save visited places on this device:', error); }
  }
  function updateVisitedLabels() {
    const copy = labels[language()];
    const nav = document.getElementById('visitedNavLink');
    if (nav) { const title = nav.querySelector('[data-visited-label]'); if (title) title.textContent = copy.visitedTitle; }
    const title = document.getElementById('visitedTitle'); if (title) title.textContent = copy.visitedTitle;
    const subtitle = document.getElementById('visitedSubtitle'); if (subtitle) subtitle.textContent = copy.visitedSubtitle;
    const empty = document.getElementById('visitedEmpty'); if (empty) empty.textContent = copy.visitedEmpty;
    const clear = document.getElementById('clearVisited'); if (clear) clear.textContent = copy.visitedClear;
    const storage = document.getElementById('visitedStorage'); if (storage) storage.textContent = copy.visitStorage;
  }
  function renderVisited() {
    const grid = document.getElementById('visitedGrid');
    if (!grid || typeof sites === 'undefined') return;
    const ids = getVisitedIds();
    const places = ids.map(id => sites.find(site => String(site.id) === id)).filter(Boolean);
    const count = document.getElementById('visitedCount'); if (count) count.textContent = labels[language()].visitedCount(places.length);
    const badge = document.getElementById('visitedNavCount'); if (badge) badge.textContent = new Intl.NumberFormat(language() === 'ar' ? 'ar-EG' : 'en').format(places.length);
    const empty = document.getElementById('visitedEmpty'); if (empty) empty.hidden = places.length > 0;
    const clear = document.getElementById('clearVisited'); if (clear) clear.hidden = places.length === 0;
    grid.innerHTML = places.map((site, index) => siteCard(site, index)).join('');
    enhanceCards(grid);
  }
  function showVisitNotice(message) {
    const node = document.getElementById('toast');
    if (!node) return;
    node.textContent = message; node.classList.add('show');
    window.setTimeout(() => node.classList.remove('show'), 2500);
  }
  function addVisitedAction(body, site) {
    if (body.querySelector('[data-visited-place]')) return;
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'button button-gold visited-action'; button.dataset.visitedPlace = site.id;
    const update = () => {
      const marked = getVisitedIds().includes(String(site.id));
      button.textContent = marked ? labels[language()].visitedButtonMarked : labels[language()].visitButton;
      button.setAttribute('aria-pressed', String(marked));
    };
    update();
    button.addEventListener('click', () => {
      const ids = getVisitedIds(), id = String(site.id), exists = ids.includes(id);
      saveVisitedIds(exists ? ids.filter(item => item !== id) : [...ids, id]);
      update(); renderVisited();
      showVisitNotice(labels[language()][exists ? 'visitRemoved' : 'visitAdded']);
    });
    const source = body.querySelector('.site-source');
    if (source) source.insertAdjacentElement('beforebegin', button); else body.append(button);
  }
  function initializeVisitedPage() {
    updateVisitedLabels(); renderVisited();
    document.getElementById('clearVisited')?.addEventListener('click', () => {
      saveVisitedIds([]); renderVisited(); showVisitNotice(labels[language()].visitRemoved);
    });
    const grid = document.getElementById('visitedGrid');
    grid?.addEventListener('click', event => {
      if (event.target.closest('[data-source]')) return;
      const card = event.target.closest('[data-site-id]');
      if (card) { const site = sites.find(item => String(item.id) === card.dataset.siteId); if (site) showSite(site); }
    });
    grid?.addEventListener('keydown', event => {
      if (event.key === 'Enter' && event.target.matches('[data-site-id]')) {
        const site = sites.find(item => String(item.id) === event.target.dataset.siteId); if (site) showSite(site);
      }
    });
    window.addEventListener('storage', event => { if (event.key === visitedStorageKey) renderVisited(); });
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
    applyCopyOverrides();
    initializeVisitedPage();
    renderSources();
    enhanceCards(document);
    enhanceModal(document);
    const cards = document.getElementById('siteGrid');
    if (cards) new MutationObserver(() => { enhanceCards(cards); renderSources(); renderVisited(); }).observe(cards, {childList: true, subtree: true});
    const modal = document.getElementById('modal');
    if (modal) new MutationObserver(() => enhanceModal(modal)).observe(modal, {childList: true, subtree: true});
    document.getElementById('languageToggle')?.addEventListener('click', () => {
      setTimeout(() => { setStatus(currentStatus[0], currentStatus[1]); enhanceCards(document); enhanceModal(document); renderSources(); updateVisitedLabels(); renderVisited(); }, 0);
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
      if (Date.now() - started >= 500 && document.readyState !== 'loading') {
        if (note) note.textContent = state === 'loaded' ? (en ? 'Database ready. Opening your guide…' : 'قاعدة البيانات جاهزة، جارٍ فتح الدليل…') : (en ? 'Opening the guide while data finishes loading…' : 'جارٍ فتح الدليل بينما يكتمل تحميل البيانات…');
        hide();
        return;
      }
      if (Date.now() - started > 1800) {
        if (note) note.textContent = en ? 'Taking longer than expected; opening the guide now.' : 'استغرق التحميل وقتًا أطول من المتوقع؛ جارٍ فتح الدليل.';
        hide();
        return;
      }
      if (note) note.textContent = en ? 'Loading the site and checking the database…' : 'جارٍ تحميل الموقع والتحقق من قاعدة البيانات…';
      window.setTimeout(poll, 100);
    };
    poll();
    window.setTimeout(() => { if (loader && !loader.classList.contains('is-hidden')) hide(); }, 1200);
  }
  document.addEventListener('DOMContentLoaded', waitForStartup, { once: true });
})();