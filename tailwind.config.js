/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0a0a0a',
        'bg-secondary': '#1a1a1a',
        'bg-card': '#111111',
        gold: '#d4af37',
        'gold-light': '#e5c158',
        'cta-gold': '#c9a84c',
        'text-muted': '#737373',
      },
      fontFamily: {
        assistant: ['var(--font-assistant)', 'Assistant', 'Heebo', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.35)',
        'gold-glow-intense': '0 0 40px rgba(212, 175, 55, 0.55)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4af37 0%, #c9a84c 50%, #b8932a 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
      },
    },
  },
  plugins: [],
};
