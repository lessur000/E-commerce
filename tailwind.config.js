/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      display:['group-focus'],
      
    },

    fontFamily:{
      elsi: ['Elsie Swash Caps']
    }
  },
  plugins: [],
}

