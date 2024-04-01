/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "500px",
        130: "600px",
      },
      colors: {
        basicColor: "rgb(79, 191, 112)",
        bgAll: "var(--Dark-07, #F3F3F3)",
        bgBtn: "#58A7DE",
        bgCard: "#F3F3F3",
        readMore: "#FF8C47",
        backBtn: "#D72050",
      },
      fontFamily: {
        basicFont: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui", "flowbite/plugin")],
};
