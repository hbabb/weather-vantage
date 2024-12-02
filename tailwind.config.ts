import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui",
      addCommonColors: true,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        fontSize: {},
        lineHeight: {},
        radius: {},
        disabledOpacity: 0.5,
        dividerWeight: "16px",
        borderWidth: {},
        boxShadow: {},
      },
      themes: {
        light: {
          layout: {
            fontSize: {},
            lineHeight: {},
            radius: {},
            disabledOpacity: 0.5,
            dividerWeight: "16px",
            borderWidth: {},
            boxShadow: {},
          },
          colors: {},
        },
        dark: {
          layout: {
            fontSize: {},
            lineHeight: {},
            radius: {},
            disabledOpacity: 0.5,
            dividerWeight: "16px",
            borderWidth: {},
            boxShadow: {},
          },
          colors: {},
        },
      },
    }),
  ],
};

export default config;
