/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {      
      colors: {
        primaryColor: '#ff9966',
        secondaryColor:'#ff5e62'                
      }
    },
  },
  plugins: [],
}
