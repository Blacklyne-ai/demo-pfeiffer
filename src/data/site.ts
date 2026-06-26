// ─────────────────────────────────────────────────────────────
// Physio Praxis Pfeiffer — zentrale Site-Konfiguration.
// Jede Angabe stammt verbatim aus dem Scrape der Bestandsseite
// (Impressum, Kontakt, Datenschutz, Jobangebot). Nichts erfunden.
// Deutsch, Sie-Form. Silke Pfeiffer-Flößer als Anker. Siehe JUDGEMENT_CALLS.md.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Physio Praxis Pfeiffer',
  owner: 'Silke Pfeiffer-Flößer',
  ownerTitle: 'Silke Pfeiffer-Flößer',
  ownerRole: 'Inhaberin · Heilpraktikerin für Physiotherapie',
  legalName: 'Physio Praxis Pfeiffer GmbH',
  // Kein Marketing-Claim auf der Altseite — sachlich, ohne Heilversprechen.
  claim: 'Physiotherapie und Wellness in Ditzingen',
  description:
    'Physiotherapie und Wellness in Ditzingen bei Stuttgart. Praxis von Silke Pfeiffer-Flößer — Heilpraktikerin für Physiotherapie, Behandlung auch ohne ärztliche Verordnung. Termine nach Vereinbarung.',
  url: 'https://demo-pfeiffer.pages.dev',

  email: 'info@physio-praxis-pfeiffer.de',
  phoneDisplay: '07156 / 17 45 40',
  phoneIntl: '+497156174540',
  faxDisplay: '07156 / 17 94 611',

  street: 'Marktstr. 6/1',
  postcode: '71254',
  city: 'Ditzingen',
  region: 'bei Stuttgart',

  // Termine ausschließlich nach Vereinbarung (verbatim Altseite).
  hoursNote: 'Termine nach Vereinbarung',

  // Google Maps — echte Place-Referenz (CID 0xa4364fc320fa80e3, Koordinaten aus
  // dem verifizierten Google-Eintrag). Präziser Pin statt Adress-Suche.
  mapsEmbed: 'https://maps.google.com/maps?q=48.8270643,9.0661434&z=16&hl=de&output=embed',
  mapsUrl: 'https://maps.google.com/?cid=11832732770453061859',

  // Google-Eintrag existiert, aber es liegen KEINE öffentlichen Bewertungen vor
  // (golocal/11880: 0 Rezensionen). Daher rating: null → kein Stern erfunden (HWG/Fairness).
  // Verifiziertes Rating/Reviews: Operator-TODO (siehe JUDGEMENT_CALLS).
  google: {
    placeUrl: 'https://maps.google.com/?cid=11832732770453061859',
    rating: null as number | null,
    reviews: 0,
  },

  // Keine Social-Profile auf der Altseite belegt → kein erfundener Link (siehe JUDGEMENT_CALLS).
  social: {} as { facebook?: string; instagram?: string; linkedin?: string },

  // Partner (verbatim, ohne Heilaussagen — HWG).
  partner: {
    name: 'Dr. med. Ehrenberger Bio- & Naturprodukte',
    note: 'Hochwertige natürliche Mikronährstoffe — »Handmade in Austria«.',
    url: 'https://www.dr-ehrenberger.eu/?aid=1590',
    logo: '/images/partner/ehrenberger.png',
  },

  // Impressum (verbatim Scrape impressum.html)
  legal: {
    name: 'Physio Praxis Pfeiffer GmbH',
    manager: 'Silke Pfeiffer-Flößer',
    street: 'Marktstr. 6/1',
    postcode: '71254',
    city: 'Ditzingen',
    seat: 'Bad Herrenalb',
    court: 'Amtsgericht Stuttgart',
    hrb: 'HRB 802999',
    vatId: 'DE269886591',
    profession: 'Physiotherapeutin',
    professionState: 'verliehen in der Bundesrepublik Deutschland',
    professionLaw: 'Masseur- und Physiotherapeutengesetz (MPhG)',
    aufsicht: 'Regierungspräsidium Stuttgart',
    aufsichtAddr: 'Ruppmannstr. 21, 70565 Stuttgart',
    hoster: 'Mittwald CM Service GmbH & Co. KG, Königsberger Straße 4–6, 32339 Espelkamp',
  },
};

// ── Praxis-Standort (ein Standort, Ditzingen) ─────────────────
export interface TeamMember {
  name: string;
  role?: string;
  photo?: string;
  quals?: string[];
}

// Nur Silke Pfeiffer-Flößer ist auf der Altseite namentlich + mit Foto belegt.
// Weitere Teammitglieder ("Wir sind ein kompetentes Team") ohne Namen → Operator-TODO.
export const team: TeamMember[] = [
  {
    name: 'Silke Pfeiffer-Flößer',
    role: 'Inhaberin · Heilpraktikerin für Physiotherapie',
    photo: '/images/team/silke.jpg',
    quals: ['Sektorale Heilpraktiker-Erlaubnis (Physiotherapie)', 'Manuelle Therapie', 'Wirbeltherapie nach Dorn'],
  },
];

// ── Link-Helper ───────────────────────────────────────────────
export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
export const careerMail = mailFor('Bewerbung als Physiotherapeut:in');

// ── Navigation ────────────────────────────────────────────────
export interface NavChild { href: string; label: string }
export interface NavItem { href: string; label: string; external?: boolean; children?: NavChild[] }

export const physioLinks: NavChild[] = [
  { href: '/physiotherapie/manuelle-therapie', label: 'Manuelle Therapie' },
  { href: '/physiotherapie/krankengymnastik', label: 'Krankengymnastik' },
  { href: '/physiotherapie/massage', label: 'Massage' },
  { href: '/physiotherapie/lymphdrainage', label: 'Lymphdrainage' },
  { href: '/physiotherapie/unterstuetzende-massnahmen', label: 'Unterstützende Maßnahmen' },
  { href: '/physiotherapie/wirbeltherapie-nach-dorn', label: 'Wirbeltherapie nach Dorn' },
  { href: '/physiotherapie/kinesio-taping', label: 'Kinesio Taping' },
  { href: '/physiotherapie/rueckentriathlon', label: 'Rückentriathlon' },
  { href: '/physiotherapie/move-one-station', label: 'Med. Training — Move One Station' },
];

export const wellnessLinks: NavChild[] = [
  { href: '/wellness/hot-stone-massage', label: 'Hot Stone Massage' },
  { href: '/wellness/energetische-fussreflexmassage', label: 'Energetische Fußreflexmassage' },
  { href: '/wellness/aromaoelmassage', label: 'Aromaölmassage' },
  { href: '/wellness/geschenkgutscheine', label: 'Geschenkgutscheine' },
];

export const nav: NavItem[] = [
  { href: '/', label: 'Start' },
  { href: '/physiotherapie', label: 'Physiotherapie', children: physioLinks },
  { href: '/wellness', label: 'Wellness', children: wellnessLinks },
  { href: '/hp-physio', label: 'HP Physio' },
  { href: '/physiofit', label: 'Physiofit' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/karriere', label: 'Karriere' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const footerNav = {
  praxis: [
    { href: '/hp-physio', label: 'HP Physio — ohne Rezept' },
    { href: '/ueber-uns', label: 'Über uns' },
    { href: '/physiofit', label: 'Physiofit' },
    { href: '/karriere', label: 'Karriere' },
    { href: '/kontakt', label: 'Termin vereinbaren' },
  ],
  physio: physioLinks,
  wellness: wellnessLinks,
};

export const legalNav = [
  { href: '/wellness/geschenkgutscheine', label: 'Geschenkgutscheine' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/impressum', label: 'Impressum' },
];
