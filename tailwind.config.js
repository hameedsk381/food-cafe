/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{xono:["xono","sans-serif"]}
    },
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
};
