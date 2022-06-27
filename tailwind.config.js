const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,

      'tablet': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }
    },
    extend: {
      colors: {
        red: '#d07171',
        blue: '#59a0d3',
        green: '#6dc56c',
        purple: '#7d84c8',

      },

    },
  },
  important: true,

  plugins: [],
}
