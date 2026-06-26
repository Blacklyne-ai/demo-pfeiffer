// ─────────────────────────────────────────────────────────────
// Physio Praxis Pfeiffer — Inhalte. Texte VERBATIM aus dem Scrape der
// Bestandsseite. Wo das Original nur ein Stichwort lieferte (Überschrift +
// Halbsatz), wurde der Halbsatz zum vollständigen Satz ergänzt, OHNE neue
// inhaltliche/heilbezogene Aussagen (HWG). Lücken = Operator-TODO.
// ─────────────────────────────────────────────────────────────

// Begrüßung (verbatim Startseite)
export const welcome =
  'Wir freuen uns, dass Sie unsere Seite gefunden haben und heißen Sie herzlich willkommen. In unserer Praxis können Sie alle Leistungen rund um die Physiotherapie erhalten.';

// Über uns (verbatim ueber-uns.html)
export const ueberUns: string[] = [
  'In unserer Praxis können Sie alle Leistungen rund um die Physiotherapie erhalten. Wir sind ein kompetentes Team von Physiotherapeuten, welches stets bestrebt ist, durch kontinuierliche Fortbildungen unsere Therapiemethoden und -möglichkeiten weiter zu verbessern, um Ihnen eine optimale Behandlung zu gewährleisten.',
  'Für Fragen oder Wünsche haben wir ein offenes Ohr — bitte nehmen Sie Kontakt mit uns auf.',
];

// ── HP Physio (verbatim hp-physio.html) ───────────────────────
export const hpPhysio = {
  eyebrow: 'Heilpraktiker · Fachrichtung Physiotherapie',
  title: 'Behandlung auch ohne ärztliche Verordnung',
  lead:
    'Mit der vom Gesundheitsamt erteilten Erlaubnis ist es nun dem Physiotherapeuten möglich, einen Patienten auch ohne ärztliche Verordnung zu behandeln. Diese Prüfung hat Silke Pfeiffer-Flößer vorm Gesundheitsamt Heilbronn im April 2015 mit Erfolg bestanden.',
  sections: [
    {
      heading: 'Was bedeutet Heilpraktiker, Fachrichtung Physiotherapie?',
      paras: [
        'Die Berufsbezeichnung Heilpraktiker (Physiotherapie) oder „Heilpraktiker beschränkt auf den Bereich der Physiotherapie" ist eine Zusatzqualifikation, die staatlich anerkannte oder diplomierte Physiotherapeuten erwerben können. Mit der vom Gesundheitsamt erteilten Erlaubnis zur Führung der Berufsbezeichnung ist es nun dem Physiotherapeuten möglich, einen Patienten ohne ärztliche Verordnung zu behandeln.',
      ],
    },
    {
      heading: 'Welche Vorteile bietet Ihnen das als Patient?',
      paras: [
        'Für Sie als Patient bietet sich nun die Möglichkeit, direkt den Weg zu Ihrem Physiotherapeuten des Vertrauens zu gehen. Normalerweise sind Physiotherapeuten weisungsgebunden und dürfen nur nach ärztlicher Diagnosestellung und Anweisung (Verordnung) therapieren.',
        'Der sektorale Heilpraktiker hingegen hat nun die Erlaubnis, eigenverantwortlich zu diagnostizieren (eingeschränkt bezogen auf den Bereich der Physiotherapie) und eine entsprechende Behandlung zu leisten. Eine individuelle und auf Ihre Symptomatik bezogene Therapie wird somit ohne großen Zeitverzug möglich.',
        'Wenn sich aber bei dem Erstgespräch und der Untersuchung herausstellt, dass weitere Untersuchungen (auch zum Abklären der Diagnose) beim Arzt erfolgen müssen, schickt Sie der HP für Physiotherapie doch zum Arzt, um Schaden zu vermeiden. Sie können also ohne Umweg direkt zur physiotherapeutischen Behandlung!',
      ],
    },
    {
      heading: 'Wer bezahlt die Behandlung?',
      paras: [
        'Leider bezahlen die gesetzlichen Krankenkassen weiterhin nur nach vorheriger Verordnung durch den behandelnden Arzt. Das heißt, dass Sie die Therapie, die Sie zusammen mit Ihrem Therapeuten auswählen, selbst bezahlen müssen. Für Privatpatienten sollte weiterhin nach wie vor ein Rezept vom Arzt erstellt werden, da nicht sicher ist, ob die privaten Krankenversicherungen ein Rezept vom HP für Physiotherapie anerkennen.',
      ],
    },
  ],
};

// ── Jobangebot (verbatim jobangebot.html) ─────────────────────
export const job = {
  title: 'Physiotherapeut/in (m/w/d)',
  headline: 'Lust auf Veränderung? Dann komm zu uns.',
  intro:
    'Wir suchen eine/n Physiotherapeut/in (m/w/d) in Vollzeit oder auch in Teilzeit. Auf Wunsch möglich: 4-Tage-Woche — freitags frei!',
  paras: [
    'Vorwiegend behandeln wir Erwachsene mit orthopädischen und internistischen Problemen. Fortbildungen in MT und MLD wären von Vorteil, aber nicht dringend erforderlich. Die Bezahlung ist überdurchschnittlich und richtet sich nach den erworbenen Qualifikationen.',
    'Wir sind ein nettes, offenes Team und schätzen das selbstbestimmte Arbeiten in entspannter Wohlfühlatmosphäre. Wir freuen uns auch, wenn Du neue Therapiekonzepte in die Praxis einbringen möchtest.',
    'Unser Rezeptionsteam unterstützt Dich ganztägig mit der Organisation und Verwaltung, so hast Du volle Konzentration für die Therapie.',
  ],
  // gegliedert für die Jobanzeige — alle Punkte aus dem verbatim Text abgeleitet
  aufgaben: [
    'Physiotherapeutische Behandlung von Erwachsenen mit orthopädischen und internistischen Problemen',
    'Eigenverantwortliches, selbstbestimmtes Arbeiten in entspannter Wohlfühlatmosphäre',
    'Einbringen eigener und neuer Therapiekonzepte ist ausdrücklich willkommen',
  ],
  profil: [
    'Abgeschlossene Ausbildung als Physiotherapeut/in (m/w/d)',
    'Fortbildungen in MT und MLD von Vorteil — aber nicht dringend erforderlich',
    'Freude an der Arbeit im Team',
  ],
  benefits: [
    'Vollzeit oder Teilzeit — auf Wunsch 4-Tage-Woche mit freiem Freitag',
    'Überdurchschnittliche Bezahlung nach erworbenen Qualifikationen',
    'Nettes, offenes Team und selbstbestimmtes Arbeiten',
    'Rezeptionsteam unterstützt ganztägig bei Organisation und Verwaltung',
  ],
  // Quick-Facts (scanbar) — alle Werte aus dem verbatim Jobtext
  facts: [
    { icon: 'BriefcaseBusiness', label: 'Anstellung', value: 'Voll- oder Teilzeit' },
    { icon: 'CalendarCheck', label: 'Arbeitswoche', value: '4-Tage-Woche möglich · freitags frei' },
    { icon: 'BadgeEuro', label: 'Bezahlung', value: 'Überdurchschnittlich' },
    { icon: 'MapPin', label: 'Standort', value: 'Ditzingen bei Stuttgart' },
  ],
  // Employer-Branding — was die Arbeit bei Pfeiffer ausmacht (aus dem Jobtext abgeleitet)
  warum: [
    { icon: 'Heart', title: 'Nettes, offenes Team', text: 'Wir schätzen das selbstbestimmte Arbeiten in entspannter Wohlfühlatmosphäre.' },
    { icon: 'Lightbulb', title: 'Deine Ideen zählen', text: 'Wir freuen uns, wenn Du neue Therapiekonzepte in die Praxis einbringen möchtest.' },
    { icon: 'Users', title: 'Rückendeckung an der Rezeption', text: 'Unser Rezeptionsteam unterstützt Dich ganztägig — volle Konzentration auf die Therapie.' },
    { icon: 'CalendarCheck', title: 'Freie Freitage möglich', text: 'Auf Wunsch arbeitest Du in einer 4-Tage-Woche und hast freitags frei.' },
    { icon: 'GraduationCap', title: 'Fortbildung erwünscht', text: 'MT und MLD sind von Vorteil, aber kein Muss — wir wachsen gemeinsam weiter.' },
    { icon: 'BadgeCheck', title: 'Persönlich geführt', text: 'Silke Pfeiffer-Flößer, Heilpraktikerin für Physiotherapie, führt die Praxis mit Herz.' },
  ],
  // Bewerbungs-Ablauf — bewusst niedrigschwellig (verbatim: „ein paar Zeilen", Lebenslauf reicht)
  steps: [
    { n: '01', title: 'Melde Dich', text: 'Ein paar Zeilen über Dich per E-Mail oder ein kurzer Anruf genügen. Ein Lebenslauf reicht für den Anfang.' },
    { n: '02', title: 'Lernen wir uns kennen', text: 'Wir treffen uns in der Praxis, zeigen Dir alles und schauen, ob es für beide Seiten passt.' },
    { n: '03', title: 'Leg los', text: 'Voll- oder Teilzeit, mit oder ohne freien Freitag — wir finden das Modell, das zu Dir passt.' },
  ],
};

// ── Leistungen (Physiotherapie + Wellness) ────────────────────
export interface ServiceSection { heading?: string; paras?: string[]; list?: string[]; listLabel?: string }
export interface Service {
  slug: string;
  category: 'physio' | 'wellness';
  nav: string;
  title: string;
  eyebrow: string;
  icon: string;
  iconStyle?: 'crimson' | 'sage';
  image: string;
  teaser: string;       // 1 Satz für die Karten
  lead: string;
  upcoming?: boolean;
  sections: ServiceSection[];
}

export const services: Service[] = [
  // ───────── PHYSIOTHERAPIE ─────────
  {
    slug: 'manuelle-therapie',
    category: 'physio',
    nav: 'Manuelle Therapie',
    title: 'Manuelle Therapie',
    eyebrow: 'Physiotherapie',
    icon: 'Hand',
    image: '/images/raeume/raum-01.jpg',
    teaser: 'Spezielle Grifftechniken verbessern die Beweglichkeit von Gelenken, Muskeln und Nerven.',
    lead:
      'Bei der Manuellen Therapie werden spezielle Grifftechniken angewendet, um die Beweglichkeit von Gelenken, Muskeln und Nerven zu verbessern und Schmerzen zu lindern.',
    sections: [
      {
        paras: [
          'Der Therapeut erstellt einen aktuellen Befund und gestaltet danach den Behandlungsplan, der aus passiven Gelenkmobilisationen und aus Weichteilbehandlungen bestehen kann — und danach aktive Übungen, um die Gelenkbeweglichkeit zu erhalten und das Gelenk zu stabilisieren.',
        ],
      },
    ],
  },
  {
    slug: 'krankengymnastik',
    category: 'physio',
    nav: 'Krankengymnastik',
    title: 'Krankengymnastik',
    eyebrow: 'Physiotherapie',
    icon: 'Activity',
    image: '/images/raeume/raum-02.jpg',
    teaser: 'Aktive Übungen für Kraft, Ausdauer und Koordination — auch auf neurophysiologischer Basis.',
    lead:
      'Die Krankengymnastik umfasst eine Vielzahl von Maßnahmen zur Erhaltung oder Wiedererlangung von Kraft, Ausdauer und Koordination sowie zur Schmerzlinderung.',
    sections: [
      {
        paras: [
          'Im Vordergrund stehen aktive Übungen, gleichzeitig auch als Anleitung, um zu Hause die Therapie zu unterstützen.',
        ],
      },
      {
        heading: 'Auf neurophysiologischer Basis',
        paras: [
          'Bei Krankengymnastik auf neurophysiologischer Basis wird besonders das Nervensystem angesprochen — Bewegungen werden neu gebahnt oder erhalten, dabei ist die aktive Arbeit des Patienten besonders wichtig.',
        ],
      },
    ],
  },
  {
    slug: 'massage',
    category: 'physio',
    nav: 'Massage',
    title: 'Massage',
    eyebrow: 'Physiotherapie',
    icon: 'HandHeart',
    image: '/images/anwendungen/massage-1.jpg',
    teaser: 'Verschiedene Methoden, um den normalen Muskeltonus wiederherzustellen und Schmerzen zu lindern.',
    lead:
      'Bei Massagen gibt es eine Vielzahl an unterschiedlichen Methoden. Ziel ist es immer, den normalen Muskeltonus (Spannungszustand) wieder herzustellen und Schmerzen zu lindern.',
    sections: [
      {
        listLabel: 'Wir arbeiten mit:',
        list: [
          'Tiefen- oder Quermassagen',
          'Triggerpunktmassagen',
          'Funktionsmassagen in Verbindung mit Manueller Therapie',
          'klassischen Massagen',
        ],
      },
    ],
  },
  {
    slug: 'lymphdrainage',
    category: 'physio',
    nav: 'Lymphdrainage',
    title: 'Manuelle Lymphdrainage',
    eyebrow: 'Physiotherapie',
    icon: 'Droplets',
    image: '/images/raeume/raum-03.jpg',
    teaser: 'Sanfte Technik zur Aktivierung und Entstauung des Lymphsystems bei Ödemen.',
    lead:
      'Die Manuelle Lymphdrainage ist eine sanfte Behandlungstechnik zur Aktivierung und Entstauung des Lymphsystems bei Ödemen (Flüssigkeitsansammlung im Gewebe).',
    sections: [
      {
        paras: [
          'Die Lymphdrainage hat sich bewährt u. a. bei Lymphödemen, die auch nach Operationen entstehen können, Kopfschmerzen, rheumatischen Erkrankungen und nach Brustkrebsoperationen.',
        ],
      },
    ],
  },
  {
    slug: 'unterstuetzende-massnahmen',
    category: 'physio',
    nav: 'Unterstützende Maßnahmen',
    title: 'Unterstützende Maßnahmen',
    eyebrow: 'Physiotherapie',
    icon: 'Zap',
    image: '/images/raeume/raum-04.jpg',
    teaser: 'Schlingentisch, Elektrotherapie, Wärme und Kälte — ergänzend zu jeder Behandlung.',
    lead:
      'Unterstützende Maßnahmen wie Schlingentisch, Elektrotherapie / Ultraschall, Wärme (Naturmoor, Heißluft) oder Kälteanwendungen sind zu jeder Behandlungsart möglich.',
    sections: [
      {
        listLabel: 'Möglich sind unter anderem:',
        list: [
          'Schlingentisch',
          'Elektrotherapie / Ultraschall',
          'Wärme (Naturmoor, Heißluft)',
          'Kälteanwendungen',
        ],
      },
    ],
  },
  {
    slug: 'wirbeltherapie-nach-dorn',
    category: 'physio',
    nav: 'Wirbeltherapie nach Dorn',
    title: 'Wirbeltherapie nach Dorn',
    eyebrow: 'Physiotherapie',
    icon: 'PersonStanding',
    image: '/images/raeume/raum-01.jpg',
    teaser: 'Eine sanfte Wirbelsäulen- und Gelenkbehandlung — Korrektur immer in Bewegung.',
    lead: 'Die freie Beweglichkeit der Gelenke ist die Grundlage für ein schmerzfreies Bewegen.',
    sections: [
      {
        paras: [
          'Die Dorn-Methode ist eine sanfte Wirbelsäulen- und Gelenkbehandlung. Dabei findet zuerst der Beinlängenausgleich statt, dann werden das Becken und Kreuzbein sowie die Wirbelsäule von unten nach oben behandelt. Die Korrektur der Fehlstellung erfolgt immer in Bewegung.',
        ],
      },
    ],
  },
  {
    slug: 'kinesio-taping',
    category: 'physio',
    nav: 'Kinesio Taping',
    title: 'Kinesio Taping',
    eyebrow: 'Physiotherapie',
    icon: 'Bandage',
    image: '/images/raeume/raum-02.jpg',
    teaser: 'Selbstverständlich Teil unseres Angebots — wir beraten Sie gern dazu.',
    lead: 'In unserer Praxis bieten wir Ihnen natürlich auch das Kinesio Taping an.',
    sections: [
      { paras: ['Bei Fragen zum Thema Kinesio Taping stehen wir Ihnen gerne zur Verfügung.'] },
    ],
  },
  {
    slug: 'rueckentriathlon',
    category: 'physio',
    nav: 'Rückentriathlon',
    title: 'Rückentriathlon',
    eyebrow: 'Lizenzierte Praxis vom PhysioNetzwerk',
    icon: 'Dumbbell',
    image: '/images/anwendungen/rueckentriathlon-1.jpg',
    teaser: 'Als lizenzierte Praxis vom PhysioNetzwerk begleiten wir Sie ein Jahr gegen Rückenschmerzen.',
    lead:
      'Wir sind eine lizenzierte Praxis vom PhysioNetzwerk, und deshalb können Sie bei uns am Rückentriathlon teilnehmen! Haben Sie sich entschieden, etwas dauerhaft Wirksames gegen Ihre Rückenschmerzen zu unternehmen?',
    sections: [
      {
        paras: [
          'Eine der Hauptursachen dieser Zivilisationskrankheiten ist Bewegungsmangel. Dieser Bewegungsmangel führt auf Dauer dazu, dass ein Körper nicht belastbar ist. Dies passiert nicht von einem auf den anderen Tag: es entsteht über einen langen Zeitraum von mehreren Jahren.',
          'Umgekehrt kann der Körper nicht von einem Tag auf den anderen Tag belastbar werden. Das Gewebe braucht eine gewisse Zeit, um sich höheren Belastungen anzupassen. Deshalb dauert der Rückentriathlon 1 Jahr (Kollagen turn-over).',
        ],
      },
    ],
  },
  {
    slug: 'move-one-station',
    category: 'physio',
    nav: 'Med. Training — Move One Station',
    title: 'Medizinisches Training — Move One Station',
    eyebrow: 'Neu ab Mai 2026',
    icon: 'Gauge',
    image: '/images/anwendungen/physiofit.jpg',
    teaser: 'Neu ab Mai 2026: medizinisches Training mit der Move One Station.',
    lead: 'Medizinisches Training mit der Move One Station — neu ab Mai 2026.',
    upcoming: true,
    sections: [
      {
        paras: [
          'Wir bauen unser Angebot für medizinisches Training aus. Weitere Informationen folgen in Kürze — sprechen Sie uns gern jetzt schon darauf an.',
        ],
      },
    ],
  },

  // ───────── WELLNESS ─────────
  {
    slug: 'hot-stone-massage',
    category: 'wellness',
    nav: 'Hot Stone Massage',
    title: 'Hot Stone Massage',
    eyebrow: 'Wellness',
    icon: 'Flame',
    iconStyle: 'sage',
    image: '/images/anwendungen/hot-stone-1.jpg',
    teaser: '60 Minuten mit warmem Mandelöl und heißen Steinen — bis zur tiefen Entspannung.',
    lead: 'Die Hot-Stone-Massage beruht auf uralten Methoden indianischer Naturvölker.',
    sections: [
      {
        paras: [
          'Bei ruhiger Entspannungsmusik wird Ihr gesamter Körper 60 min mit warmem Mandelöl und heißen Steinen massiert, dabei berücksichtigen wir die Energiebahnen (Meridiane) und deren dazugehörige Shu- oder Leitungspunkte.',
          'Um Körper und Seele in Einklang zu bringen, werden heiße Steine auf Energiezentren gelegt. Zwischendurch werden die heißen Steine mit kalten kombiniert, um die Blutzirkulation anzuregen.',
          'Sie gelangen durch die Massage zu einer tiefen Entspannung.',
        ],
      },
    ],
  },
  {
    slug: 'energetische-fussreflexmassage',
    category: 'wellness',
    nav: 'Energetische Fußreflexmassage',
    title: 'Energetische Fußreflexmassage',
    eyebrow: 'Wellness',
    icon: 'Footprints',
    iconStyle: 'sage',
    image: '/images/anwendungen/fussreflex-1.jpg',
    teaser: '50 Minuten: basisches Fußbad, Fußreflexmassage und Nachruhe mit Entspannungsmusik.',
    lead: 'Energetische Fußreflexmassage, 50 min.',
    sections: [
      {
        paras: [
          'Beginnend mit einem basischen Fußbad, Fußreflexmassage und anschließender Nachruhe mit Entspannungsmusik.',
        ],
      },
    ],
  },
  {
    slug: 'aromaoelmassage',
    category: 'wellness',
    nav: 'Aromaölmassage',
    title: 'Aromaölmassage',
    eyebrow: 'Wellness',
    icon: 'Leaf',
    iconStyle: 'sage',
    image: '/images/anwendungen/aromaoel-1.jpg',
    teaser: 'Reine Pflanzenöle mit ätherischen Duftölen — entspannend oder anregend, ganz nach Bedarf.',
    lead:
      'Hochwertige reine Pflanzenöle (ohne Farb- und Konservierungsstoffe, ohne synthetische Parfums) gemischt mit reinen ätherischen Duftölen werden sanft in die Haut einmassiert.',
    sections: [
      {
        paras: [
          'Je nach Art der verwendeten Duftöle wirkt die Aromaölmassage entspannend oder anregend — ganz auf Ihre persönlichen Bedürfnisse abgestimmt.',
        ],
      },
    ],
  },
  {
    slug: 'geschenkgutscheine',
    category: 'wellness',
    nav: 'Geschenkgutscheine',
    title: 'Geschenkgutscheine',
    eyebrow: 'Wellness',
    icon: 'Gift',
    iconStyle: 'sage',
    image: '/images/anwendungen/gutschein.jpg',
    teaser: 'Eine Auszeit verschenken — Gutscheine für alle Wohlfühlangebote.',
    lead: 'Geschenk-Gutscheine stellen wir für alle Wohlfühlangebote aus.',
    sections: [
      {
        paras: [
          'Sie möchten eine Auszeit verschenken? Sprechen Sie uns einfach an — wir stellen Ihren Gutschein gern persönlich für Sie aus.',
        ],
      },
    ],
  },
];

// Helper
export const physioServices = services.filter((s) => s.category === 'physio');
export const wellnessServices = services.filter((s) => s.category === 'wellness');
export const getService = (slug: string) => services.find((s) => s.slug === slug);

// Physiofit — auf der Altseite ohne eigenen Fließtext (nur Bild + Menüpunkt).
// Beschreibung aus dem Briefing-Faktum „medizinisches Training / Fitness".
// Keine erfundenen Inhalte — Details = Operator-TODO.
export const physiofit = {
  eyebrow: 'Medizinisches Training',
  title: 'Physiofit',
  lead: 'Physiofit ist unser Angebot für medizinisches Training und Fitness in der Praxis.',
  body:
    'Trainieren unter fachlicher Begleitung — abgestimmt auf das, was Ihr Körper gerade braucht. Die konkreten Inhalte stimmen wir persönlich mit Ihnen ab; sprechen Sie uns einfach darauf an.',
  image: '/images/anwendungen/physiofit.jpg',
};
