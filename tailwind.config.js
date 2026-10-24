/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./error.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1280px",
      },
      colors: {
        primary: "#2F5D46",
        secondary: "#6B706C",
        background: "#F4F2EE",
        text: "#1C1F1D",
        border: "#E5E3DE",
        accent: "#E2683C",
        star: "#E5A429",

        forest: "#2F5D46",
        navy: "#2B3A55",
        sand: "#C9B48F",
        black: "#262626",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};