/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          970: '#0F172A',
          950: '#0b1220',
          900: '#0f1a2c',
          800: '#14233d',
          700: '#1a2c4f',
          600: '#223862',
        },
        medical: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        slateblue: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        gold: {
          400: '#D8B65C',
          500: '#C7A73E',
          600: '#B8962E',
        },
      },
      boxShadow: {
        soft: '0 12px 30px rgba(2, 6, 23, 0.08)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.25), 0 20px 60px rgba(2, 6, 23, 0.12)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(800px circle at 20% 10%, rgba(34, 211, 238, 0.22), transparent 55%), radial-gradient(900px circle at 80% 0%, rgba(99, 102, 241, 0.18), transparent 55%)',
      },
    },
  },
  plugins: [],
}

