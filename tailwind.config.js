/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          0: "#3f3f46",
          1: "#d4d4d8",
        },
        purple: "#7c3aed",
      },
      backgroundImage: {
        Dubai:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy8MnI9AgIOrjmy2Sn7y2_Ebiaji_vfwRc_Q&usqp=CAU')",
      },
      screens: {
        sm: "0px",
        // => @media (min-width: 576px) { ... }

        md: "720px",
        // => @media (min-width: 960px) { ... }

        lg: "1440px",
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [],
};
