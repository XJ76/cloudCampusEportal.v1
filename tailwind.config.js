/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: 'Montserrat',
        display: ['Montserrat'],
        body: ['"Montserrat'],
      }
    },
  },
  plugins: [],
}

