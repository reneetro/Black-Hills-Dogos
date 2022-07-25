/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'green': '#26530F',
      'silver': {
        100: '#C5C5C5',
        200: '#A5A5A5'
      } ,
      'brown': '#8c623c',
      'blue': '#9abed9',
      'black': colors.black,
      'white': colors.white
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
