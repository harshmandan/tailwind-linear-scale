import type { Config } from "tailwindcss";

const PX_TO_REM = 0.0625;
const linearScale = (scale: number[]) =>
  Object.fromEntries(scale.map((value) => [value, `${value * PX_TO_REM}rem`]));

const spacing = linearScale([
  ...Array(101).keys(),
  ...[
    128, 192, 256, 320, 384, 448, 512, 576, 640, 704, 768, 832, 896, 960, 1024,
    1088, 1152, 1216,
  ],
]);

const borderWidth = linearScale([0, 0.5, 1, 2, 4]);
const borderRadius = linearScale([0, 2, 4, 6, 8, 12, 16]);
const screens = [640, 768, 1024, 1280, 1536];
const containers = [
  256, 288, 320, 384, 448, 512, 576, 640, 768, 896, 1024, 1152, 1280,
];

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    borderRadius: {
      ...borderRadius,
      full: "9999px",
    },
    screens: screens.map((screen) => ({
      [screen]: `${screen}px`,
    })),
    // Needs containers plugin for this to work
    containers: containers.map((container) => ({
      [container]: `${container}px`,
    })),
    fontSize: {
      "12": ["0.8rem", "1.2rem"],
      "14": ["0.9rem", "1.2rem"],
      "16": ["1rem", "1.2rem"],
      "18": ["1.1rem", "1.2rem"],
      "20": ["1.2rem", "1.2rem"],
      "24": ["1.5rem", "1.2rem"],
      "32": ["2rem", "1.2rem"],
    },
    fontWeight: {
      "400": "400",
      "500": "500",
      "600": "600",
      "700": "700",
      "800": "800",
    },
    height: spacing,
    spacing: spacing,
    borderWidth,
    extend: {
      zIndex: {
        0: "0",
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        10: "10",
      },
    },
  },
  plugins: [],
} satisfies Config;
