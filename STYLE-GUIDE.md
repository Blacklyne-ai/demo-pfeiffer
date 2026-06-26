# Style Guide — Physio Praxis Pfeiffer

Redesign der TYPO3-Bestandsseite (physio-praxis-pfeiffer.de) als moderne Astro-5-Site.
Charakter: **hell, warm, vertrauensvoll, ruhig** — Physiotherapie + ein Hauch Wellness-Ruhe.
Kein Baukasten, keine Auto-Kunden-Schablone, kein Broschüren-Deutsch.

## Logo-Farben (pixel-extrahiert)

Pixel-Analyse von `public/logo.png` (sharp, Top-Farben nach Häufigkeit, Weiß ausgenommen):

| Rang | Hex | Anteil | Bedeutung |
|---|---|---|---|
| 1 | `#b80718` | dominanter Nicht-Weiß-Ton | Das rote Wirbelsäulen-Motiv (Spine) im Logo |
| – | dunkles Anthrazit | Wortmarke „PHYSIO PRAXIS PFEIFFER" | Headline-/Textfarbe |
| – | zarter Grünschimmer | Blatt-/Lichtakzent oben | Inspiration für den Salbei-Akzent |

**Primary (Marke):** `#B80718` · **Text/Anthrazit:** `#2A2320`

Logo-Pixel-Analyse hat Vorrang vor Branchen-Klischee: Die übliche Physio-Palette ist
Türkis/Blau — Pfeiffers echtes CI ist jedoch **Crimson**. Das wird 1:1 übernommen
(Memory: „Original-CI 1:1 übernehmen"). Salbeigrün ergänzt als ruhiger Wellness-Ton,
abgeleitet aus dem Logo-Blattschimmer **und** der olivfarbenen Behandlungsliege in den
echten Praxisfotos — bewusst weg vom Baukasten-Default.

## Farbpalette

| Element | Hex | Quelle |
|---|---|---|
| Brand Primary (Crimson) | `#B80718` | Logo-Pixel |
| Crimson Deep (Buttons) | `#9C0613` | abgeleitet, weiß lesbar ~7:1 |
| Crimson Ink (Link-Text AAA) | `#7D0510` | abgeleitet |
| Crimson Bright (auf Dark) | `#EF8F9B` | warmes Rosé für dunkle Sektionen |
| Salbei (Wellness-Akzent) | `#5F7152` | Logo-Blatt + Behandlungsliege |
| Salbei Deep (Text/Hover) | `#4C5C41` | abgeleitet |
| Ink (Headlines) | `#2A2320` | warmes Anthrazit (Wortmarke) |
| Muted (Fließtext) | `#655A54` | AA ~5.3 auf Paper |
| Light BG (Paper) | `#FAF7F2` | warmes Off-White, Haupt-BG |
| Surface (Cream) | `#F5ECE1` | sanfte Abstufung, alt. Sektionen |
| Sand | `#ECE0D0` | tieferer warmer Ton |
| Border | `#E7DCCD` | warme Haarlinie |
| Dark Section | `#241D1A` / Footer `#1A1411` | nur CtaBand + Footer |
| Green (Live-Dot) | `#3F9D6C` | nur Status-Punkt |

Single Source of Truth: `src/styles/global.css :root` (RGB-Triplets) → referenziert von
`tailwind.config.mjs`. ~80 % der Fläche ist hell/warm; Dunkel nur für CtaBand + Footer.

## Schrift

Die TYPO3-Bestandsseite nutzte generisches `Calibri, Verdana, Arial` (kein eigener
Markencharakter). Daher freie, begründete Wahl:

- **Headlines:** Fraunces Variable (warme humanistische Serif, `font-display:optional`,
  self-hosted → CLS ~0). Akzentwort je Headline als Fraunces *Italic* in Crimson (`<em>`).
  Trägt die Wärme/Ruhe einer Gesundheits- + Wellness-Praxis.
- **Fließtext / UI:** Work Sans (humanistische Sans, freundlich, ruhig). Latin-Subsets only.

## Voice (verbindlich)

Sie-Form, warm, persönlich, herzlich, kompetent. **Silke Pfeiffer-Flößer** als Anker.
Vertrauensvoll und ruhig — kein Verkaufston, **keine Heilversprechen** (HWG).

- ✅ verbatim erhalten: „heißen Sie herzlich willkommen", „ohne ärztliche Verordnung",
  „etwas dauerhaft Wirksames gegen Ihre Rückenschmerzen"
- ❌ vermieden: „Ihr kompetenter Partner für …", „Wo Therapie auf Leidenschaft trifft",
  „X Leistungen – eine Praxis", „Werde Teil unseres Teams!", erfundene Zahlen/Reviews

Test: „Würde Silke das einer Patientin im Gespräch so sagen?" — sonst neu.

## Brand-Charakter

persönlich geführt · **HP-Physio** (Behandlung ohne Verordnung, USP) ·
Physiotherapie + Wellness · Ditzingen bei Stuttgart · herzlich · ruhig

## Icons

Lucide (`@lucide/astro`), sparsam, kein Emoji. Physio-Icons in Crimson-Chip,
Wellness-Icons in Salbei-Chip (`.icon-chip` / `.icon-chip-sage`). Alle Namen gegen
`node_modules` geprüft (Memory: Lucide-Renames brechen den Build).
