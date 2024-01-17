/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   black: colors.black,
    //   white: colors.white,
    //   gray: colors.gray,
    //   emerald: colors.emerald,
    //   indigo: colors.indigo,
    //   yellow: colors.yellow,
    //   violet: colors.violet,
    //   amber: colors.amber,
    //   fuchsia: colors.fuchsia,
    //   red: colors.red,
    //   'primary': {
    //     '50': '#fef1f7',
    //     '100': '#fee5f0',
    //     '200': '#fecce3',
    //     '300': '#ffa2cb',
    //     '400': '#fe68a7',
    //     '500': '#f83c86',
    //     '600': '#e91f64',
    //     '700': '#ca0c47',
    //     '800': '#a70d3b',
    //     '900': '#8b1034',
    //     '950': '#55021a',
    // },   

    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"}
      }
    },
  },
  plugins: [],
}
