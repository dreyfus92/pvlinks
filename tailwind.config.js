/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'custom': ['Fira Code']
    },
    colors: {
      'blue-nb': '#39DBFF',
      'yellow-nb': '#FFF500',
      'green-nb': '#00FF75',
      'pink-nb': '#DD7DFF',
      'red-nb': '#FF5E5E'
    },
    extend: {
      boxShadow: {
        'custom-s': '9px 8px 0px 0px rgba(0, 0, 0, 0.99)'
      }
    }
  },
  plugins: [],
}
