/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'sans': 'Roboto',
      'quotes': ['Rock Salt', 'Roboto']
    },
    extend: {
      fontSize: {
        'xxs': '.625rem',
      }
    },
  },
  plugins: [],
}