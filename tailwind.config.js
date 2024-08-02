/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mochiy: ["Mochiy Pop One", "sans-serif"],
        whisper:["Whisper", "cursive"],
        oswald:["oswald","sans-serif"],
        poppins:["Poppins", 'sans-serif'],
        narrow:["PT Sans Narrow", 'sans-serif']
      },
      boxShadow: {
        'custom-light': '0 14px 10px rgba(255, 255, 255, 0.1)',
        'custom-dark': '-16px 10px 15px rgba(0, 0, 0, 0.2)',
        'custom-inset': 'inset 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      width:{
        twelve: '17.6666%',
        midRange: '88%'
      },
      borderRadius:{
        'custom-rounded': '30px',
      },
      height:{
        'custom-height': '50rem',
      },
      rotate: {
        '360': '360deg',
      },
    },
  },
  plugins: [],
}

