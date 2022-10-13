/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      container: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#145374",
        dark: "#00334E",
        secondary: "#EE6F57",
        secondary2: "#64748B",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
