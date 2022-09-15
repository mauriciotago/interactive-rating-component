/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // PRIMARY
        orange: "hsl(25, 97%, 53%)",
        "orange-hovered": "hsla(25, 97%, 53%, 0.8125)",

        // NEUTRAL
        white: "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsla(216, 12%, 54%, 0.1)",
        "medium-grey-hovered": "hsla(216, 12%, 54%, 0.2)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
      },

      // TYPOGRAPHY
      fontSize: {
        header: "1.8rem",
        paragraph: "0.9375rem",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      screens: {
        mobile: "375px",
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};
