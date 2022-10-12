/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", './public/index.html'],
  theme: {
    extend: {
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
