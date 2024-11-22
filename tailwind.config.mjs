import daisyui from "daisyui"
import typography from "@tailwindcss/typography"
import {cmyk, sunset} from "daisyui/src/theming/themes";

export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        cmyk,
        sunset: {
          ...sunset,
          primary: "#065f46",
          secondary: "#059669",
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
