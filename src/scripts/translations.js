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
    imprintVatId: "Umsatzsteuer-ID:",
    imprintVatIdNumber: "DE227942961",
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
    
    // Unternehmer page
    entrepreneursTitle: "Leistungen für Unternehmer",
    entrepreneursSubtitle: "Professionelle Steuerberatung für Ihr Unternehmen",
    entrepreneursDigitalTitle: "Digital unterwegs",
    entrepreneursDigitalDescription1: "Das digitale Zeitalter ist da – mit all seinen Herausforderungen, aber auch seinen Vorzügen. Wir wollen, dass auch Sie davon profitieren.",
    entrepreneursDigitalDescription2: "Unternehmen online schafft individuelle Möglichkeiten der Zusammenarbeit zwischen Ihnen und dem Steuerbüro Heilgendorff über die DATEV-Cloud – sowohl für die Finanzbuchführung als auch die Lohnabrechnung.",
    entrepreneursDigitalDescription3: "Wirken Sie bei Ihrer Finanzbuchführung mit! Sie können jederzeit auf Ihre Daten zugreifen und Belege hochladen und sind dadurch so nah am Geschehen wie noch nie.",
    entrepreneursFeaturesTitle: "Diese Möglichkeiten bietet Unternehmen online:",
    entrepreneursFeature1: "Ein System für den kompletten kaufmännischen Prozess sowie für die vor- und nachgelagerten Prozesse bei der Lohnabrechnung",
    entrepreneursFeature2: "Originalbelege und Dokumente bleiben im Unternehmen – ein revisionssicheres elektronisches Belegarchiv steht jederzeit zur Verfügung",
    entrepreneursFeature3: "Schneller Zugriff auf aussagekräftige und differenzierte betriebs- und personalwirtschaftliche Auswertungen",
    entrepreneursFeature4: "Führen eines elektronischen Kassenbuchs",
    entrepreneursFeature5: "Sparen von Portokosten",
    entrepreneursFeature6: "Schneller Austausch und Transparenz",
    entrepreneursDatevInfo: "Haben Sie weitere Fragen zu DATEV Unternehmen Online?",
    entrepreneursDatevHelpTextBefore: "Weitere Informationen finden sie hier im",
    entrepreneursDatevHelpLink: "DATEV Hilfecenter",
    entrepreneursDatevHelpTextAfter: ".",
    entrepreneursQuote: "\"Die Zahlung von Steuern kann nicht aus Gewissensgründen abgelehnt werden.\"",
    entrepreneursQuoteAuthor: "Urteil des BFH vom 06.12.1991, BStBl 1992 II Seite 303",
    entrepreneursDatevTitle1: "Digitalisierung mit",
    entrepreneursDatevTitle2: "DATEV Unternehmen Online",
    entrepreneursDatevDescription: "Erhalten Sie weitere Veranschaulichungen und Informationen zur DATEV Software.",
    entrepreneursDatevButton: "DATEV Unternehmen Online",
    entrepreneursServicesTitle: "Unser Leistungsumfang:",
    entrepreneursService1Title: "Digitale Buchführung",
    entrepreneursService1Description: "Professionelle Buchhaltung mit modernen digitalen Tools",
    entrepreneursService2Title: "Digitale Lohnbuchführung",
    entrepreneursService2Description: "Effiziente Lohn- und Gehaltsabrechnung",
    entrepreneursService3Title: "Jahresabschluss oder Gewinnermittlung",
    entrepreneursService3Description: "Transparente und saubere Jahresabschlüsse",
    entrepreneursService4Title: "Beratung bei Existenzgründung",
    entrepreneursService4Description: "Professionelle Unterstützung von der Idee bis zur Umsetzung",
    entrepreneursService5Title: "Begleitung bei Betriebsprüfung",
    entrepreneursService5Description: "Kompetente Unterstützung bei Prüfungen",
    entrepreneursService3DetailTitle: "Jahresabschluss oder Gewinnermittlung",
    entrepreneursService3DetailText1: "Nach 12 Monaten wird ein Schlussstrich unter das Geschäftsjahr gezogen: Ein transparenter und sauberer Jahresabschluss muss her. An einem Jahresabschluss haben in der Regel mehrere Adressatenkreise Interesse. Die Veröffentlichung des Jahresabschlusses selbst und auch die Art und Weise dessen sind darüber hinaus auch rechtsform- und größenabhängig. Unter Umständen muss nur eine Bilanz hinterlegt werden.",
    entrepreneursService3DetailText2: "Neben der vorausgesetzten Einreichung beim Finanzamt und der Veröffentlichung beim Bundesamt für Justiz, dienen der Jahresabschluss und die Bilanz aber vor allem als Steuerungselement für Ihren Unternehmenserfolg. Denn der Jahresabschluss und die Bilanz geben Aufschluss über die Entwicklung Ihres Unternehmens in der Vergangenheit und somit auch Impulse für künftige unternehmerische Aktivitäten und zielgerichtete Entscheidungen.",
    entrepreneursService3DetailText3: "Wir schauen, welche Anforderungen an ihr Unternehmen gestellt sind. Durch unsere jahrelange Erfahrung fertigen wir nicht nur Ihren Abschluss an, sondern beraten Sie zudem individuell hinsichtlich erfolgsversprechender Maßnahmen für die Zukunft.",
    entrepreneursService3DetailItem1: "Die Bilanzen nach HGB und Steuerbilanzen",
    entrepreneursService3DetailItem2: "Einen ausführlichen Bilanzbericht",
    entrepreneursService3DetailItem3: "Die Gewinnermittlung und den Jahresabschluss",
    entrepreneursService3DetailItem4: "Die Übermittlungen für den elektronischen Bundesanzeiger",
    entrepreneursService3DetailSubtitle: "Wir erstellen für Sie:",
    entrepreneursService4DetailTitle: "Existenzgründung",
    entrepreneursService4DetailText1: "Die Neugründung eines Unternehmens fordert einige wichtige Entscheidungen von Ihnen als Existenzgründer. Wir freuen uns auch in diesem Feld unsere langjährige Expertise anbieten zu können.",
    entrepreneursService4DetailText2: "In einem individuellen Beratungsgespräch besprechen wir mit Ihnen die wesentlichen zu beachtenden Themen zu Ihrer bevorstehenden Existenzgründung. Auf alle im Verlauf dieses Erstgespräches anfallenden Detailfragen werden wir Ihnen in einem weiteren Gespräch beantworten oder lassen Sie Ihnen auf Wunsch auch gerne unkompliziert zukommen.",
    entrepreneursService4DetailItem1: "Die Realisierbarkeitsprüfung",
    entrepreneursService4DetailItem2: "Die Beratung zur optimalen Rechtsform und Verträgen wie Gesellschaftsverträge usw.",
    entrepreneursService4DetailItem3: "Die Haftungsrisiken und eine Steuer-Vorausplanung",
    entrepreneursService4DetailItem4: "Die Beratung bei Finanzierungsmöglichkeiten und Unterstützung bei Finanzierungsbeschaffung",
    entrepreneursService4DetailItem5: "Die Beantragung von Fördermitteln und dem Existenzgründungszuschuss",
    entrepreneursService4DetailItem6: "Die Gestaltung des betrieblichen Rechnungswesens",
    entrepreneursService4DetailItem7: "Die Beratung zur Absicherung privater Risiken wie Krankheit, Erwerbsunfähigkeit oder Tod",
    entrepreneursService5DetailTitle: "Betriebsprüfungen",
    entrepreneursService5DetailText1: "Darüber hinaus stehen wir natürlich auch in den unangenehmen und schwierigen Situationen an Ihrer Seite.",
    entrepreneursService5DetailText2: "Wir unterstützen Sie bei den Betriebsprüfungen durch Finanzämter, Sozialversicherungsträger und andere Behörden. Von der Anmeldung des Prüfers, über die laufende Prüfung selbst, bis zur Schlussbesprechung sind wir als kompetenter Ansprechpartner mit dabei. Anschließend prüfen wir die Betriebsprüfungsberichte und werten die Ergebnisse aus. Wir sorgen für einen reibungslosen Ablauf.",
    entrepreneursService5DetailSubtitle: "In diesen Bereichen begleiten wir Sie:",
    entrepreneursService5DetailItem1: "Betriebsprüfung",
    entrepreneursService5DetailItem2: "Lohnsteueraußenprüfung",
    entrepreneursService5DetailItem3: "Umsatzsteuersonderprüfung und -nachschau",
    entrepreneursService5DetailItem4: "Kassennachschau",
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
    imprintVatId: "VAT ID:",
    imprintVatIdNumber: "DE227942961",
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
    
    // Unternehmer page
    entrepreneursTitle: "Services for Entrepreneurs",
    entrepreneursSubtitle: "Professional tax consulting for your company",
    entrepreneursDigitalTitle: "Digital on the go",
    entrepreneursDigitalDescription1: "The digital age is here – with all its challenges, but also its advantages. We want you to benefit from it too.",
    entrepreneursDigitalDescription2: "Company online creates individual opportunities for cooperation between you and the Heilgendorff tax office via the DATEV cloud – both for financial accounting and payroll accounting.",
    entrepreneursDigitalDescription3: "Participate in your financial accounting! You can access your data at any time and upload receipts, making you closer to the action than ever before.",
    entrepreneursFeaturesTitle: "These possibilities are offered by Company online:",
    entrepreneursFeature1: "A system for the complete commercial process as well as for the upstream and downstream processes in payroll accounting",
    entrepreneursFeature2: "Original receipts and documents remain in the company – a revision-proof electronic document archive is always available",
    entrepreneursFeature3: "Quick access to meaningful and differentiated business and personnel evaluations",
    entrepreneursFeature4: "Keeping an electronic cash book",
    entrepreneursFeature5: "Saving postage costs",
    entrepreneursFeature6: "Quick exchange and transparency",
    entrepreneursDatevInfo: "Do you have further questions about DATEV Company Online?",
    entrepreneursDatevHelpTextBefore: "Further information can be found here in the",
    entrepreneursDatevHelpLink: "DATEV Help Center",
    entrepreneursDatevHelpTextAfter: ".",
    entrepreneursQuote: "\"The payment of taxes cannot be refused for reasons of conscience.\"",
    entrepreneursQuoteAuthor: "BFH judgment of 06.12.1991, BStBl 1992 II page 303",
    entrepreneursDatevTitle1: "Digitalization with",
    entrepreneursDatevTitle2: "DATEV Company Online",
    entrepreneursDatevDescription: "Get further illustrations and information about the DATEV software.",
    entrepreneursDatevButton: "DATEV Company Online",
    entrepreneursServicesTitle: "Our range of services:",
    entrepreneursService1Title: "Digital Bookkeeping",
    entrepreneursService1Description: "Professional accounting with modern digital tools",
    entrepreneursService2Title: "Digital Payroll Accounting",
    entrepreneursService2Description: "Efficient wage and salary accounting",
    entrepreneursService3Title: "Annual Financial Statements or Profit Determination",
    entrepreneursService3Description: "Transparent and clean annual financial statements",
    entrepreneursService4Title: "Startup Consulting",
    entrepreneursService4Description: "Professional support from idea to implementation",
    entrepreneursService5Title: "Support during Tax Audits",
    entrepreneursService5Description: "Competent support during audits",
    entrepreneursService3DetailTitle: "Annual Financial Statements or Profit Determination",
    entrepreneursService3DetailText1: "After 12 months, a line is drawn under the financial year: A transparent and clean annual financial statement must be created. Several target groups are usually interested in an annual financial statement. The publication of the annual financial statement itself and also the manner in which it is done are also dependent on legal form and size. In some cases, only a balance sheet needs to be filed.",
    entrepreneursService3DetailText2: "In addition to the required submission to the tax office and publication with the Federal Office of Justice, the annual financial statement and balance sheet serve primarily as a control element for your company's success. Because the annual financial statement and balance sheet provide information about the development of your company in the past and thus also impulses for future entrepreneurial activities and targeted decisions.",
    entrepreneursService3DetailText3: "We look at what requirements are placed on your company. Through our years of experience, we not only prepare your statement, but also advise you individually regarding promising measures for the future.",
    entrepreneursService3DetailItem1: "The balance sheets according to HGB and tax balance sheets",
    entrepreneursService3DetailItem2: "A detailed balance sheet report",
    entrepreneursService3DetailItem3: "The profit determination and annual financial statement",
    entrepreneursService3DetailItem4: "The transmissions for the electronic Federal Gazette",
    entrepreneursService3DetailSubtitle: "We create for you:",
    entrepreneursService4DetailTitle: "Startup",
    entrepreneursService4DetailText1: "The establishment of a new company requires some important decisions from you as a founder. We are pleased to be able to offer our many years of expertise in this field as well.",
    entrepreneursService4DetailText2: "In an individual consultation, we discuss with you the essential topics to be considered for your upcoming startup. We will answer all detailed questions that arise in the course of this initial conversation in a further conversation or send them to you uncomplicatedly on request.",
    entrepreneursService4DetailItem1: "Feasibility study",
    entrepreneursService4DetailItem2: "Advice on the optimal legal form and contracts such as articles of association etc.",
    entrepreneursService4DetailItem3: "Liability risks and tax advance planning",
    entrepreneursService4DetailItem4: "Advice on financing options and support in financing procurement",
    entrepreneursService4DetailItem5: "Application for funding and startup grant",
    entrepreneursService4DetailItem6: "Design of operational accounting",
    entrepreneursService4DetailItem7: "Advice on securing private risks such as illness, disability or death",
    entrepreneursService5DetailTitle: "Tax Audits",
    entrepreneursService5DetailText1: "In addition, we naturally stand by your side in unpleasant and difficult situations.",
    entrepreneursService5DetailText2: "We support you with tax audits by tax offices, social security institutions and other authorities. From the registration of the auditor, through the ongoing audit itself, to the final discussion, we are there as a competent contact person. Afterwards, we review the audit reports and evaluate the results. We ensure a smooth process.",
    entrepreneursService5DetailSubtitle: "In these areas we accompany you:",
    entrepreneursService5DetailItem1: "Tax audit",
    entrepreneursService5DetailItem2: "Payroll tax external audit",
    entrepreneursService5DetailItem3: "VAT special audit and inspection",
    entrepreneursService5DetailItem4: "Cash inspection",
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



