/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#400028",
        color2: "#D36B00",
        color3: "#E6D2AA",
        color4: "#F1EFDC",
      },
    },
  },
  plugins: [],
};
