/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      container: {
        padding: "1rem",
        screens: {
          xl: "1160px",
          "2xl": "1160px",
        },
      },
      colors: {
        dark: {
          10: "#100F0F",
          20: "#E2E2E2",
          30: "#F9F9F9",
        },
      },
    },
  },
  plugins: [],
};
