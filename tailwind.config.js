/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/forms"),
    require("@headlessui/vue"),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#6366f1",
          secondary: "#ffce93",
          accent: "#37cdbe",
          neutral: "#3d4451",
          success: "#61c877",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
