/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        MN : ['Manrope'],
         
        
      },
      boxShadow: {
        '3xl' :'0 0.2rem 1.4rem 0 rgba(82, 255, 168, 1)',
      }
    },
  },
  plugins: [],
}

