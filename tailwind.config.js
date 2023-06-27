/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: '512px',
          md: '728px',
          lg: '984px',
          xl: '1040px',
          '2xl': '1260px',
        },
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        dark: "#151517",
      },
      backgroundImage: {},
      fontFamily: {
        georama: ["Georama", "sans-serif"],
      },
    },
  },
  plugins: [],
};
