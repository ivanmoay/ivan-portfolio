/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        "text-primary": "",
        "text-link-hover": "",
      },
      // fontSize:{
      //   'fs-primary': '2.25rem',
      //   'fs-secondary': '',
      // }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    // fontSize:{
    //   'fs-primary': '2.25rem',
    //   'fs-secondary': '',
    // }
  },
  plugins: [],
}
