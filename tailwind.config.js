/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#70C7BA', // RGB: 111, 199, 186; CMYK: 54, 0, 33, 0; Pantone: 570 C
        secondary: '#49EACB', // RGB: 73, 234, 203; CMYK: 54, 0, 32, 0; Pantone: 333 C
        neutralBlack: '#231F20', // RGB: 35, 31, 32; CMYK: 0, 0, 0, 90; Pantone: Neutral Black C
        lightGray: '#B6B6B6', // RGB: 182, 182, 182; CMYK: 0, 0, 0, 29; Pantone: 421 C
      },
      fontFamily: {
        header: ['Rubik', 'sans-serif'],
        subheader: ['Oswald', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
