/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#000',
        'dark-yellow': '#b59e4d',
        'white': '#fff',
      }
    },
    
  },
  plugins: [],
}
