import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pine: {
          950: '#0B1311', // Deep Pine Night (Primary Dark Background)
          900: '#0E1916',
          850: '#101D19',
          800: '#13221E', // Alpine Stone (Card / Surface)
          700: '#182C27', // Muted Moss & Evergreen
          600: '#203A34',
        },
        alpine: {
          stone: '#13221E',
          surface: '#182C27',
          border: 'rgba(45, 106, 79, 0.25)',
        },
        glacial: {
          DEFAULT: '#38A3A5',
          light: '#57CC99',
          dark: '#22577A',
          glow: 'rgba(56, 163, 165, 0.15)',
        },
        dawn: {
          ochre: '#DDA15E',
          amber: '#E07A5F',
        },
        botanical: {
          green: '#2D6A4F',
          dark: '#1B4332',
        },
        mist: {
          50: '#F8FAF9',
          100: '#F4F7F5', // Morning Mist (Light Background)
          200: '#EAF0EC', // Glacial Stone (Light Surface)
          300: '#D5DFD8',
          text: '#0F1E19', // Charcoal Slate (Light Text)
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Fraunces', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-teal': '0 0 35px -5px rgba(56, 163, 165, 0.3)',
        'glow-ochre': '0 0 35px -5px rgba(221, 161, 94, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    typography,
  ],
};
