// Global translation system
const translations = {
  de: {
    // Navigation
    home: "Home",
    clientArea: "Mandantenbereich",
    about: "Über Uns",
    meetTheTeam: "Meet the Team",
    references: "Referenzen",
    ourTraining: "Unsere Weiterbildungen",
    services: "Leistungen",
    individuals: "Privatpersonen",
    entrepreneurs: "Unternehmer",
    career: "Karriere",
    contact: "Kontakt",
    news: "Aktuelles",
    datevNews: "Datev News",
    downloads: "Downloads",
    taxVideos: "Steuererklärvideos",
    
    // Homepage
    heroTitle: "Steuerbüro Heilgendorff",
    heroSubtitle: "Ihr zuverlässiger Partner aus Wiesbaden",
    coronaRefunds: "Corona-Soforthilfe-Rückforderung",
    coronaText: "Viele hessische Unternehmer erhalten Post vom Regierungspräsidium Kassel zur Rückforderung ihrer Corona-Soforthilfen. Die aktuelle Rechtsprechung zeigt: Nicht jede Rückforderung ist rechtmäßig.",
    learnMore: "Mehr dazu",
    
    // Cookie Banner
    cookieBannerTitle: "Cookie-Einstellungen",
    cookieBannerText: "Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, diese Website und die Nutzererfahrung zu verbessern (Tracking-Cookies). Sie können selbst entscheiden, ob Sie die Cookies zulassen möchten.",
    cookieBannerAcceptAll: "Alle akzeptieren",
    cookieBannerNecessary: "Nur notwendige",
    cookieBannerSettings: "Einstellungen",
    
    // Impressum
    imprintTitle: "Impressum",
    imprintLegalTitle: "Pflichtangaben nach § 5 TMG",
    imprintCompany: "Firma:",
    imprintCompanyName: "Dipl.Kfm. Steuerberater Burghard Heilgendorff",
    imprintContact: "Elektronische Kontaktaufnahme:",
    imprintContactDetails: "E-Mail: kanzlei@heilgendorff.de Internet: www.heilgendorff.de",
    imprintAddress: "Adresse:",
    imprintAddressDetails: "Unter den Eichen 7 (Gebäude F) 65195 Wiesbaden Telefon: 0611-3913200",
    imprintAuthority: "Zuständige Aufsichtsbehörde:",
    imprintAuthorityDetails: "Mitglied der Steuerberaterkammer Hessen in Frankfurt/Main.",
    imprintProfessionTitle: "Gesetzliche Berufsbezeichnung:",
    imprintProfessionText: "Die gesetzliche Berufsbezeichnung Steuerberater wurde in der Bundesrepublik Deutschland im Bundesland Hessen verliehen.",
    
    // About page
    aboutHeroTitle: "Über uns",
    aboutHeroSubtitle: "Erfahren Sie mehr über unser Team, unsere Werte und unsere Leidenschaft für die Steuerberatung",
    aboutSubtitle: "Wir lieben es zu arbeiten & wir lieben, wo wir arbeiten",
    aboutText1: "Wir beraten Sie in allen betriebswirtschaftlichen und steuerrechtlichen Fragen. Unsere Fachgebiete sind die Steuererklärungsberatung, die Steuerdurchsetzungsberatung und die gestaltende Steuerberatung.",
    aboutText2: "Steuerbüro Heilgendorff bietet seinen Mandanten zusätzlich den Zugriff auf den Terminalserver der Kanzlei, um die Kommunikation so einfach und komfortabel wie möglich zu gestalten.",
    aboutText3: "Unsere Erfahrung mit unserem branchenübergreifenden Leistungspektrum ermöglicht es uns, schnell und effizient Ihr Anliegen zu bearbeiten.",
    founderTitle: "Burghard Heilgendorff, Kanzleiinhaber",
    founderText: "Die Begleitung eines Unternehmens vom Startup über alle Unternehmensphasen hinweg bietet für mich die größte Herausforderung. Der Mandant wird betreut von der Unternehmensgründung, dem Vermögensaufbau bis zur Altersabsicherung und erbschaftsteuerlichen Gestaltung",
  },
  en: {
    // Navigation
    home: "Home",
    clientArea: "Client Area",
    about: "About Us",
    meetTheTeam: "Meet the Team",
    references: "References",
    ourTraining: "Our Training",
    services: "Services",
    individuals: "Individuals",
    entrepreneurs: "Entrepreneurs",
    career: "Career",
    contact: "Contact",
    news: "News",
    datevNews: "DATEV News",
    downloads: "Downloads",
    taxVideos: "Tax Declaration Videos",
    
    // Homepage
    heroTitle: "Heilgendorff Tax Office",
    heroSubtitle: "Your reliable partner from Wiesbaden",
    coronaRefunds: "Corona Emergency Aid Recovery",
    coronaText: "Many Hessian entrepreneurs are receiving letters from the Kassel government presidency regarding the recovery of their Corona emergency aid. Current case law shows: Not every recovery is lawful.",
    learnMore: "Learn more",
    
    // Cookie Banner
    cookieBannerTitle: "Cookie Settings",
    cookieBannerText: "We use cookies to provide you with the best possible experience on our website. Some cookies are necessary for the operation of the website, while others help us improve this website and the user experience (tracking cookies). You can decide for yourself whether you want to allow the cookies.",
    cookieBannerAcceptAll: "Accept all",
    cookieBannerNecessary: "Necessary only",
    cookieBannerSettings: "Settings",
    
    // Impressum
    imprintTitle: "Imprint",
    imprintLegalTitle: "Mandatory information according to § 5 TMG",
    imprintCompany: "Company:",
    imprintCompanyName: "Dipl.Kfm. Tax Advisor Burghard Heilgendorff",
    imprintContact: "Electronic contact:",
    imprintContactDetails: "E-Mail: kanzlei@heilgendorff.de Internet: www.heilgendorff.de",
    imprintAddress: "Address:",
    imprintAddressDetails: "Unter den Eichen 7 (Building F) 65195 Wiesbaden Phone: 0611-3913200",
    imprintAuthority: "Responsible supervisory authority:",
    imprintAuthorityDetails: "Member of the Tax Advisory Chamber Hesse in Frankfurt/Main.",
    imprintProfessionTitle: "Legal professional title:",
    imprintProfessionText: "The legal professional title Tax Advisor was awarded in the Federal Republic of Germany in the state of Hesse.",
    
    // About page
    aboutHeroTitle: "About Us",
    aboutHeroSubtitle: "Learn more about our team, our values and our passion for tax consulting",
    aboutSubtitle: "We love to work & we love where we work",
    aboutText1: "We advise you on all business and tax law issues. Our areas of expertise are tax return consulting, tax enforcement consulting and structuring tax consulting.",
    aboutText2: "Heilgendorff Tax Office additionally offers its clients access to the law firm's terminal server to make communication as simple and comfortable as possible.",
    aboutText3: "Our experience with our cross-industry range of services enables us to process your concerns quickly and efficiently.",
    founderTitle: "Burghard Heilgendorff, Law Firm Owner",
    founderText: "Accompanying a company from startup through all company phases offers me the greatest challenge. The client is supported from company formation, asset building to retirement security and inheritance tax structuring",
  }
};

// Get current language from localStorage or default to German
function getCurrentLanguage() {
  return localStorage.getItem('selected-language') || 'de';
}

// Get translation for a key
function t(key, lang) {
  const currentLang = lang || getCurrentLanguage();
  const translation = translations[currentLang]?.[key];
  return translation || key; // Fallback to key if translation not found
}

// Update all elements with data-translate attributes
function updateTranslations(lang = getCurrentLanguage()) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (key) {
      const translation = t(key, lang);
      if (element.tagName === 'INPUT' && element.getAttribute('type') === 'text') {
        element.placeholder = translation;
      } else {
        element.textContent = translation;
      }
    }
  });
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  const savedLang = getCurrentLanguage();
  updateTranslations(savedLang);
  document.documentElement.lang = savedLang;
  
  // Set up language switcher
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(button => {
    button.addEventListener('click', function() {
      const selectedLang = this.getAttribute('data-lang');
      
      // Remove active class from all buttons
      langButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Store language preference
      localStorage.setItem('selected-language', selectedLang);
      
      // Update all translations on the page
      updateTranslations(selectedLang);
      
      // Update HTML lang attribute
      document.documentElement.lang = selectedLang;
      
      console.log('Language switched to:', selectedLang);
    });
  });
  
  // Set active language button
  const activeButton = document.querySelector(`[data-lang="${savedLang}"]`);
  if (activeButton) {
    langButtons.forEach(btn => btn.classList.remove('active'));
    activeButton.classList.add('active');
  }
});
