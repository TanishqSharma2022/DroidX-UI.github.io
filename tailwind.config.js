/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'gsans': ['Product Sans', 'sans-serif'],
        'sans': ['"Gilmer"', ...defaultTheme.fontFamily.sans],
        'pj': ['Plus Jakarta Sans', 'serif']

      },
      colors: {
        text: "#ffffff",
        background: "#1B262C",
        primary: "#011BF1",
        secondary: "#011BF1",
        accent: "#BBE1FA",
        darkersecondary: "#06385a"

      },
    },
  },
  plugins: [],
};
