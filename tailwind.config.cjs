/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      cabin: 'Cabin',
    },
    extend: {},
    screens: {
      xxs: '300px',
      xs: '480px',
      sm: '668px',
      md: '992px',
    },
  },
  plugins: [],
}
