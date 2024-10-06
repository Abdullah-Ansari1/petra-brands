/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        amber: { 300: "var(--amber_300)" },
        black: {
          900: "var(--black_900)",
          "900_01": "var(--black_900_01)",
          "900_02": "var(--black_900_02)",
          "900_14": "var(--black_900_14)",
          "900_19": "var(--black_900_19)",
          "900_33": "var(--black_900_33)",
        },
        blue_gray: {
          50: "var(--blue_gray_50)",
          100: "var(--blue_gray_100)",
          400: "var(--blue_gray_400)",
          600: "var(--blue_gray_600)",
          900: "var(--blue_gray_900)",
          "100_01": "var(--blue_gray_100_01)",
        },
        deep_purple: { 100: "var(--deep_purple_100)" },
        gray: {
          200: "var(--gray_200)",
          300: "var(--gray_300)",
          800: "var(--gray_800)",
          900: "var(--gray_900)",
          "200_01": "var(--gray_200_01)",
          "200_02": "var(--gray_200_02)",
          "800_01": "var(--gray_800_01)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
          "900_6b": "var(--gray_900_6b)",
        },
        indigo: { 900: "var(--indigo_900)", "900_4f": "var(--indigo_900_4f)" },
        light_blue: { 600: "var(--light_blue_600)" },
        light_green: { 400: "var(--light_green_400)" },
        red: { 300: "var(--red_300)" },
        white: { a700: "var(--white_a700)", a700_01: "var(--white_a700_01)" },
      },
      boxShadow: {
        xs: "0 4px 69px 0 #251f5c4f",
      },
      fontFamily: {
        tttravelsnexttrl: "TT Travels Next Trl",
        milligramtrial: "Milligram Trial",
        dmsans: "DM Sans",
        fontspringdemogibsonheavy: "FONTSPRING DEMO - Gibson Heavy",
        inter: "Inter",
        syne: "Syne",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: { gradient: "linear-gradient(180deg, #1b1b1b00,#232323)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
