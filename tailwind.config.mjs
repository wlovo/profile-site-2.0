import daisyui from "daisyui"
import typo from "@tailwindcss/typography"
import {cmyk, sunset} from "daisyui/src/theming/themes";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [
    typo,
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        cmyk,
        sunset: {
          ...sunset,
          primary: "#134e4a",
          secondary: "#047857",
          accent: "#0891b2",
        },
      },
    ],
    darkTheme: "sunset",
  },
  theme: {
    extend: {},
  },
};
