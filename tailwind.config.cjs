/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Newsreader", "'Iowan Old Style'", "Georgia", "serif"],
      },
      colors: {
        paper: "rgb(var(--paper) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        rule: "rgb(var(--rule) / <alpha-value>)",
      },
    },
  },
  darkMode: "media",
  plugins: [
    function ({ addBase }) {
      addBase({
        ":root": {
          "--paper": "255 255 255",
          "--ink": "27 27 31",
          "--muted": "107 107 115",
          "--rule": "214 214 222",
        },
        "@media (prefers-color-scheme: dark)": {
          ":root": {
            "--paper": "20 20 22",
            "--ink": "232 230 227",
            "--muted": "154 154 163",
            "--rule": "58 58 64",
            "color-scheme": "dark",
          },
        },
      });
    },
  ],
};
