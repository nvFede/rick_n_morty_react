/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'rnm': {
        green: '#97ce4c',
        DEFAULT: '#06b6d4',
        blue: '#01b4c6',
        pink: '#f675da',
        yellow: '#FFF874',
      },
    },},
    
  },
  plugins: [],
}