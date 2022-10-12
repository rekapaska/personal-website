/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        myred: "#f87474",
        mywhite: "#f9f2ed",
        myblue: "#3ab0ff",
      },
      backgroundImage: {
        'split-myred-mywhite': "linear-gradient(to bottom, #f87474 40% , #f9f2ed 40%);"
        ,
      },
      screens: {
        'xsm': '400px',
      },
    },
  },
  plugins: [],
}
