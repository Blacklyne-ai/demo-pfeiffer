# Physio Praxis Pfeiffer — Website (2026 Redesign)

Helle, warme Website für die **Physio Praxis Pfeiffer GmbH** in **Ditzingen** (bei Stuttgart) —
persönlich geführt von **Silke Pfeiffer-Flößer**, Heilpraktikerin für Physiotherapie.
Ersetzt die alte TYPO3-Seite. Physiotherapie + Wellness, mit dem HP-Physio-USP
(Behandlung auch ohne ärztliche Verordnung).

## Stack

- **Astro 5** (static, kein SSR/Adapter) → `/dist` als reines HTML
- **Tailwind v3.4** (`@astrojs/tailwind`)
- **@lucide/astro** Icons · **Fraunces** (Display) + **Work Sans** (Body), self-hosted
- DSGVO: kein Tracking, kein Formular, Google Maps erst nach Klick

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview
```

## Deploy (Cloudflare Pages)

Framework: **Astro** · Build: `npm run build` · Output: `dist`

## Struktur

- `src/data/site.ts` — Kontakt, Impressum, Navigation (verbatim aus Bestandsseite)
- `src/data/content.ts` — alle Leistungen, Wellness, HP-Physio, Jobangebot (verbatim)
- `src/components/` — Header, Footer, PageHero, ServiceDetail, CtaBand, MapBlock, …
- `src/pages/` — Start, Physiotherapie (+ Verfahren), Wellness (+ Anwendungen),
  HP Physio, Physiofit, Über uns, Karriere, Kontakt, Impressum, Datenschutz

## Inhalt & Recht

Alle Texte stammen **verbatim** aus der Bestandsseite — nichts erfunden, keine
Heilversprechen (HWG). Designentscheidungen und offene Punkte für den Kunden:
siehe **[JUDGEMENT_CALLS.md](JUDGEMENT_CALLS.md)**. Farb-/Schrift-/Voice-System:
siehe **[STYLE-GUIDE.md](STYLE-GUIDE.md)**.
