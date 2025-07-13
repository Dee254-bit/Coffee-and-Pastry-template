/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#FDF6F0',
          100: '#F9E6D3',
          200: '#F3D5B7',
          300: '#E8B892',
          400: '#D89968',
          500: '#C17A3E',
          600: '#8B4513',
          700: '#6F4E37',
          800: '#4A2C17',
          900: '#2C1810'
        },
        cream: {
          50: '#FFFEF7',
          100: '#FFF8DC',
          200: '#F5F5DC',
          300: '#F0E68C',
          400: '#DDD6C0',
          500: '#C8B99C'
        },
        moss: {
          50: '#F7FDF7',
          100: '#E8F5E8',
          200: '#C3E6C3',
          300: '#9DD69D',
          400: '#8FBC8F',
          500: '#7BA67B',
          600: '#5F8A5F',
          700: '#4A6B4A',
          800: '#355235',
          900: '#1F3A1F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};