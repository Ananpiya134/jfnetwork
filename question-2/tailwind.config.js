/* eslint-disable sort-keys */
/*
 * ==============================================
 *  NOTE: Read this before adding a custom value
 * ==============================================
 * Utilize this tool to effortlessly generate a customized scaling key that ensures the validity of conversions between pixels and rem units.
 * For instance, if your heading 1 (h1) requires a line height of 92px, whereas the official TailwindCSS only supports 40px (leading-10),
 * this tool becomes invaluable. Simply follow the link provided, input the desired pixel value, and obtain the appropriate TailwindCSS unit
 * scaling result. Apply this value as an additional configuration to your TailwindCSS rule, enhancing its precision and effectiveness.
 * Link: https://tailwindremconverter.netlify.app/
 */

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./index.html"],
  safelist: [
    {
      pattern: /col-span-./,
    },
    {
      pattern: /justify-./,
    },
  ],
  theme: {
    colors: {
      black: "#1F2937",
      grey: {
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        700: "#4B5563",
        900: "#111827",
      },
      white: "#FFFFFF",
    },

    screens: {
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        epilogue: ['"Epilogue", sans-serif'],
        manrope: ['"Manrope", sans-serif'],
      },
      gridColumn: {
        "span-16": "span 16 / span 16",
      },
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))", // 13 cols
        16: "repeat(16, minmax(0, 1fr))", // 16 cols
      },
      lineHeight: {
        3.5: "0.875rem", // 14px
      },
      spacing: {
        1.5: "0.375rem", // 6px
        1.75: "0.438rem", // 7px
        2.5: "0.625rem", // 10px
        6.5: "1.625rem", // 26px
        85.25: "21.313rem", // 341px
        209.5: "52.375rem", // 838px
      },
    },
  },
  plugins: [],
};
