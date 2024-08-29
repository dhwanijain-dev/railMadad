
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ["Poppins", "sans - serif "]
      },
      keyframes: {
        wiggle: {
          '0%,100%': { backgroundColor: '#930b3e' },
          '50%': { backgroundColor: '#f58423' },
        }
      }
      
    },
  },
  plugins: [],
}

