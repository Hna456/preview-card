/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        softBlue: '#8bacda',
        cyan: '#00fff7',
        appBlue: '#0d192b',
        cardBlue: '#14253d',
        lineBlue: '#2f415b'
      },
      fontFamily: {
        'Outfit': ['Outfit', 'sans-serif']
      },
      height: {
        'xl': '580px',
        'xxl': '590px'
      },
      width: {
        '85': '340px'
      }
    },
  },
  plugins: [],
}

