
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const COPY = {
  "ar": {
    "announcement": "دليل المواقع التاريخية والسياحية في مصر",
    "brandSub": "ذاكرة مصر الحيّة",
    "navExplore": "استكشف",
    "navMap": "الخريطة",
    "navQuiz": "اختبر معلوماتك",
    "navAbout": "عن المنصة",
    "navDestinations": "الوجهات",
    "signIn": "دخول",
    "heroEyebrow": "مواقع أثرية وطبيعية من أنحاء مصر",
    "heroTitle": "استكشف<br/><em>مواقع مصر</em>",
    "heroDescription": "ابحث عن المواقع الأثرية والطبيعية، واقرأ معلوماتها ومصادرها، ثم افتح موقعها على الخريطة.",
    "heroCta": "تصفّح المواقع",
    "heroMap": "استكشف الخريطة",
    "scroll": "مرّر للاستكشاف",
    "statYears": "عام من التاريخ",
    "statSites": "وجهة مختارة",
    "statLanguages": "لغتان، حكاية واحدة",
    "statNote": "الدليل متاح بالعربية والإنجليزية.",
    "sitesKicker": "المواقع والأماكن",
    "sitesHeading": "اكتشف <em>مصر</em>",
    "sitesSub": "اعرض تفاصيل المكان، صوره، مصدر المعلومات، ورابط الخريطة.",
    "allSites": "عرض كل المواقع",
    "filterAll": "الكل",
    "filterNorth": "مصر السفلى",
    "filterSouth": "مصر العليا",
    "filterCentral": "الصحراء والبحر الأحمر",
    "filterMuseums": "متاحف",
    "searchPlaceholder": "ابحث عن موقع...",
    "emptyState": "لا توجد نتائج. جرّب كلمة بحث مختلفة.",
    "mapKicker": "مصر على خريطتك",
    "mapHeading": "من النيل<br/>إلى <em>التاريخ</em>",
    "mapDescription": "خطط لرحلتك القادمة. كل علامة تفتح لك نافذة على موقع أثري وحكايته.",
    "legendAncient": "مواقع أثرية",
    "legendMuseum": "متاحف",
    "openMap": "افتح خريطة مصر",
    "mapCaption": "٢٤ وجهة مختارة في رحلتك",
    "quizKicker": "اختبر معلوماتك",
    "quizHeading": "أسئلة عن<br/><em>مصر وتاريخها</em>",
    "quizDescription": "اختبارات عن آثار مصر ومدنها وجغرافيتها وطبيعتها، بصيغ وعدد أسئلة مختلف.",
    "questions": "أسئلة",
    "minutes": "دقيقتان",
    "attempts": "محاولاتك",
    "startQuiz": "ابدأ الاختبار",
    "quizChoose": "اختر اختبارك",
    "quizCategory": "المجال",
    "quizAll": "مزيج من كل المجالات",
    "quizHeritage": "الآثار والتراث",
    "quizPlaces": "المدن والوجهات",
    "quizNature": "الطبيعة والبيئة",
    "quizBegin": "ابدأ الجولة",
    "quizSource": "مصدر المعلومة",
    "trueLabel": "صح",
    "falseLabel": "خطأ",
    "quizGeography": "جغرافية مصر",
    "quizPlaces": "المدن والوجهات",
    "quizFormat": "طريقة الأسئلة",
    "quizMultiple": "اختيار من متعدد",
    "quizTrueFalse": "صح أم خطأ",
    "quizLength": "عدد الأسئلة",
    "quizStartNow": "ابدأ الاختبار",
    "newsletterKicker": "مزايا الحساب",
    "newsletterHeading": "احفظ المواقع التي تهمك.",
    "newsletterDescription": "سجّل الدخول لحفظ الأماكن التي زرتها، وكتابة تقييم، ومتابعة نتائج اختباراتك.",
    "joinUs": "إنشاء حساب أو دخول",
    "footerText": "مشروع تعليمي مستقل. المعلومات مرتبطة بمصادرها لتتمكن من الاستكشاف أكثر.",
    "source": "المصدر",
    "learnMore": "اقرأ عن الموقع",
    "regionNorth": "مصر السفلى",
    "regionSouth": "مصر العليا",
    "regionCentral": "مصر الوسطى",
    "categoryAncient": "موقع أثري",
    "categoryMuseum": "متحف",
    "categoryNatural": "محمية طبيعية",
    "loginTitle": "مرحبًا بعودتك",
    "loginSub": "سجّل دخولك لمتابعة رحلتك.",
    "email": "البريد الإلكتروني",
    "password": "كلمة المرور",
    "login": "دخول",
    "noAccount": "جديد هنا؟",
    "createAccount": "أنشئ حسابًا",
    "signupTitle": "ابدأ رحلتك",
    "signupSub": "أنشئ حسابًا مجانيًا لحفظ اكتشافاتك.",
    "name": "الاسم",
    "signup": "إنشاء حساب",
    "haveAccount": "لديك حساب؟",
    "switchLogin": "سجّل الدخول",
    "demoHint": "يمكنك استكشاف المنصة دون حساب. الاتصال بـ Supabase اختياري.",
    "visitorReviews": "آراء الزوار",
    "reviewName": "اسم العرض",
    "reviewRating": "تقييمك",
    "reviewText": "رأيك في المكان",
    "sendReview": "إرسال الرأي",
    "noReviews": "لا توجد آراء منشورة بعد.",
    "reviewModeration": "تُنشر الآراء فور إرسالها.",
    "reviewSaved": "تم حفظ رأيك على هذا الجهاز.",
    "reviewPublished": "تم نشر رأيك.",
    "reviewError": "تعذر إرسال الرأي.",
    "reviewValidation": "اكتب اسمًا ورأيًا من ٨ أحرف على الأقل.",
    "detail": "نبذة تاريخية",
    "coordinates": "الإحداثيات",
    "saved": "تم حفظ الموقع في قائمة اكتشافاتك.",
    "needLogin": "سجّل الدخول أولًا لحفظ المواقع.",
    "quizCorrect": "إجابة صحيحة! أحسنت.",
    "quizWrong": "ليست الإجابة الصحيحة. تعلّم شيئًا جديدًا!",
    "next": "التالي",
    "finish": "النتيجة",
    "quizDone": "انتهى الاختبار!",
    "yourScore": "نتيجتك",
    "outOf": "من 5",
    "tryAgain": "أعد الاختبار",
    "user": "مستخدم",
    "signedOut": "تم تسجيل الخروج.",
    "loggedIn": "تم تسجيل الدخول بنجاح.",
    "registered": "تم إنشاء حسابك. تحقق من بريدك لتأكيده.",
    "authError": "تعذر إكمال العملية. تحقق من إعداد Supabase وبياناتك.",
    "demoLogin": "وضع العرض: دخول تجريبي",
    "saveError": "تعذر حفظ التغيير. حاول مرة أخرى.",
    "modeCloud": "قاعدة البيانات متصلة",
    "modeDemo": "وضع العرض المحلي",
    "signOut": "خروج",
    "siteCount": "موقع",
    "readMore": "التفاصيل",
    "authDemoUser": "تجربة مستخدم (محلي)",
    "status": "الحالة",
    "profile": "حسابك",
    "savedSites": "المواقع المحفوظة",
    "noSaved": "لم تحفظ مواقع بعد.",
    "sources": "مصادر موثوقة",
    "chooseAnswer": "اختر إجابة:",
    "comingSoon": "هذه الميزة متاحة عند ربط قاعدة البيانات.",
    "passwordHint": "استخدم كلمة مرور طويلة وفريدة؛ الحد الأدنى ١٢ حرفًا عند إنشاء الحساب.",
    "trueLabel": "صح",
    "falseLabel": "خطأ",
    "proposedAnswer": "الاختيار المقترح:",
    "outOf": "من",
    "quizCountError": "لا توجد أسئلة كافية لهذا الاختيار. جرّب مجالًا آخر أو عددًا أقل."
  },
  "en": {
    "announcement": "A guide to Egypt’s historic and tourist sites",
    "brandSub": "The living memory of Egypt",
    "navExplore": "Explore",
    "navMap": "The map",
    "navQuiz": "Take the quiz",
    "navAbout": "About",
    "navDestinations": "Destinations",
    "signIn": "Sign in",
    "heroEyebrow": "Historic and natural sites across Egypt",
    "heroTitle": "Explore<br/><em>Egypt’s sites</em>",
    "heroDescription": "Search historic and natural places, read their details and sources, then open each location on the map.",
    "heroCta": "Browse sites",
    "heroMap": "Explore the map",
    "scroll": "Scroll to explore",
    "statYears": "years of history",
    "statSites": "featured destinations",
    "statLanguages": "languages, one story",
    "statNote": "Available in Arabic and English.",
    "sitesKicker": "Places and sites",
    "sitesHeading": "Discover <em>Egypt</em>",
    "sitesSub": "View place details, photographs, information sources, and map links.",
    "allSites": "View all sites",
    "filterAll": "All",
    "filterNorth": "Lower Egypt",
    "filterSouth": "Upper Egypt",
    "filterCentral": "Deserts & Red Sea",
    "filterMuseums": "Museums",
    "searchPlaceholder": "Search sites...",
    "emptyState": "No results. Try another search.",
    "mapKicker": "Egypt on your map",
    "mapHeading": "From the Nile<br/>to <em>history</em>",
    "mapDescription": "Plan your next journey. Each marker opens a window into a heritage site and its story.",
    "legendAncient": "Heritage sites",
    "legendMuseum": "Museums",
    "openMap": "Open Egypt map",
    "mapCaption": "24 featured destinations for your journey",
    "quizKicker": "Test your knowledge",
    "quizHeading": "Questions about<br/><em>Egypt and its history</em>",
    "quizDescription": "Explore Egypt through quizzes on heritage, destinations, geography, and nature.",
    "questions": "questions",
    "minutes": "minutes",
    "attempts": "your attempts",
    "startQuiz": "Start the quiz",
    "quizChoose": "Choose your quiz",
    "quizCategory": "Topic",
    "quizAll": "Mixed topics",
    "quizHeritage": "Heritage and sites",
    "quizPlaces": "Cities and destinations",
    "quizNature": "Nature and environment",
    "quizBegin": "Start round",
    "quizSource": "Fact source",
    "trueLabel": "True",
    "falseLabel": "False",
    "quizGeography": "Egypt geography",
    "quizPlaces": "Cities and destinations",
    "quizFormat": "Question style",
    "quizMultiple": "Multiple choice",
    "quizTrueFalse": "True or false",
    "quizLength": "Number of questions",
    "quizStartNow": "Start quiz",
    "newsletterKicker": "Account features",
    "newsletterHeading": "Save the places that matter to you.",
    "newsletterDescription": "Sign in to save places you have visited, write reviews, and track quiz results.",
    "joinUs": "Create an account or sign in",
    "footerText": "An independent learning project. Sources are linked so you can explore further.",
    "source": "Source",
    "learnMore": "Explore this site",
    "regionNorth": "Lower Egypt",
    "regionSouth": "Upper Egypt",
    "regionCentral": "Middle Egypt",
    "categoryAncient": "Heritage site",
    "categoryMuseum": "Museum",
    "categoryNatural": "Natural reserve",
    "loginTitle": "Welcome back",
    "loginSub": "Sign in to continue your journey.",
    "email": "Email address",
    "password": "Password",
    "login": "Sign in",
    "noAccount": "New here?",
    "createAccount": "Create an account",
    "signupTitle": "Start your journey",
    "signupSub": "Create a free account to save discoveries.",
    "name": "Name",
    "signup": "Create account",
    "haveAccount": "Already have an account?",
    "switchLogin": "Sign in",
    "demoHint": "Explore without an account. Supabase setup is optional.",
    "visitorReviews": "Visitor reviews",
    "reviewName": "Display name",
    "reviewRating": "Your rating",
    "reviewText": "Your thoughts about this place",
    "sendReview": "Submit review",
    "noReviews": "No published reviews yet.",
    "reviewModeration": "Reviews are published when submitted.",
    "reviewSaved": "Your review was saved on this device.",
    "reviewPublished": "Your review has been published.",
    "reviewError": "Could not submit the review.",
    "reviewValidation": "Enter a name and a review of at least 8 characters.",
    "detail": "About this site",
    "coordinates": "Coordinates",
    "saved": "Site saved to your discoveries.",
    "needLogin": "Sign in first to save sites.",
    "quizCorrect": "Correct! Well done.",
    "quizWrong": "Not quite. Here’s something new to learn!",
    "next": "Next",
    "finish": "See results",
    "quizDone": "Quiz complete!",
    "yourScore": "Your score",
    "outOf": "out of",
    "tryAgain": "Try again",
    "user": "Visitor",
    "signedOut": "You have signed out.",
    "loggedIn": "Signed in successfully.",
    "registered": "Account created. Check your email to confirm it.",
    "authError": "Could not complete that action. Check Supabase setup and your details.",
    "demoLogin": "Demo mode: sample login",
    "saveError": "Could not save that change. Try again.",
    "modeCloud": "Database connected",
    "modeDemo": "Local demo mode",
    "signOut": "Sign out",
    "siteCount": "sites",
    "readMore": "Details",
    "authDemoUser": "Try visitor (local)",
    "status": "Status",
    "profile": "Your account",
    "savedSites": "Saved sites",
    "noSaved": "No saved sites yet.",
    "sources": "Trusted sources",
    "chooseAnswer": "Choose an answer:",
    "comingSoon": "This feature is available when you connect a database.",
    "safetyKicker": "Visitor guide",
    "safetyHeading": "Your safety <em>first</em>",
    "safetyDescription": "Key emergency numbers in Egypt and quick visitor guidance. For immediate danger, contact the relevant service directly.",
    "policeLabel": "Police",
    "ambulanceLabel": "Ambulance",
    "fireLabel": "Fire service",
    "touristPoliceLabel": "Tourist police",
    "safetyTips": "Visitor guidance",
    "safetyTip1": "Keep your accommodation address and a trusted contact handy; share your itinerary with a companion.",
    "safetyTip2": "Follow site staff instructions and do not touch antiquities or cross barriers.",
    "safetyTip3": "Use licensed guides or transport and agree on the price before the service begins.",
    "safetySource": "Emergency-number source: UK government Egypt travel advice",
    "passwordHint": "Use a long, unique password. New accounts require at least 12 characters.",
    "trueLabel": "True",
    "falseLabel": "False",
    "proposedAnswer": "Proposed answer:",
    "quizCountError": "There are not enough questions for that choice. Try another topic or a shorter quiz."
  }
};
const SITE_DATA = [
  {
    "id": "giza",
    "name": {
      "ar": "أهرامات الجيزة",
      "en": "Pyramids of Giza"
    },
    "region": "north",
    "type": "ancient",
    "lat": 29.9792,
    "lng": 31.1342,
    "period": {
      "ar": "الدولة القديمة · نحو ٢٥٧٠ ق.م",
      "en": "Old Kingdom · c. 2570 BCE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Giza-pyramids.JPG?width=1000",
    "imageCredit": "Robster1983 · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Giza-pyramids.JPG",
    "description": {
      "ar": "تقف أهرامات خوفو وخفرع ومنقرع على هضبة الجيزة ضمن حقل الأهرامات الممتد من الجيزة إلى دهشور، وهو شاهد استثنائي على عمارة الدولة القديمة.",
      "en": "The pyramids of Khufu, Khafre and Menkaure stand on the Giza Plateau within the pyramid fields stretching from Giza to Dahshur, an exceptional record of Old Kingdom architecture."
    },
    "source": "https://whc.unesco.org/en/list/86/"
  },
  {
    "id": "saqqara",
    "name": {
      "ar": "سقارة وهرم زوسر",
      "en": "Saqqara & Djoser’s Step Pyramid"
    },
    "region": "north",
    "type": "ancient",
    "lat": 29.8713,
    "lng": 31.2165,
    "period": {
      "ar": "الأسرة الثالثة · نحو ٢٦٧٠ ق.م",
      "en": "Third Dynasty · c. 2670 BCE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Saqqara_Necropolis.jpg?width=1000",
    "imageCredit": "LisethHatta17 · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Saqqara_Necropolis.jpg",
    "description": {
      "ar": "تضم سقارة هرم زوسر المدرج ومقابر من عصور متعاقبة؛ ويذكر مركز التراث العالمي لليونسكو أن الهرم المدرج أقدم هرم شُيّد.",
      "en": "Saqqara includes the Step Pyramid of Djoser and tombs from successive eras. UNESCO describes the Step Pyramid as the oldest pyramid to be constructed."
    },
    "source": "https://whc.unesco.org/en/list/86/"
  },
  {
    "id": "memphis",
    "name": {
      "ar": "ممفيس",
      "en": "Memphis"
    },
    "region": "north",
    "type": "ancient",
    "lat": 29.8474,
    "lng": 31.255,
    "lperiod": "",
    "period": {
      "ar": "عاصمة مصر القديمة",
      "en": "Ancient Egyptian capital"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Memphis._The_Sphinx_of_Memphis._14_feet_high,_26_feet_long,_weight_90_tons_LOC_matpc.02922.jpg?width=1000",
    "imageCredit": "Library of Congress Matson Collection · Public Domain",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Memphis._The_Sphinx_of_Memphis._14_feet_high,_26_feet_long,_weight_90_tons_LOC_matpc.02922.jpg",
    "description": {
      "ar": "كانت ممفيس أول عاصمة لمصر الموحدة ومركزًا إداريًا مهمًا في الدولة القديمة، ويرتبط اسمها بموقع التراث العالمي «ممفيس ومقبرتها».",
      "en": "Memphis was the first capital of unified Egypt and a major administrative center in the Old Kingdom. It lends its name to the UNESCO property “Memphis and its Necropolis.”"
    },
    "source": "https://whc.unesco.org/en/list/86/"
  },
  {
    "id": "dahshur",
    "name": {
      "ar": "دهشور",
      "en": "Dahshur"
    },
    "region": "north",
    "type": "ancient",
    "lat": 29.795,
    "lng": 31.207,
    "period": {
      "ar": "الأسرة الرابعة · الدولة القديمة",
      "en": "Fourth Dynasty · Old Kingdom"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/-Pyramid_at_Dahsh%C3%BBr-_MET_DP116367.jpg?width=1000",
    "imageCredit": "The Metropolitan Museum of Art · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:-Pyramid_at_Dahsh%C3%BBr-_MET_DP116367.jpg",
    "description": {
      "ar": "جزء من حقل الأهرامات المسجل على قائمة التراث العالمي، ويضم الأهرامات المنحنية والحمراء المرتبطة بتطور بناء الأهرامات.",
      "en": "Part of the World Heritage-listed pyramid fields, Dahshur includes the Bent and Red Pyramids associated with the development of pyramid building."
    },
    "source": "https://whc.unesco.org/en/list/86/"
  },
  {
    "id": "islamic-cairo",
    "name": {
      "ar": "القاهرة التاريخية",
      "en": "Historic Cairo"
    },
    "region": "north",
    "type": "ancient",
    "lat": 30.0478,
    "lng": 31.262,
    "period": {
      "ar": "تأسست عام ٩٦٩م",
      "en": "Founded in 969 CE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Portaal_van_de_Al-Azhar-moskee_te_Ca%C3%AFro_Le_Caire._Mosqu%C3%A9e_el-Azhar%2C_le_Portal._(titel_op_object)%2C_RP-F-00-4159.jpg?width=1000",
    "imageCredit": "Rijksmuseum · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Portaal_van_de_Al-Azhar-moskee_te_Ca%C3%AFro_Le_Caire._Mosqu%C3%A9e_el-Azhar,_le_Portal._(titel_op_object),_RP-F-00-4159.jpg",
    "description": {
      "ar": "يضم موقع القاهرة التاريخية نسيجًا عمرانيًا غنيًا بالمساجد والمدارس والحمامات والنوافير، ويعكس أكثر من ألف عام من تاريخ المدينة.",
      "en": "Historic Cairo contains a rich urban fabric of mosques, madrasas, hammams and fountains, reflecting more than a millennium of the city’s history."
    },
    "source": "https://whc.unesco.org/en/list/89/"
  },
  {
    "id": "egyptian-museum",
    "name": {
      "ar": "المتحف المصري بالقاهرة",
      "en": "Egyptian Museum, Cairo"
    },
    "region": "north",
    "type": "museum",
    "lat": 30.0478,
    "lng": 31.2336,
    "period": {
      "ar": "افتُتح عام ١٩٠٢م",
      "en": "Opened in 1902"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Egyptian_Museum_(272).jpg?width=1000",
    "imageCredit": "لا روسا · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Egyptian_Museum_(272).jpg",
    "description": {
      "ar": "متحف أثري في ميدان التحرير يضم مجموعات واسعة من آثار مصر القديمة. راجع الموقع الرسمي للمتحف للتفاصيل والزيارة.",
      "en": "An archaeological museum in Tahrir Square with extensive collections of ancient Egyptian antiquities. See the museum’s official website for visiting details."
    },
    "source": "https://egymonuments.gov.eg/en/museums/egyptian-museum"
  },
  {
    "id": "aby-simbel",
    "name": {
      "ar": "أبو سمبل",
      "en": "Abu Simbel"
    },
    "region": "south",
    "type": "ancient",
    "lat": 22.3372,
    "lng": 31.6258,
    "period": {
      "ar": "عهد رمسيس الثاني · القرن ١٣ ق.م",
      "en": "Reign of Ramesses II · 13th century BCE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Abu_Simbel_Temple_of_Ramesses_II_(9794521783).jpg?width=1000",
    "imageCredit": "Gary Lee Todd · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Abu_Simbel_Temple_of_Ramesses_II_(9794521783).jpg",
    "description": {
      "ar": "معبدان صخريان في النوبة بُنيا في عهد رمسيس الثاني. أُدرجا ضمن حملة دولية لنقلهما وإنقاذهما عند إنشاء السد العالي.",
      "en": "Two rock-cut temples in Nubia built during the reign of Ramesses II. They were included in an international campaign to relocate and save monuments during construction of the High Dam."
    },
    "source": "https://whc.unesco.org/en/list/88/"
  },
  {
    "id": "philae",
    "name": {
      "ar": "جزيرة فيلة",
      "en": "Philae"
    },
    "region": "south",
    "type": "ancient",
    "lat": 24.025,
    "lng": 32.884,
    "period": {
      "ar": "العصر البطلمي والروماني",
      "en": "Ptolemaic and Roman periods"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/West_Colonnade,_Philae_Temple_Complex,_Agilkia_Island,_Aswan,_AG,_EGY_(48027073753).jpg?width=1000",
    "imageCredit": "Warren LeMay · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:West_Colonnade,_Philae_Temple_Complex,_Agilkia_Island,_Aswan,_AG,_EGY_(48027073753).jpg",
    "description": {
      "ar": "تقع آثار فيلة ضمن موقع «معالم النوبة من أبو سمبل إلى فيلة»؛ نُقلت معابدها إلى جزيرة أجيليكا ضمن حملة إنقاذ آثار النوبة.",
      "en": "Philae is part of the UNESCO property “Nubian Monuments from Abu Simbel to Philae.” Its temples were relocated to Agilkia Island as part of the Nubian monuments rescue campaign."
    },
    "source": "https://whc.unesco.org/en/list/88/"
  },
  {
    "id": "karnak",
    "name": {
      "ar": "مجمع معابد الكرنك",
      "en": "Karnak Temple Complex"
    },
    "region": "south",
    "type": "ancient",
    "lat": 25.7188,
    "lng": 32.6573,
    "period": {
      "ar": "من الدولة الوسطى إلى العصر البطلمي",
      "en": "Middle Kingdom to Ptolemaic era"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Hypostyle_Hall,_Karnak_Temple,_Luxor,_LG,_EGY_(48009532971).jpg?width=1000",
    "imageCredit": "Warren LeMay · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Great_Hypostyle_Hall,_Karnak_Temple,_Luxor,_LG,_EGY_(48009532971).jpg",
    "description": {
      "ar": "مجمع معابد على الضفة الشرقية للأقصر، يضم الكرنك ضمن مدينة طيبة القديمة ومقبرتها، المسجلة في قائمة التراث العالمي.",
      "en": "A temple complex on Luxor’s east bank, Karnak forms part of Ancient Thebes with its Necropolis, inscribed on the World Heritage List."
    },
    "source": "https://whc.unesco.org/en/list/87/"
  },
  {
    "id": "luxor",
    "name": {
      "ar": "معبد الأقصر",
      "en": "Luxor Temple"
    },
    "region": "south",
    "type": "ancient",
    "lat": 25.6995,
    "lng": 32.6391,
    "period": {
      "ar": "نحو ١٤٠٠ ق.م وما بعده",
      "en": "c. 1400 BCE and later"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Luxor_Temple,_Luxor,_LG,_EGY_(48009443818).jpg?width=1000",
    "imageCredit": "Warren LeMay · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Luxor_Temple,_Luxor,_LG,_EGY_(48009443818).jpg",
    "description": {
      "ar": "يقع معبد الأقصر على الضفة الشرقية للنيل، وهو أحد معابد مدينة طيبة القديمة المدرجة على قائمة التراث العالمي.",
      "en": "Luxor Temple stands on the Nile’s east bank and is one of the temples of Ancient Thebes, a UNESCO World Heritage property."
    },
    "source": "https://whc.unesco.org/en/list/87/"
  },
  {
    "id": "valley-kings",
    "name": {
      "ar": "وادي الملوك",
      "en": "Valley of the Kings"
    },
    "region": "south",
    "type": "ancient",
    "lat": 25.7402,
    "lng": 32.6014,
    "period": {
      "ar": "الدولة الحديثة · نحو ١٥٠٠–١٠٠٠ ق.م",
      "en": "New Kingdom · c. 1500–1000 BCE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Theban_region,_Valley_of_the_Kings,_Fotografie_Novecentesche,_1903-1935,_photo_1_of_1_-_Archivio_fotografico_Museo_Egizio,_Turin_-_Museo_di_antropologia_UniTo_MAFM_0275.jpg?width=1000",
    "imageCredit": "Museo Egizio / Museo di Antropologia, Turin · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Theban_region,_Valley_of_the_Kings,_Fotografie_Novecentesche,_1903-1935,_photo_1_of_1_-_Archivio_fotografico_Museo_Egizio,_Turin_-_Museo_di_antropologia_UniTo_MAFM_0275.jpg",
    "description": {
      "ar": "مقبرة ملكية على الضفة الغربية لطيبة القديمة، وتضم مقابر ملوك من الدولة الحديثة، ومنها مقبرة توت عنخ آمون.",
      "en": "A royal burial ground on the west bank of Ancient Thebes, containing tombs of New Kingdom rulers, including Tutankhamun."
    },
    "source": "https://whc.unesco.org/en/list/87/"
  },
  {
    "id": "hatshepsut",
    "name": {
      "ar": "معبد حتشبسوت",
      "en": "Temple of Hatshepsut"
    },
    "region": "south",
    "type": "ancient",
    "lat": 25.7382,
    "lng": 32.6068,
    "period": {
      "ar": "الأسرة الثامنة عشرة · نحو ١٤٧٠ ق.م",
      "en": "Eighteenth Dynasty · c. 1470 BCE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Hatschepsut-Tempel.jpg?width=1000",
    "imageCredit": "Ägypten Kulturreisen · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Hatschepsut-Tempel.jpg",
    "description": {
      "ar": "معبد جنائزي في الدير البحري على الضفة الغربية لطيبة، مدرج ضمن موقع التراث العالمي لطيبة القديمة ومقبرتها.",
      "en": "A mortuary temple at Deir el-Bahari on Thebes’ west bank, included in the UNESCO World Heritage property of Ancient Thebes with its Necropolis."
    },
    "source": "https://whc.unesco.org/en/list/87/"
  },

  {
    "id": "dendera",
    "name": {
      "ar": "معبد دندرة",
      "en": "Temple of Dendera"
    },
    "region": "north",
    "area": {
      "ar": "قنا · صعيد مصر",
      "en": "Qena · Upper Egypt"
    },
    "lat": 26.1417,
    "lng": 32.67,
    "period": {
      "ar": "العصر البطلمي",
      "en": "Ptolemaic period"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Dendera,_Temple_of_Hathor,_19th_century_pictures,_1879,_photo_1_of_9_-_Archivio_fotografico_Museo_Egizio,_Turin_INV02_010.jpg?width=1000",
    "imageCredit": "Museo Egizio, Turin · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Dendera,_Temple_of_Hathor,_19th_century_pictures,_1879,_photo_1_of_9_-_Archivio_fotografico_Museo_Egizio,_Turin_INV02_010.jpg",
    "source": "https://egymonuments.gov.eg/monuments/temple-of-dendera/",
    "description": {
      "ar": "معبد حتحور في دندرة، وتشتهر واجهته بأعمدته ذات تيجان حتحور.",
      "en": "Temple of Hathor at Dendera, known for columns with Hathor capitals."
    },
    "type": "ancient"
  },
  {
    "id": "edfu",
    "name": {
      "ar": "معبد إدفو",
      "en": "Edfu Temple"
    },
    "region": "south",
    "area": {
      "ar": "إدفو · أسوان",
      "en": "Edfu · Aswan"
    },
    "lat": 24.978,
    "lng": 32.873,
    "period": {
      "ar": "٢٣٧–٥٧ ق.م",
      "en": "237–57 BCE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Temple_of_Horus_at_Edfu,_Edfu,_AG,_EGY_(48022433606).jpg?width=1000",
    "imageCredit": "Warren LeMay · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Temple_of_Horus_at_Edfu,_Edfu,_AG,_EGY_(48022433606).jpg",
    "source": "https://egymonuments.gov.eg/en/monuments/temple-of-edfu/",
    "description": {
      "ar": "معبد مكرس لحورس على الضفة الغربية للنيل.",
      "en": "A temple dedicated to Horus on the Nile’s west bank."
    },
    "type": "ancient"
  },
  {
    "id": "kom-ombo",
    "name": {
      "ar": "معبد كوم أمبو",
      "en": "Kom Ombo Temple"
    },
    "region": "south",
    "area": {
      "ar": "كوم أمبو · أسوان",
      "en": "Kom Ombo · Aswan"
    },
    "lat": 24.452,
    "lng": 32.928,
    "period": {
      "ar": "العصر البطلمي والروماني",
      "en": "Ptolemaic and Roman periods"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kom_Ombo_Temple.jpg?width=1000",
    "imageCredit": "LisethHatta17 · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Kom_Ombo_Temple.jpg",
    "source": "https://egymonuments.gov.eg/monuments/kom-ombo-temple",
    "description": {
      "ar": "معبد مزدوج ارتبط بعبادة سوبك وحورس الأكبر.",
      "en": "A double temple associated with Sobek and Haroeris."
    },
    "type": "ancient"
  },
  {
    "id": "qaitbay",
    "name": {
      "ar": "قلعة قايتباي",
      "en": "Citadel of Qaitbay"
    },
    "region": "north",
    "area": {
      "ar": "الإسكندرية",
      "en": "Alexandria"
    },
    "lat": 31.2139,
    "lng": 29.8856,
    "period": {
      "ar": "١٤٧٧–١٤٧٩م",
      "en": "1477–1479 CE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Citadel_of_Qaitbay_in_Alexandria,_Egypt.png?width=1000",
    "imageCredit": "Rebeccananonof · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Citadel_of_Qaitbay_in_Alexandria,_Egypt.png",
    "source": "https://egymonuments.gov.eg/en/monuments/qaitbay-fort/",
    "description": {
      "ar": "حصن ساحلي بناه قايتباي في القرن الخامس عشر قرب موضع منارة الإسكندرية.",
      "en": "A coastal fortress built by Qaitbay in the 15th century near the ancient lighthouse site."
    },
    "type": "ancient"
  },
  {
    "id": "pompeys-pillar",
    "name": {
      "ar": "عمود السواري",
      "en": "Pompey’s Pillar"
    },
    "region": "north",
    "area": {
      "ar": "الإسكندرية",
      "en": "Alexandria"
    },
    "lat": 31.1824,
    "lng": 29.8972,
    "period": {
      "ar": "العصر الروماني",
      "en": "Roman period"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Zuil_van_Pompeius_in_het_Serapeum_van_Alexandri%C3%AB,_Egypte_Alexandria.-_Pompey%27s_Pillar_(titel_op_object)_Good%27s_Eastern_Series_(serietitel_op_object),_RP-F-F12896.jpg?width=1000",
    "imageCredit": "Rijksmuseum · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Zuil_van_Pompeius_in_het_Serapeum_van_Alexandri%C3%AB,_Egypte_Alexandria.-_Pompey%27s_Pillar_(titel_op_object)_Good%27s_Eastern_Series_(serietitel_op_object),_RP-F-F12896.jpg",
    "source": "https://egymonuments.gov.eg/archaeological-sites/",
    "description": {
      "ar": "عمود جرانيت ضمن آثار السيرابيوم في الإسكندرية.",
      "en": "A granite column within Alexandria’s Serapeum archaeological area."
    },
    "type": "ancient"
  },
  {
    "id": "kom-el-shoqafa",
    "name": {
      "ar": "مقابر كوم الشقافة",
      "en": "Catacombs of Kom El Shoqafa"
    },
    "region": "north",
    "area": {
      "ar": "الإسكندرية",
      "en": "Alexandria"
    },
    "lat": 31.1784,
    "lng": 29.8925,
    "period": {
      "ar": "القرن الثاني الميلادي",
      "en": "2nd century CE"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Tomb_of_Tigran,_Catacombs_of_Kom_el-Shoqafa.jpg?width=1000",
    "imageCredit": "Anonymous ancient fresco · Public Domain",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Tomb_of_Tigran,_Catacombs_of_Kom_el-Shoqafa.jpg",
    "source": "https://egymonuments.gov.eg/archaeological-sites/",
    "description": {
      "ar": "مقابر متعددة المستويات تمزج عناصر فنية مصرية ويونانية ورومانية.",
      "en": "A multi-level funerary complex blending Egyptian, Greek and Roman art."
    },
    "type": "ancient"
  },
  {
    "id": "kom-el-dikka",
    "name": {
      "ar": "المسرح الروماني بكوم الدكة",
      "en": "Kom El-Dikka Roman Theatre"
    },
    "region": "north",
    "area": {
      "ar": "الإسكندرية",
      "en": "Alexandria"
    },
    "lat": 31.1972,
    "lng": 29.909,
    "period": {
      "ar": "العصر الروماني",
      "en": "Roman period"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Kom_El-Dikka.jpg?width=1000",
    "imageCredit": "Keith · Public Domain Mark",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Kom_El-Dikka.jpg",
    "source": "https://egymonuments.gov.eg/archaeological-sites/",
    "description": {
      "ar": "موقع أثري بالإسكندرية يضم مسرحًا رومانيًا وآثار أحياء قديمة.",
      "en": "An archaeological site in Alexandria with a Roman theatre and ancient neighborhood remains."
    },
    "type": "ancient"
  },
  {
    "id": "unfinished-obelisk",
    "name": {
      "ar": "المسلة الناقصة",
      "en": "Unfinished Obelisk"
    },
    "region": "south",
    "area": {
      "ar": "أسوان",
      "en": "Aswan"
    },
    "lat": 24.0775,
    "lng": 32.898,
    "period": {
      "ar": "الدولة الحديثة على الأرجح",
      "en": "Probably New Kingdom"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Unfinished_obelisk_01_977.PNG?width=1000",
    "imageCredit": "Ijanderson977 · Public Domain",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Unfinished_obelisk_01_977.PNG",
    "source": "https://egymonuments.gov.eg/en/archaeological-sites/aswan",
    "description": {
      "ar": "أثر في محاجر الجرانيت بأسوان يوضح مراحل نحت المسلات.",
      "en": "A monument in Aswan’s granite quarries illustrating obelisk carving."
    },
    "type": "ancient"
  },
  {
    "id": "elephantine",
    "name": {
      "ar": "جزيرة إلفنتين",
      "en": "Elephantine Island"
    },
    "region": "south",
    "area": {
      "ar": "أسوان",
      "en": "Aswan"
    },
    "lat": 24.0889,
    "lng": 32.887,
    "period": {
      "ar": "عصور متعددة",
      "en": "Several periods"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Elephantine_Island,_Aswan,_AG,_EGY_(48025313288).jpg?width=1000",
    "imageCredit": "Warren LeMay · CC0 public domain dedication",
    "imageLicense": "https://creativecommons.org/publicdomain/zero/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Elephantine_Island,_Aswan,_AG,_EGY_(48025313288).jpg",
    "source": "https://whc.unesco.org/en/list/88/",
    "description": {
      "ar": "جزيرة نيلية أثرية تضم بقايا مدينة قديمة ضمن آثار النوبة.",
      "en": "An archaeological Nile island with remains of an ancient town in the Nubian Monuments property."
    },
    "type": "ancient"
  },
  {
    "id": "saint-catherine",
    "name": {
      "ar": "منطقة سانت كاترين",
      "en": "Saint Catherine Area"
    },
    "region": "north",
    "area": {
      "ar": "جنوب سيناء",
      "en": "South Sinai"
    },
    "lat": 28.5559,
    "lng": 33.976,
    "period": {
      "ar": "موقع تراث عالمي · ٢٠٠٢",
      "en": "World Heritage · 2002"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/St._Catherine%27s_Monastery_in_the_Sinai_LOC_matpc.09664.jpg?width=1000",
    "imageCredit": "Library of Congress Matson Collection · Public Domain",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:St._Catherine%27s_Monastery_in_the_Sinai_LOC_matpc.09664.jpg",
    "source": "https://whc.unesco.org/en/list/954/",
    "description": {
      "ar": "منطقة جبلية ذات أهمية دينية وثقافية تضم دير سانت كاترين.",
      "en": "A mountainous area of religious and cultural significance, including Saint Catherine’s Monastery."
    },
    "type": "ancient"
  },
  {
    "id": "wadi-hitan",
    "name": {
      "ar": "وادي الحيتان",
      "en": "Wadi Al-Hitan (Whale Valley)"
    },
    "region": "central",
    "area": {
      "ar": "الفيوم · الصحراء الغربية",
      "en": "Fayoum · Western Desert"
    },
    "lat": 29.321,
    "lng": 30.19,
    "period": {
      "ar": "تراث طبيعي عالمي · ٢٠٠٥",
      "en": "Natural World Heritage · 2005"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Panorama_von_Wadi_Hitan.jpg?width=1000",
    "imageCredit": "Volker Scherl · Public Domain",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Panorama_von_Wadi_Hitan.jpg",
    "source": "https://whc.unesco.org/en/list/1186",
    "description": {
      "ar": "محمية صحراوية تحفظ حفريات توثق تطور الحيتان.",
      "en": "A protected desert area with fossils documenting whale evolution."
    },
    "type": "ancient"
  },
  {
    "id": "siwa-shali",
    "name": {
      "ar": "قلعة شالي في سيوة",
      "en": "Shali Fortress, Siwa"
    },
    "region": "north",
    "area": {
      "ar": "واحة سيوة · مطروح",
      "en": "Siwa Oasis · Matrouh"
    },
    "lat": 29.2032,
    "lng": 25.5195,
    "period": {
      "ar": "العصور الوسطى",
      "en": "Medieval period"
    },
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Shali_1.jpg?width=1000",
    "imageCredit": "Volker Scherl · Public Domain",
    "imageLicense": "https://creativecommons.org/publicdomain/mark/1.0/",
    "imagePage": "https://commons.wikimedia.org/wiki/File:Shali_1.jpg",
    "source": "https://whc.unesco.org/en/statesparties/eg/",
    "description": {
      "ar": "بقايا قلعة شالي التاريخية المبنية بمادة الكرشيف المحلية.",
      "en": "Historic Shali fortress remains, built with local kershif."
    },
    "type": "ancient"
  }

  ,{
    "id":"nmec","name":{"ar":"المتحف القومي للحضارة المصرية","en":"National Museum of Egyptian Civilization"},"region":"north","area":{"ar":"الفسطاط · القاهرة","en":"Fustat · Cairo"},"type":"museum","lat":30.0061,"lng":31.2497,"period":{"ar":"افتتح عام ٢٠٢١","en":"Opened in 2021"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D9%81_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D9%84%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D9%87_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%87_02.jpg?width=1000","imageCredit":"Nada hussam · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D9%81_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D9%84%D9%84%D8%AD%D8%B6%D8%A7%D8%B1%D9%87_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D9%87_02.jpg","source":"https://egymonuments.gov.eg/en/museums/national-museum-of-egyptian-civilization-nmec","description":{"ar":"يعرض المتحف تاريخ الحضارة المصرية عبر عصورها، وتضم مجموعته قاعة المومياوات الملكية وقاعة للنسيج المصري.","en":"The museum presents Egyptian civilization across its eras, including galleries for the royal mummies and Egyptian textiles."}
  },
  {"id":"cairo-citadel","name":{"ar":"قلعة صلاح الدين ومسجد محمد علي","en":"Saladin Citadel & Muhammad Ali Mosque"},"region":"north","area":{"ar":"القاهرة التاريخية","en":"Historic Cairo"},"type":"ancient","lat":30.0295,"lng":31.2617,"period":{"ar":"من العصر الأيوبي · القرن ١٢م","en":"Ayyubid period · 12th century CE"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Cairo-citadel-1800s.jpg?width=1000","imageCredit":"Antonio Beato · Public Domain Mark","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Cairo-citadel-1800s.jpg","source":"https://egymonuments.gov.eg/collections/historical-cairo/","description":{"ar":"حصن تاريخي أمر صلاح الدين بإنشائه في القرن الثاني عشر، وتضم القلعة مسجد محمد علي ومعالم من عصور لاحقة.","en":"A historic fortress commissioned by Saladin in the 12th century; the citadel includes Muhammad Ali Mosque and monuments from later periods."}},
  {"id":"bibliotheca-alexandrina","name":{"ar":"مكتبة الإسكندرية","en":"Bibliotheca Alexandrina"},"region":"north","area":{"ar":"الإسكندرية","en":"Alexandria"},"type":"museum","lat":31.2089,"lng":29.9092,"period":{"ar":"افتتحت عام ٢٠٠٢","en":"Opened in 2002"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Bibliotheca_Alexandrina_%28Alexandrie_biblioth%C3%A8que%29.jpg?width=1000","imageCredit":"René Dinkel · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Bibliotheca_Alexandrina_(Alexandrie_bibliothèque).jpg","source":"https://www.bibalex.org/","description":{"ar":"مكتبة ومركز ثقافي حديث على ساحل الإسكندرية، يستحضر اسم المكتبة القديمة ويضم مساحات للمعرفة والمعارض.","en":"A modern library and cultural center on Alexandria’s shore, recalling the ancient library’s legacy and hosting knowledge and exhibition spaces."}},
  {"id":"luxor-sphinx-avenue","name":{"ar":"طريق الكباش","en":"Avenue of Sphinxes"},"region":"south","area":{"ar":"الأقصر · الضفة الشرقية","en":"Luxor · East Bank"},"type":"ancient","lat":25.7053,"lng":32.6446,"period":{"ar":"ممر احتفالي من عصور فرعونية متعددة","en":"Ceremonial route built across several pharaonic periods"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Luxor_Temple_Avenue_of_Sphinxes_%289794817915%29.jpg?width=1000","imageCredit":"Gary Lee Todd · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Luxor_Temple_Avenue_of_Sphinxes_(9794817915).jpg","source":"https://egymonuments.gov.eg/en/world-heritage/ancient-thebes-and-its-necropolis","description":{"ar":"طريق احتفالي تصطف على جانبيه تماثيل أبي الهول ويربط معبدي الكرنك والأقصر في قلب طيبة القديمة.","en":"A ceremonial route lined with sphinxes connecting Karnak and Luxor temples in ancient Thebes."}},
  {"id":"colossi-memnon","name":{"ar":"تمثالا ممنون","en":"Colossi of Memnon"},"region":"south","area":{"ar":"طيبة الغربية · الأقصر","en":"West Thebes · Luxor"},"type":"ancient","lat":25.7209,"lng":32.6103,"period":{"ar":"الدولة الحديثة · نحو ١٣٥٠ ق.م","en":"New Kingdom · c. 1350 BCE"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Colossi_of_Memnon_%281876%29.jpg?width=1000","imageCredit":"William de Wiveleslie Abney · Public Domain Mark","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Colossi_of_Memnon_(1876).jpg","source":"https://egymonuments.gov.eg/en/world-heritage/ancient-thebes-and-its-necropolis","description":{"ar":"تمثالان حجريان ضخمان للملك أمنحتب الثالث، يقفان عند مدخل مجمعه الجنائزي في الضفة الغربية للأقصر.","en":"Two colossal stone statues of Amenhotep III stand at the entrance to his mortuary complex on Luxor’s west bank."}},
  {"id":"aswan-high-dam","name":{"ar":"السد العالي","en":"Aswan High Dam"},"region":"south","area":{"ar":"أسوان","en":"Aswan"},"type":"ancient","lat":23.9720,"lng":32.8780,"period":{"ar":"اكتمل عام ١٩٧٠","en":"Completed in 1970"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Aswan_High_Dam%2C_Aswan%2C_AG%2C_EGY_%2848027097146%29.jpg?width=1000","imageCredit":"Warren LeMay · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Aswan_High_Dam,_Aswan,_AG,_EGY_(48027097146).jpg","source":"https://egymonuments.gov.eg/archaeological-sites/aswan","description":{"ar":"منشأة هندسية على النيل كوّنت بحيرة ناصر وساعدت في تنظيم تدفق المياه، وارتبط بناؤها بحملة إنقاذ آثار النوبة.","en":"An engineering landmark on the Nile that created Lake Nasser and regulates water flow; its construction prompted the international rescue of Nubian monuments."}},
  {"id":"siwa-oasis","name":{"ar":"واحة سيوة ومعبد الوحي","en":"Siwa Oasis & Oracle Temple"},"region":"central","area":{"ar":"مطروح · الصحراء الغربية","en":"Matrouh · Western Desert"},"type":"ancient","lat":29.2032,"lng":25.5195,"period":{"ar":"واحة تاريخية · معبد آمون","en":"Historic oasis · Temple of Amun"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Shali_1.jpg?width=1000","imageCredit":"Volker Scherl · Public Domain Mark","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Shali_1.jpg","source":"https://www.experienceegypt.eg/en/City/15/siwa-oasis","description":{"ar":"واحة أمازيغية في الصحراء الغربية تضم بحيرات مالحة وينابيع ومواقع أثرية، ومنها معبد الوحي المرتبط بزيارة الإسكندر الأكبر. الصورة لقلعة شالي التاريخية داخل الواحة.","en":"An Amazigh oasis in the Western Desert with salt lakes, springs and archaeological sites, including the Oracle temple associated with Alexander the Great. The image shows historic Shali Fortress within the oasis."}}
  ,{"id":"grand-egyptian-museum","name":{"ar":"المتحف المصري الكبير","en":"Grand Egyptian Museum (GEM)"},"region":"north","area":{"ar":"الجيزة · هضبة الأهرام","en":"Giza · Giza Plateau"},"type":"museum","lat":29.9951,"lng":31.1194,"period":{"ar":"متحف حديث مخصص للحضارة المصرية القديمة","en":"Modern museum dedicated to ancient Egyptian civilization"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Grand_Egyptian_Museum%2C_Giza%2C_GG%2C_EGY_%2847902613381%29.jpg?width=1000","imageCredit":"Warren LeMay · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Grand_Egyptian_Museum,_Giza,_GG,_EGY_(47902613381).jpg","source":"https://www.experienceegypt.eg/en/attraction-details/346/the-grand-egyptian-museum-gem","description":{"ar":"متحف قرب هضبة الجيزة يضم قاعات عرض ومجموعات أثرية تمتد عبر آلاف السنين، بينها مقتنيات توت عنخ آمون.","en":"A museum near the Giza Plateau with galleries and archaeological collections spanning millennia, including Tutankhamun’s objects."}},
  {"id":"cairo-tower","name":{"ar":"برج القاهرة","en":"Cairo Tower"},"region":"north","area":{"ar":"الزمالك · جزيرة الجزيرة","en":"Zamalek · Gezira Island"},"type":"ancient","lat":30.0459,"lng":31.2243,"period":{"ar":"معلم معماري حديث · ١٩٦١–١٩٦٥","en":"Modern landmark · 1961–1965"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/%D8%A8%D8%B1%D8%AC_%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9_1.jpeg?width=1000","imageCredit":"David Adel Wahba Khalil · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:برج_القاهرة_1.jpeg","source":"https://www.experienceegypt.eg/en/attraction-details/291/downtown-cairo-city-breaks","description":{"ar":"برج بارتفاع ١٨٧ مترًا في جزيرة الجزيرة بالزمالك، ويضم منصة مشاهدة تطل على القاهرة.","en":"A 187-metre tower on Gezira Island in Zamalek, with an observation deck overlooking Cairo."}}
  ,{"id":"khan-el-khalili","name":{"ar":"خان الخليلي","en":"Khan el-Khalili"},"region":"north","area":{"ar":"القاهرة التاريخية","en":"Historic Cairo"},"type":"ancient","lat":30.0478,"lng":31.2622,"period":{"ar":"سوق تاريخي من القرن الرابع عشر","en":"Historic market dating to the 14th century"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Khan_el-Khalili%2C_Old_Cairo%2C_al-Q%C4%81hirah%2C_CG%2C_EGY_%2847859521092%29.jpg?width=1000","imageCredit":"Warren LeMay · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Khan_el-Khalili,_Old_Cairo,_al-Qāhirah,_CG,_EGY_(47859521092).jpg","source":"https://www.experienceegypt.eg/en/attraction-details/292/historic-cairo","description":{"ar":"سوق تاريخي في قلب القاهرة الإسلامية، يضم أزقة ومحالًا وحرفًا تقليدية قرب شارع المعز.","en":"A historic market in the heart of Islamic Cairo, with lanes, shops and traditional crafts near Al-Muizz Street."}},
  {"id":"al-muizz-street","name":{"ar":"شارع المعز","en":"Al-Muizz Street"},"region":"north","area":{"ar":"القاهرة التاريخية","en":"Historic Cairo"},"type":"ancient","lat":30.0492,"lng":31.2568,"period":{"ar":"قلب القاهرة الفاطمية · منذ القرن العاشر","en":"Fatimid Cairo · since the 10th century"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Al-Muizz_Street%2C_Old_Cairo%2C_al-Q%C4%81hirah%2C_CG%2C_EGY_%2847859477762%29.jpg?width=1000","imageCredit":"Warren LeMay · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Al-Muizz_Street,_Old_Cairo,_al-Qāhirah,_CG,_EGY_(47859477762).jpg","source":"https://www.experienceegypt.eg/en/attraction-details/292/historic-cairo","description":{"ar":"شارع تاريخي يمر بين أبواب القاهرة القديمة ومبانٍ من عصور إسلامية متعددة، منها مساجد ومدارس ووكالات.","en":"A historic street between Cairo’s old gates, lined with mosques, schools and merchant buildings from several Islamic periods."}},
  {"id":"religious-complex","name":{"ar":"مجمع الأديان في مصر القديمة","en":"Religious Complex, Old Cairo"},"region":"north","area":{"ar":"الفسطاط · القاهرة","en":"Fustat · Cairo"},"type":"ancient","lat":30.0060,"lng":31.2306,"period":{"ar":"آثار من عصور دينية متعددة","en":"Religious monuments from several eras"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/December_photowalk_-_Madonna_and_Child.jpg?width=1000","imageCredit":"Protious · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:December_photowalk_-_Madonna_and_Child.jpg","source":"https://egymonuments.gov.eg/en/news/tourism-ministry-organizes-tour-of-diplomats-spouses-to-religious-complex","description":{"ar":"منطقة تراثية في مصر القديمة تجمع معالم إسلامية وقبطية ويهودية، منها جامع عمرو بن العاص والكنيسة المعلقة ومعبد بن عزرا.","en":"A heritage district in Old Cairo bringing together Islamic, Coptic and Jewish landmarks, including Amr ibn al-As Mosque, the Hanging Church and Ben Ezra Synagogue."}},
  {"id":"montaza-gardens","name":{"ar":"قصر وحدائق المنتزه","en":"Montaza Palace & Gardens"},"region":"north","area":{"ar":"الإسكندرية","en":"Alexandria"},"type":"ancient","lat":31.2825,"lng":30.0130,"period":{"ar":"قصر وحدائق ملكية · منذ ١٨٩٢","en":"Royal palace and gardens · since 1892"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Montaza_Palace.jpg?width=1000","imageCredit":"Moh.fadly · Public Domain","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Montaza_Palace.jpg","source":"https://www.experienceegypt.eg/en/attraction-details/140/mosques-churches-and-synagogues","description":{"ar":"حدائق ساحلية تاريخية في الإسكندرية كانت ضمن أملاك الأسرة الملكية، وتضم مباني وقصورًا تاريخية مطلة على البحر.","en":"Historic coastal gardens in Alexandria once belonging to the royal family, with historic palace buildings overlooking the sea."}}
  ,{"id":"white-desert","name":{"ar":"الصحراء البيضاء","en":"White Desert"},"region":"central","area":{"ar":"الفرافرة · الوادي الجديد","en":"Farafra · New Valley"},"type":"ancient","lat":27.2870,"lng":28.2030,"period":{"ar":"محمية طبيعية وتكوينات كلسية","en":"Natural reserve with chalk formations"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/White_desert.jpg?width=1000","imageCredit":"Ysjyd · CC0","imageLicense":"https://creativecommons.org/publicdomain/zero/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:White_desert.jpg","source":"https://www.experienceegypt.eg/files/Deserts%20and%20Oases-Eng.pdf","description":{"ar":"منظر صحراوي من الفرافرة تشكله صخور الطباشير البيضاء بفعل التعرية، ضمن محمية الصحراء البيضاء.","en":"A Farafra desert landscape shaped by erosion into white chalk formations within the White Desert protected area."}},
  {"id":"hurghada-giftun","name":{"ar":"الغردقة وجزر الجفتون","en":"Hurghada & Giftun Islands"},"region":"central","area":{"ar":"البحر الأحمر","en":"Red Sea"},"type":"ancient","lat":27.2579,"lng":33.8116,"period":{"ar":"مدينة ساحلية وجزر محمية","en":"Coastal city and protected islands"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/ISS074-E-834658_-_View_of_Egypt_-_Hurghada_-_Red_Sea_-_Giftun_Island_-_Giftun_al_Sakhir_-_El_Gouma_%28cropped%29.jpg?width=1000","imageCredit":"NASA · Public Domain","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:ISS074-E-834658_-_View_of_Egypt_-_Hurghada_-_Red_Sea_-_Giftun_Island_-_Giftun_al_Sakhir_-_El_Gouma_(cropped).jpg","source":"https://www.experienceegypt.eg/en/attraction-details/152/island-life","description":{"ar":"مدينة ساحلية على البحر الأحمر تنطلق منها رحلات إلى جزر الجفتون، المعروفة بمياهها الصافية والشعاب المرجانية.","en":"A Red Sea coastal city with boat trips to the Giftun Islands, known for clear water and coral reefs."}},
  {"id":"marsa-alam","name":{"ar":"مرسى علم","en":"Marsa Alam"},"region":"central","area":{"ar":"البحر الأحمر · جنوب القصير","en":"Red Sea · south of El Quseir"},"type":"ancient","lat":25.0676,"lng":34.8780,"period":{"ar":"وجهة ساحلية ومواقع طبيعية","en":"Coastal destination and natural sites"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Marsa_alam.JPG?width=1000","imageCredit":"Kroschka Ru · Public Domain","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Marsa_alam.JPG","source":"https://www.experienceegypt.eg/en/city/21/marsa-alam","description":{"ar":"وجهة على البحر الأحمر تشتهر بالشعاب المرجانية والبحيرات الشاطئية والمحميات الطبيعية القريبة.","en":"A Red Sea destination known for coral reefs, coastal lagoons and nearby protected areas."}}
  ,{"id":"sharm-el-sheikh","name":{"ar":"شرم الشيخ","en":"Sharm El-Sheikh"},"region":"central","area":{"ar":"جنوب سيناء · البحر الأحمر","en":"South Sinai · Red Sea"},"type":"ancient","lat":27.9158,"lng":34.3299,"period":{"ar":"مدينة ساحلية ومركز للغوص","en":"Coastal city and diving hub"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Sharm_El_Sheikh%2C_Egypt%2C_on_September_14%2C_2010.jpg?width=1000","imageCredit":"U.S. Department of State · Public Domain","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Sharm_El_Sheikh,_Egypt,_on_September_14,_2010.jpg","source":"https://www.experienceegypt.eg/en/city/16/sharm-el-sheikh","description":{"ar":"مدينة ساحلية في جنوب سيناء بين محمية رأس محمد ومنطقة نبق، وتشتهر بالشواطئ والشعاب المرجانية والغوص.","en":"A South Sinai coastal city between Ras Muhammad and Nabq protected areas, known for beaches, coral reefs and diving."}},
  {"id":"dahab-blue-hole","name":{"ar":"دهب والثقب الأزرق","en":"Dahab & the Blue Hole"},"region":"central","area":{"ar":"جنوب سيناء · خليج العقبة","en":"South Sinai · Gulf of Aqaba"},"type":"ancient","lat":28.5710,"lng":34.5360,"period":{"ar":"وجهة ساحلية وموقع غوص","en":"Coastal destination and dive site"},"image":"https://commons.wikimedia.org/wiki/Special:FilePath/Dahab_banner.jpg?width=1000","imageCredit":"Markus Schupp · Public Domain","imageLicense":"https://creativecommons.org/publicdomain/mark/1.0/","imagePage":"https://commons.wikimedia.org/wiki/File:Dahab_banner.jpg","source":"https://www.experienceegypt.eg/en/region/13/the-red-sea","description":{"ar":"مدينة ساحلية هادئة في جنوب سيناء، ويقع الثقب الأزرق شمالها وهو موقع غوص معروف في خليج العقبة.","en":"A laid-back coastal town in South Sinai; the Blue Hole lies north of town and is a well-known Gulf of Aqaba dive site."}}
];
const QUIZ = [
  {
    "q": {
      "ar": "في أي موقع يقع هرم زوسر المدرج؟",
      "en": "At which site is Djoser’s Step Pyramid located?"
    },
    "options": {
      "ar": [
        "دهشور",
        "سقارة",
        "الجيزة",
        "الأقصر"
      ],
      "en": [
        "Dahshur",
        "Saqqara",
        "Giza",
        "Luxor"
      ]
    },
    "answer": 1
  },
  {
    "q": {
      "ar": "أي مدينة كانت عاصمة مصر في عصر الدولة الوسطى والدولة الحديثة؟",
      "en": "Which city was Egypt’s capital during the Middle and New Kingdoms?"
    },
    "options": {
      "ar": [
        "الإسكندرية",
        "ممفيس",
        "طيبة",
        "أسوان"
      ],
      "en": [
        "Alexandria",
        "Memphis",
        "Thebes",
        "Aswan"
      ]
    },
    "answer": 2
  },
  {
    "q": {
      "ar": "إلى أي جزيرة نُقلت معابد فيلة؟",
      "en": "To which island were the temples of Philae relocated?"
    },
    "options": {
      "ar": [
        "أجيليكا",
        "إلفنتين",
        "رودس",
        "كريت"
      ],
      "en": [
        "Agilkia",
        "Elephantine",
        "Rhodes",
        "Crete"
      ]
    },
    "answer": 0
  },
  {
    "q": {
      "ar": "في أي مدينة يوجد المتحف المصري في ميدان التحرير؟",
      "en": "In which city is the Egyptian Museum in Tahrir Square?"
    },
    "options": {
      "ar": [
        "الأقصر",
        "القاهرة",
        "أسوان",
        "الجيزة"
      ],
      "en": [
        "Luxor",
        "Cairo",
        "Aswan",
        "Giza"
      ]
    },
    "answer": 1
  },
  {
    "q": {
      "ar": "أي موقع يضم وادي الملوك ووادي الملكات؟",
      "en": "Which heritage property includes the Valley of the Kings and Valley of the Queens?"
    },
    "options": {
      "ar": [
        "القاهرة التاريخية",
        "ممفيس",
        "طيبة القديمة ومقبرتها",
        "آثار النوبة"
      ],
      "en": [
        "Historic Cairo",
        "Memphis",
        "Ancient Thebes with its Necropolis",
        "Nubian Monuments"
      ]
    },
    "answer": 2
  }
];
let quizQuestions=[];
const staticQuiz=QUIZ.map(q=>({...q,topic:'heritage',format:'multiple',source:q.source||'https://whc.unesco.org/en/list/86/'}));
const expanded=SITE_DATA.flat(Infinity).filter(s=>s.area);
const destinationQuiz=[];
expanded.forEach((site,index)=>{
 const areas=[...new Map(expanded.map(x=>[x.area.en,x.area])).values()];
 const correct=site.area,others=areas.filter(x=>x.en!==correct.en);
 const optionAreas=[correct,...others.slice(index%Math.max(1,others.length),index%Math.max(1,others.length)+3)];
 const topic=['wadi-hitan','siwa-shali','siwa-oasis','saint-catherine','elephantine','white-desert','hurghada-giftun','marsa-alam'].includes(site.id)?'nature':'places';
 destinationQuiz.push({topic,format:'multiple',q:{ar:'أين تقع '+site.name.ar+'؟',en:'Where is '+site.name.en+' located?'},options:{ar:optionAreas.map(x=>x.ar),en:optionAreas.map(x=>x.en)},answer:0,source:site.source||'https://egymonuments.gov.eg/archaeological-sites/'});
 const truth=index%2===0,wrong=others[index%Math.max(1,others.length)]||areas[(index+1)%areas.length];
 destinationQuiz.push({topic,format:'truefalse',q:{ar:'تقع '+site.name.ar+' في '+(truth?correct.ar:wrong.ar)+'.',en:site.name.en+' is located in '+(truth?correct.en:wrong.en)+'.'},options:{ar:['صح','خطأ'],en:['True','False']},answer:truth?0:1,source:site.source||'https://egymonuments.gov.eg/archaeological-sites/'});
});
QUIZ.splice(0,QUIZ.length,...staticQuiz,...destinationQuiz);
let lang=localStorage.getItem('masr360-language')||'ar',filter='all',sites=SITE_DATA.flat(Infinity),user=null,dbClient=null,cloudSavedSites=null,map=null,quizIndex=0,quizScore=0,quizLocked=false,toastTimer;
const t=key=>(COPY[lang]&&COPY[lang][key])||key;
const textOf=value=>typeof value==='string'?value:(value&&value[lang])||(value&&value.en)||'';
const regionLabel=region=>region==='south'?t('regionSouth'):region==='north'?t('regionNorth'):t('regionCentral');
function escapeHtml(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function toast(message){const box=$('#toast');if(!box)return;box.textContent=message;box.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.classList.remove('show'),2500)}
function getSaved(){if(dbClient&&user&&!user.demo&&Array.isArray(cloudSavedSites))return cloudSavedSites;try{return JSON.parse(localStorage.getItem('masr360-saved')||'[]')}catch(e){return []}}
function openModal(html){$('#modalBody').innerHTML=html;$('#modalBackdrop').hidden=false;$('#modalClose').focus()}
function closeModal(){$('#modalBackdrop').hidden=true}
function applyLanguage(){document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.classList.toggle('en',lang==='en');$$('[data-i18n]').forEach(el=>{const value=t(el.dataset.i18n);if(value.includes('<'))el.innerHTML=value;else el.textContent=value});$$('[data-placeholder]').forEach(el=>el.placeholder=t(el.dataset.placeholder));$('#languageToggle').innerHTML=lang==='ar'?'EN <span>⌄</span>':'عربي <span>⌄</span>';localStorage.setItem('masr360-language',lang);renderSites();renderAccount();if(map)setTimeout(()=>map.invalidateSize(),80)}
function siteCard(site,index){const name=textOf(site.name),desc=textOf(site.description),credit=site.imageCredit?'<a class="image-credit" data-source href="'+escapeHtml(site.imagePage||site.image)+'" target="_blank" rel="noreferrer">Image: '+escapeHtml(site.imageCredit)+'</a>':'';const natural=['wadi-hitan','siwa-shali','siwa-oasis','white-desert','hurghada-giftun','marsa-alam'].includes(site.id);const category=site.type==='museum'?t('categoryMuseum'):natural?t('categoryNatural'):t('categoryAncient');const area=textOf(site.area)||regionLabel(site.region);return '<article class="site-card" tabindex="0" data-site-id="'+escapeHtml(site.id)+'"><div class="site-photo"><img loading="lazy" src="'+escapeHtml(site.image||'')+'" alt="'+escapeHtml(name)+'" onerror="this.remove()"><span class="site-tag">'+category+'</span><span class="site-index">'+String(index+1).padStart(2,'0')+' / '+sites.length+'</span>'+credit+'</div><div class="site-info"><span class="site-region">'+escapeHtml(area)+' · '+escapeHtml(textOf(site.period))+'</span><h3>'+escapeHtml(name)+'</h3><p>'+escapeHtml(desc)+'</p><div class="site-meta"><span>⌖ '+Number(site.lat).toFixed(3)+'°, '+Number(site.lng).toFixed(3)+'°</span><a href="'+escapeHtml(site.source||'#')+'" target="_blank" rel="noreferrer" data-source>'+t('source')+' ↗</a></div></div></article>'}
function renderSites(){const count=$('#siteCountValue');if(count)count.textContent=sites.length;const number=new Intl.NumberFormat(lang==='ar'?'ar-EG':'en').format(sites.length);const stat=$('#statSiteTotal'),hero=$('#heroSiteTotal'),caption=$('[data-i18n="mapCaption"]'),quizCount=$('#quizQuestionTotal');if(stat)stat.textContent=number;if(hero)hero.textContent=' / '+number;if(caption)caption.textContent=t('mapCaption').replace(/[0-9٠-٩۰-۹]+/,number);if(quizCount)quizCount.textContent=new Intl.NumberFormat(lang==='ar'?'ar-EG':'en').format(QUIZ.length);const query=$('#siteSearch')?.value.trim().toLocaleLowerCase()||'';const visible=sites.filter(s=>(filter==='all'||(filter==='museum'?s.type==='museum':s.region===filter))&&(!query||[textOf(s.name),textOf(s.description),textOf(s.area)].join(' ').toLocaleLowerCase().includes(query)));$('#siteGrid').innerHTML=visible.map(siteCard).join('');$('#emptyState').hidden=visible.length!==0}
async function saveSite(id){if(!user){toast(t('needLogin'));openAuth();return}if(dbClient&&!user.demo){const {error}=await dbClient.from('saved_sites').upsert({user_id:user.id,site_id:id});if(error){console.error('Could not save site',error);toast(t('saveError'));return}if(!Array.isArray(cloudSavedSites))cloudSavedSites=[];if(!cloudSavedSites.includes(id))cloudSavedSites.push(id)}else{const saved=getSaved();if(!saved.includes(id))saved.push(id);localStorage.setItem('masr360-saved',JSON.stringify(saved))}toast(t('saved'))}
function showSite(site){if(!site)return;const area=textOf(site.area)||regionLabel(site.region);openModal('<span class="section-kicker">'+escapeHtml(area)+' · '+escapeHtml(textOf(site.period))+'</span><h2 id="modalTitle">'+escapeHtml(textOf(site.name))+'</h2><p>'+escapeHtml(textOf(site.description))+'</p><p><b>'+t('coordinates')+':</b> '+Number(site.lat).toFixed(4)+', '+Number(site.lng).toFixed(4)+'</p><button class="button button-gold" id="saveSiteButton">♡ '+t('savedSites')+'</button> <a class="site-source" href="'+escapeHtml(site.source||'#')+'" target="_blank" rel="noreferrer">'+t('source')+' ↗</a>');$('#saveSiteButton').onclick=()=>saveSite(site.id)}
function renderMap(){if(!window.L||!$('#heritageMap'))return;map=L.map('heritageMap',{scrollWheelZoom:false,zoomControl:true}).setView([27.5,30.6],5);L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:18,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);sites.forEach(s=>{const icon=L.divIcon({className:'',html:'<div class="map-pin '+(s.type==='museum'?'museum':'')+'"></div>',iconSize:[14,14],iconAnchor:[7,7]});L.marker([s.lat,s.lng],{icon}).addTo(map).bindPopup('<strong>'+escapeHtml(textOf(s.name))+'</strong><br>'+escapeHtml(textOf(s.area)||regionLabel(s.region))+'<br><a href="'+escapeHtml(s.source||'#')+'" target="_blank" rel="noreferrer">'+t('source')+' ↗</a>')})}
function setSession(session,profile){if(session&&session.user)user={id:session.user.id,email:session.user.email,name:(profile&&profile.display_name)||session.user.user_metadata?.display_name||session.user.email,demo:false};else user=null;if(!user||user.demo)cloudSavedSites=null;renderAccount()}
function renderAccount(){const button=$('#accountButton');if(!button)return;if(user)button.innerHTML='<span class="account-icon">♙</span><span>'+escapeHtml(String(user.name||'').split('@')[0])+'</span>';else button.innerHTML='<span class="account-icon">♙</span><span>'+t('signIn')+'</span>'}
async function fetchProfile(id){const result=await dbClient.from('profiles').select('display_name').eq('id',id).single();return result.data}
function openAuth(mode){mode=mode||'login';const signup=mode==='signup';openModal('<h2 id="modalTitle">'+t(signup?'signupTitle':'loginTitle')+'</h2><p>'+t(signup?'signupSub':'loginSub')+'</p><form id="authForm">'+(signup?'<label>'+t('name')+'</label><input name="name" required autocomplete="name">':'')+'<label>'+t('email')+'</label><input name="email" type="email" required autocomplete="email"><label>'+t('password')+'</label><input name="password" type="password" required minlength="8" autocomplete="'+(signup?'new-password':'current-password')+'"><button class="button button-gold">'+t(signup?'signup':'login')+'</button></form><p>'+t(signup?'haveAccount':'noAccount')+' <a class="switch-auth" id="switchAuth">'+t(signup?'switchLogin':'createAccount')+'</a></p><p>'+t('demoHint')+'</p>'+(!dbClient?'<button class="button button-outline" id="demoUser">'+t('authDemoUser')+'</button>':'') );$('#switchAuth').onclick=()=>openAuth(signup?'login':'signup');$('#authForm').onsubmit=async e=>{e.preventDefault();if(!dbClient){toast(t('authError'));return}const f=new FormData(e.currentTarget);try{if(signup){const result=await dbClient.auth.signUp({email:f.get('email'),password:f.get('password'),options:{data:{display_name:f.get('name')}}});if(result.error)throw result.error;if(result.data.session)setSession(result.data.session,await fetchProfile(result.data.user.id));toast(t('registered'))}else{const result=await dbClient.auth.signInWithPassword({email:f.get('email'),password:f.get('password')});if(result.error)throw result.error;setSession(result.data.session,await fetchProfile(result.data.user.id));toast(t('loggedIn'))}closeModal()}catch(error){console.error(error);toast(t('authError'))}};if(!dbClient)$('#demoUser').onclick=()=>{user={id:'demo-user',email:'visitor@discoverkemet.demo',name:lang==='ar'?'زائر تجريبي':'Demo visitor',demo:true};renderAccount();closeModal();toast(t('loggedIn'))}}


function startQuiz(){const topics=[['all',t('quizAll')],['heritage',t('quizHeritage')],['places',t('quizPlaces')],['nature',t('quizNature')]];openModal('<span class="section-kicker">'+t('quizChoose')+'</span><h2 id="modalTitle">'+t('quizChoose')+'</h2><form id="quizSetup"><label>'+t('quizCategory')+'</label><select name="topic">'+topics.map(x=>'<option value="'+x[0]+'">'+x[1]+'</option>').join('')+'</select><label>'+t('quizFormat')+'</label><select name="format"><option value="all">'+t('quizAll')+'</option><option value="multiple">'+t('quizMultiple')+'</option><option value="truefalse">'+t('quizTrueFalse')+'</option></select><label>'+t('quizLength')+'</label><select name="count"><option>5</option><option>10</option><option>20</option></select><button class="button button-gold">'+t('quizBegin')+'</button></form>');const form=$('#quizSetup');const pool=()=>{const d=new FormData(form);return QUIZ.filter(q=>(d.get('topic')==='all'||q.topic===d.get('topic'))&&(d.get('format')==='all'||q.format===d.get('format')))};const update=()=>{const n=pool().length;[...form.elements.count.options].forEach(o=>o.disabled=Number(o.value)>n);if(form.elements.count.selectedOptions[0]?.disabled)form.elements.count.value=[...form.elements.count.options].filter(o=>!o.disabled).at(-1)?.value||5};form.onchange=update;update();form.onsubmit=e=>{e.preventDefault();quizQuestions=pool().sort(()=>Math.random()-.5).slice(0,Number(form.elements.count.value));quizIndex=0;quizScore=0;renderQuestion()}}
function renderQuestion(){const item=quizQuestions[quizIndex],options=item.options[lang];openModal('<span class="section-kicker">'+t('quizKicker')+'</span><div class="quiz-progress"><span style="width:'+Math.floor(quizIndex/quizQuestions.length/100)+'%"></span></div><p>'+(lang==='ar'?'السؤال':'Question')+' '+(quizIndex+1)+' / '+quizQuestions.length+'</p><h2 id="modalTitle">'+escapeHtml(item.q[lang])+'</h2><p>'+t('chooseAnswer')+'</p><div class="quiz-options">'+options.map((o,i)=>'<button class="quiz-option" data-answer="'+i+'">'+escapeHtml(o)+'</button>').join('')+'</div><div id="quizFeedback"></div>');quizLocked=false;$$('[data-answer]').forEach(button=>button.onclick=()=>{if(quizLocked)return;quizLocked=true;const answer=Number(button.dataset.answer);$$('[data-answer]')[item.answer].classList.add('correct');if(answer===item.answer)quizScore++;else button.classList.add('wrong');$('#quizFeedback').innerHTML='<p>'+t(answer===item.answer?'quizCorrect':'quizWrong')+'</p>';const source=document.createElement('a');source.className='site-source';source.href=item.source;source.target='_blank';source.rel='noreferrer';source.textContent=t('quizSource')+' ↗';$('#quizFeedback').append(source);const next=document.createElement('button');next.className='button button-gold';next.textContent=quizIndex===quizQuestions.length-1?t('finish'):t('next');next.onclick=()=>{quizIndex++;if(quizIndex<quizQuestions.length)renderQuestion();else showQuizResult()};$('#quizFeedback').append(next)})}
async function showQuizResult(){if(dbClient&&user&&!user.demo)await dbClient.from('quiz_attempts').insert({user_id:user.id,score:quizScore,total:quizQuestions.length});openModal('<span class="section-kicker">'+t('quizDone')+'</span><h2 id="modalTitle">'+t('yourScore')+'</h2><p style="font:48px DM Sans,sans-serif;color:#dfc27b;margin:24px 0">'+quizScore+' <small style="font-size:18px">'+t('outOf')+' '+quizQuestions.length+'</small></p><button class="button button-gold" id="retryQuiz">'+t('tryAgain')+'</button>');$('#retryQuiz').onclick=startQuiz}

async function loadSites(){if(!dbClient)return;const {data,error}=await dbClient.from('sites').select('*').order('created_at');if(error){console.error('Could not load sites from Supabase',error);return}if(data?.length){sites=data;renderSites();if(map){map.remove();renderMap()}}}
async function loadSavedSites(userId){if(!dbClient||!userId)return;const {data,error}=await dbClient.from('saved_sites').select('site_id').eq('user_id',userId);if(error){console.error('Could not load saved sites from Supabase',error);return}cloudSavedSites=(data||[]).map(row=>row.site_id)}
async function initSupabase(){const cfg=window.MASR_CONFIG||{};if(!cfg.supabaseUrl||!cfg.supabaseAnonKey||!window.supabase?.createClient)return;try{dbClient=window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey);await loadSites();const {data:{session}}=await dbClient.auth.getSession();if(session){const profile=await fetchProfile(session.user.id);setSession(session,profile);await loadSavedSites(session.user.id)}dbClient.auth.onAuthStateChange(async(_event,session)=>{if(session){const profile=await fetchProfile(session.user.id);setSession(session,profile);await loadSavedSites(session.user.id)}else setSession(null)});$('#accountButton').dataset.mode='cloud';$('#accountButton').title=t('modeCloud')}catch(e){console.error('Supabase initialization failed',e);dbClient=null}}
function bindEvents(){$('#languageToggle').onclick=()=>{lang=lang==='ar'?'en':'ar';applyLanguage()};$('#siteSearch').addEventListener('input',renderSites);$('#filterRow').addEventListener('click',e=>{const btn=e.target.closest('[data-filter]');if(!btn)return;filter=btn.dataset.filter;$$('.filter-chip').forEach(x=>x.classList.toggle('selected',x===btn));renderSites()});$('#siteGrid').addEventListener('click',e=>{if(e.target.closest('[data-source]'))return;const card=e.target.closest('[data-site-id]');if(card)showSite(sites.find(s=>String(s.id)===card.dataset.siteId))});$('#siteGrid').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.matches('[data-site-id]'))showSite(sites.find(s=>String(s.id)===e.target.dataset.siteId))});$('#startQuiz').onclick=startQuiz;$('#accountButton').onclick=()=>{if(user){openModal(`<span class="section-kicker">${t('profile')}</span><h2 id="modalTitle">${escapeHtml(user.name)}</h2><p>${escapeHtml(user.email)}</p><p>${t('savedSites')}: ${getSaved().length}</p><button class="button button-outline" id="logoutButton">${t('signOut')}</button>`);$('#logoutButton').onclick=signOut}else openAuth()};$('#joinButton').onclick=()=>user?$('#accountButton').click():openAuth();$('#modalClose').onclick=closeModal;$('#modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#siteSearch').focus()}});$('#menuToggle').onclick=()=>$('.main-nav').classList.toggle('open');$$('.nav-link').forEach(a=>a.onclick=()=>$('.main-nav').classList.remove('open'))}
async function signOut(){if(dbClient&&!user?.demo)await dbClient.auth.signOut();user=null;renderAccount();closeModal();toast(t('signedOut'))}
async function boot(){applyLanguage();bindEvents();renderMap();await initSupabase();renderAccount()}
document.addEventListener('DOMContentLoaded',boot);


const showSiteBase=showSite;
showSite=async function(site){
 showSiteBase(site);
 setTimeout(async function(){
  const host=document.querySelector('#modalBody'); if(!host)return; let reviews=[];
  if(dbClient){const result=await dbClient.from('tourist_reviews').select('display_name,rating,body,created_at').eq('site_id',site.id).eq('status','approved').order('created_at',{ascending:false});reviews=result.data||[]}
  else{try{reviews=JSON.parse(localStorage.getItem('masr360-reviews-'+site.id)||'[]')}catch(e){reviews=[]}}
  const panel=document.createElement('section');panel.className='visitor-reviews';
  panel.innerHTML='<hr><h3>'+t('visitorReviews')+'</h3><div class="review-list"></div><form class="review-form"><label>'+t('reviewName')+'</label><input name="display_name" required maxlength="60"><label>'+t('reviewRating')+'</label><select name="rating"><option value="5">★★★★★</option><option value="4">★★★★☆</option><option value="3">★★★☆☆</option><option value="2">★★☆☆☆</option><option value="1">★☆☆☆☆</option></select><label>'+t('reviewText')+'</label><textarea name="body" required minlength="8" maxlength="1000"></textarea><button class="button button-gold">'+t('sendReview')+'</button><small>'+t('reviewModeration')+'</small></form>';
  const list=panel.querySelector('.review-list');
  if(!reviews.length){const empty=document.createElement('p');empty.textContent=t('noReviews');list.append(empty)}
  reviews.forEach(function(r){const a=document.createElement('article');a.className='visitor-review';const n=document.createElement('strong');n.textContent=r.display_name||'Visitor';const stars=document.createElement('span');stars.className='review-stars';stars.textContent='★'.repeat(Number(r.rating)||0);const b=document.createElement('p');b.textContent=r.body;a.append(n,stars,b);list.append(a)});
  const nameInput=panel.querySelector('[name="display_name"]');nameInput.value=user&&user.name?user.name.split('@')[0]:'';
  host.append(panel);
  panel.querySelector('form').onsubmit=async function(e){e.preventDefault();const f=new FormData(e.currentTarget),row={display_name:String(f.get('display_name')).trim(),rating:Number(f.get('rating')),body:String(f.get('body')).trim()};if(!row.display_name||row.body.length<8){toast(t('reviewValidation'));return}if(dbClient&&!user){toast(t('needLogin'));openAuth();return}if(dbClient&&user&&!user.demo){const r=await dbClient.from('tourist_reviews').insert({site_id:site.id,user_id:user.id,display_name:row.display_name,rating:row.rating,body:row.body,status:'approved'});if(r.error){toast(t('reviewError'));return}toast(t('reviewPublished'));showSite(site);return}let saved=[];try{saved=JSON.parse(localStorage.getItem('masr360-reviews-'+site.id)||'[]')}catch(e){}saved.unshift(row);localStorage.setItem('masr360-reviews-'+site.id,JSON.stringify(saved));toast(t('reviewSaved'));showSite(site)};
 },0);
};
