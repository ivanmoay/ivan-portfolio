/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}',
    // './node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    // './node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
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
  plugins: [
    // require('flowbite/plugin')
  ],
}
