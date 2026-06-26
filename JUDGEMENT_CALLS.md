# Judgement Calls & Operator-TODOs — Physio Praxis Pfeiffer

Alle Inhalte stammen **verbatim** aus dem Scrape der Bestandsseite
(physio-praxis-pfeiffer.de). Nichts erfunden — keine Preise, Zahlen oder Reviews ohne Beleg.
Diese Datei dokumentiert getroffene Entscheidungen und offene Punkte für den Operator/Kunden.

## Quellen (verbatim übernommen)

- **Kontakt/Impressum:** Marktstr. 6/1, 71254 Ditzingen · Tel. 07156 / 17 45 40 ·
  Fax 07156 / 17 94 611 · info@physio-praxis-pfeiffer.de · GmbH, Geschäftsführerin
  Silke Pfeiffer-Flößer, Sitz Bad Herrenalb, Amtsgericht Stuttgart HRB 802999,
  USt-ID DE269886591, Aufsicht Regierungspräsidium Stuttgart.
- **HP-Physio, alle Verfahren, Wellness, Über uns, Jobangebot:** verbatim, siehe `src/data/content.ts`.

## Bewusste Entscheidungen

1. **Brandfarbe Crimson (#B80718) statt Physio-Türkis.** Pixel-Analyse des Logos ergab das
   rote Wirbelsäulen-Motiv als CI. 1:1 übernommen statt Branchen-Klischee.
2. **Kein Kontaktformular.** Statt Formular Kontakt-Tiles (Telefon, E-Mail, Adresse, Termine)
   — DSGVO-schonend bei Gesundheitsdaten, kein Backend nötig (statische Site).
3. **Kein WhatsApp-Button.** Nur eine Festnetznummer belegt (07156…), keine WhatsApp-fähige
   Mobilnummer. → siehe TODO.
4. **Keine Live-„Jetzt geöffnet"-Statusleiste.** Es sind **keine** Öffnungs-/Sprechzeiten
   belegt (nur „Termine nach Vereinbarung"). Ohne echte Zeiten kein Status — nicht erfunden.
5. **Keine Social-Media-Links.** Auf der Bestandsseite keine Profile belegt → keine erfundenen Links.
6. **HP-Physio prominent & früh** (Hero-Badge + eigene Section + eigene Seite) als zentraler USP.
7. **Move One Station** als „Neu ab Mai 2026" Ausblick (verbatim), kein erfundener Inhalt darüber hinaus.
8. **Dünne Original-Texte** (oft 1–3 Sätze je Verfahren) wurden im Design durch Whitespace,
   Foto und ruhige Struktur getragen — der Halbsatz des Originals ggf. zum vollständigen Satz
   ergänzt, **ohne** neue Heilaussagen (HWG).
9. **Partner Dr. Ehrenberger** dezent als Hinweis + Affiliate-Link, **ohne** Gesundheitsversprechen (HWG).
10. **Datenschutz/Hosting-Klausel** nennt Cloudflare (Deploy-Ziel dieser Demo, korrekt).

## Operator-TODOs (vom Kunden nachzuliefern)

- [ ] **Sprechzeiten/Öffnungszeiten** — sobald belegt, in `src/data/site.ts` (`hoursNote`)
      ergänzen; ermöglicht optional eine Live-Status-Anzeige.
- [ ] **WhatsApp-Mobilnummer** bestätigen → dann WhatsApp-Tile/Buttons aktivieren.
- [ ] **Team-Mitglieder/Namen** — Bestandsseite nennt nur „ein kompetentes Team" ohne Namen.
      Aktuell ist nur **Silke Pfeiffer-Flößer** mit Foto vertreten (`src/data/site.ts → team`).
      Weitere Personen + Fotos nachreichen.
- [ ] **Echte, hochauflösende Praxis-/Teamfotos.** Die Altseite bietet KEINE höher aufgelösten
      Originale (Räume nur „…-klein.jpg" 252×336, Silke 200×300; geprüft). Wir nutzen das jeweils
      beste Quellbild (Silke aus dem 1037er Header-Composite) und schärfen alles per
      Lanczos-Upscale + Unsharp-Mask auf Anzeigegröße — so scharf wie aus den Quellen möglich.
      Für echte Print-/Retina-Schärfe bitte HiRes-Originale oder ein neues Foto-Shooting liefern.
- [ ] **Move One Station** — Start „ab Mai 2026" aktuell halten; Inhalte ergänzen, sobald bekannt.
- [ ] **Stellen-Details** (Karriere) — Aufgaben/Profil/Benefits wurden aus dem verbatim
      Jobtext gegliedert; „überdurchschnittliche Bezahlung" ohne Betrag → kein `baseSalary`
      im JobPosting-Schema. Bei Bedarf konkretisieren.
- [x] **Google-Eintrag gefunden & verdrahtet.** Verifizierter Google-Maps-Eintrag:
      CID `0xa4364fc320fa80e3` (= `11832732770453061859`), Koordinaten 48.8270643, 9.0661434.
      → Karte zeigt jetzt den **echten Pin**; „Route" und die TrustBar verlinken den echten Eintrag.
- [ ] **Echte Google-Reviews:** Es liegen aktuell **keine öffentlichen Bewertungen** vor
      (golocal/11880: 0 Rezensionen; das kurz gesichtete „4,8/17" stand NICHT im Quelltext und
      war ein Lese-Artefakt). Daher **keine Sterne erfunden** — die TrustBar zeigt belegbare
      Vertrauens-Säulen + Google-Link. Sobald echte Bewertungen vorliegen: in
      `src/data/site.ts → google.rating` + `google.reviews` eintragen, dann rendert die TrustBar
      automatisch die echten Sterne (kein weiterer Code nötig).
- [ ] **Privat/Kasse-Hinweis** — falls relevant und belegt, ergänzen (HP-Physio: Selbstzahler;
      gesetzliche Kassen nur mit ärztlicher Verordnung — verbatim aus hp-physio übernommen).

## Bildnachweis

Logo, Silke-Portrait sowie Praxis- und Anwendungsfotos: Physio Praxis Pfeiffer
(Originaldateien der Bestandsseite, `fileadmin/`). Das Hero-„Behandlung ohne Rezept"-Badge
und die Salbei-Akzente sind Designelemente, keine Inhaltsbehauptungen.
