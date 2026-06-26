/** @type {import('tailwindcss').Config} */
// Physio Praxis Pfeiffer — Palette aus Logo-Pixel-Analyse:
// Crimson #B80718 (das rote Wirbelsäulen-Motiv im Logo) = Marke.
// Warmes Off-White-Fundament (Paper #FAF7F2), Salbeigrün #5F7152 als ruhiger
// Wellness-Akzent (Logo-Blattschimmer + olivfarbene Behandlungsliege).
// Single Source of Truth der Farbwerte: src/styles/global.css :root (RGB-Triplets).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'rgb(var(--rgb-ink) / <alpha-value>)',
          soft: 'rgb(var(--rgb-ink-soft) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'rgb(var(--rgb-muted) / <alpha-value>)',
          light: 'rgb(var(--rgb-muted-light) / <alpha-value>)',
        },
        paper: 'rgb(var(--rgb-paper) / <alpha-value>)',
        cream: 'rgb(var(--rgb-cream) / <alpha-value>)',
        sand: 'rgb(var(--rgb-sand) / <alpha-value>)',
        line: 'rgb(var(--rgb-border) / <alpha-value>)',
        crimson: {
          DEFAULT: 'rgb(var(--rgb-crimson) / <alpha-value>)',
          deep: 'rgb(var(--rgb-crimson-deep) / <alpha-value>)',
          ink: 'rgb(var(--rgb-crimson-ink) / <alpha-value>)',
          bright: 'rgb(var(--rgb-crimson-bright) / <alpha-value>)',
        },
        dark: {
          DEFAULT: 'rgb(var(--rgb-dark) / <alpha-value>)',
          deep: 'rgb(var(--rgb-dark-deep) / <alpha-value>)',
          soft: 'rgb(var(--rgb-dark-soft) / <alpha-value>)',
        },
        sage: {
          DEFAULT: 'rgb(var(--rgb-sage) / <alpha-value>)',
          deep: 'rgb(var(--rgb-sage-deep) / <alpha-value>)',
          bright: 'rgb(var(--rgb-sage-bright) / <alpha-value>)',
        },
        green: 'rgb(var(--rgb-green) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Work Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: { pill: '999px' },
      maxWidth: { '7xl': '80rem', '8xl': '88rem' },
    },
  },
  plugins: [],
};
