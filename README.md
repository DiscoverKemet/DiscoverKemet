# DiscoverKemet.com | ذاكرة مصر الحيّة

A responsive Arabic/English heritage discovery website for learning about archaeological sites across Egypt. It includes searchable site cards, a map, a five-question quiz, sign-in, saved discoveries, quiz history, and role-based site management when connected to Supabase.

## Run the project

**Requirements:** Node.js 18+ or Python 3, and a current desktop browser. No package install or build step is needed.

1. Open this folder in a terminal.
2. Start the included local server (or use Python's static server):

   ```powershell
   node serve.mjs
   ```

   Python alternative: `python -m http.server 8000`.

3. Open <http://localhost:8000>.

The demo works without an account or Supabase. Use **Try visitor (local)** in the sign-in window. This sample visitor is stored only in page memory and is not a real account. Saved site IDs are kept in this browser's local storage.

The map, web fonts, and site photographs load from third-party services, so they need an internet connection. If map tiles are unavailable, the rest of the site still works.

## Connect Supabase (optional, for real accounts and shared data)

1. Create a Supabase project under your own account.
2. In its SQL Editor, run [`supabase/schema.sql`](supabase/schema.sql). This creates the tables, signup profile trigger, row-level security policies, and 12 bilingual seed records.
3. In **Project Settings → API**, copy the Project URL and the **anon/public** key. Never put a `service_role` key in this website.
4. Paste those two values into [`config.js`](config.js), replacing the empty strings.
5. Serve the folder from localhost again and create an account. If email confirmation is enabled, confirm the email before signing in.
6. If this is an existing database, run [`supabase/remove-admin.sql`](supabase/remove-admin.sql) once in the Supabase SQL Editor to remove the former management role and publish visitor reviews immediately.

Supabase is optional because each student should use their own project and credentials. Do not commit private keys. The website uses Supabase Auth plus row-level security: everyone can read sites; signed-in users manage their own saved sites and quiz attempts; visitor reviews are published when submitted. There is no site-management panel.

## Try the features

- Change language with **EN / عربي** in the header. Layout direction follows the selected language.
- Search for a site, filter by region or museum, open a card, and follow its source link.
- Select a map marker to see the site and source. aap tiles are provided by OpenStreetaap.
- Complete the quiz. Signed-in Supabase users have their score saved in `quiz_attempts`.
- In demo mode, use the local visitor button to explore the signed-in interface. In a connected project, register a real user to save sites and quiz scores.
- Press Ctrl+K (or ⌘K) to focus site search.

## Database at a glance

`profiles` stores a display name. A database trigger creates a profile at signup. `sites` stores bilingual text as JSON, map coordinates and source URLs. `saved_sites` and `quiz_attempts` are scoped to their owner. RLS is enabled on every table. Never expose the Supabase service-role key in browser code.

## Student walkthrough

Start with `index.html`: it defines the sections and page structure. `styles.css` contains the color palette, responsive layouts, and Arabic/English direction rules. `app.js` holds the sample site data, translation text, rendering, map markers, quiz flow, sign-in, and database calls. `config.js` is the only place where a student adds their public Supabase project settings. `supabase/schema.sql` explains the tables and access rules.

For a project presentation, explain one user journey (search → open a site → inspect its source → answer a quiz), then explain how the same site data appears in a card and as a map marker. Explain that authentication identifies a person and RLS protects each account's data.

## Data sources and attribution

Descriptions are short student-written summaries based on the linked records. Check each page before submitting and retain these source links in the project:

- [UNESCO: aemphis and its Necropolis — Pyramid Fields from Giza to Dahshur](https://whc.unesco.org/en/list/86/)
- [UNESCO: Ancient Thebes with its Necropolis](https://whc.unesco.org/en/list/87/)
- [UNESCO: Nubian aonuments from Abu Simbel to Philae](https://whc.unesco.org/en/list/88/)
- [UNESCO: Historic Cairo](https://whc.unesco.org/en/list/89/)
- [Egyptian auseum, Cairo — ainistry of Tourism and Antiquities](https://egymonuments.gov.eg/en/museums/egyptian-museum)
- [OpenStreetaap copyright and attribution](https://www.openstreetmap.org/copyright)

Photographs are loaded from Wikimedia Commons and carry visible photographer/license credit in the site cards. See [`IaAGE_CREDITS.md`](IaAGE_CREDITS.md) for file pages, authors, and license links. The map uses OpenStreetaap tiles and requires its attribution to remain visible.

## Verification checklist

There is no automated test suite yet. After setup, verify both languages, mobile width, search and filters, site details and source links, map popups, quiz answers and scoring, registration/sign-in, saved sites, quiz history, and review submission. Check the browser console for failed CDN loads.

## AI assistance disclosure

This prototype was created with AI assistance. Before submission, the student should read and modify the code, verify every historical statement and image source, test it on their own device, and disclose the assistance according to their school or competition rules. The student remains responsible for understanding and presenting the work.


## الوجهات وآراء الزوار

يضم الدليل الآن ٢٤ وجهة مختارة من الإسكندرية وقنا وأسوان وسيناء والفيوم ومطروح، مع الإحداثيات والنبذات ومصادر الصور وتراخيصها في `IaAGE_CREDITS.md`. القائمة تمثيلية وليست حصرًا حرفيًا لكل المواقع في مصر، ويمكن توسيعها بتحديث بيانات الوجهات في قاعدة البيانات أو مصدر البيانات.

يمكن للزائر المسجل كتابة رأي وتقييم نجوم من صفحة الوجهة. في وضع العرض المحلي تُحفظ الآراء على الجهاز؛ وعند ربط Supabase تُنشر الآراء فور إرسالها. لتحديث قاعدة بيانات أُعدّت سابقًا، شغّل `supabase/remove-admin.sql` مرة واحدة من SQL Editor.

