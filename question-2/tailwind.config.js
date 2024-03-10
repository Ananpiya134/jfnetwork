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
  theme: {
    fontSize: {
      xs: ['12px, 16px'],
      sm: ['14px, 20px'],
      base: ['16px', '20px']
    },
    screens: {
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        epilogue: ['"Epilogue", sans-serif'],
        manrope: ['"Manrope", sans-serif'],
      },
    },
    lineHeight: {
      3.5: "0.875rem", // 14px
    },
  },
  plugins: [],
};
