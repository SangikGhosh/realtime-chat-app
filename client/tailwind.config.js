/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#00acb4",
        secondary : "#058187",
        msgreceive : "#1a1f27",
        msgsend : "#0b62bf",
        inputbox : "#333d49",
        video : "#ff2e74",
        photo : "#ffbc38",
        username : "#222a35"

      }
    },
  },
  plugins: [],
}

