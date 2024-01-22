import plugin from "tailwindcss/plugin";
import { Shade, ShaderPlugin, Theme } from "./types";
import { radixColors } from "./themes/radix-colors";
// import { RGB, RGBA } from "./utils";

const useCases = [
  "Background for apps",
  "Subtle background",
  "Background for UI elements",
  "Background for hovered UI elements",
  "Background for active/selected UI elements",
  "Subtle borders and separators",
  "Border and focus rings for UI elements",
  "Border for hovered UI elements",
  "Solid backgrounds",
  "Solid backgrounds for hovered state",
  "Low-contrast text",
  "High-contrast text",
];

export const shaders: ShaderPlugin = (config) => {
  const createTailwindColors = config?.createShaderClasses ?? true;

  const theme = config.shader ? config.shader() : radixColors();

  const twColors = createTailwindColors ? toTailwindColors(theme) : {};

  const lightGrayColorVars = Object.entries(theme.neutralGray).reduce(
    (acc: Record<`--grayscale-${number}`, string>, [key, value]) => {
      return {
        ...acc,
        [`--grayscale-${key}`]: value.base,
        [`--grayscale-${key}a`]: value.alphaBase,
      };
    },
    {} as Record<`--grayscale-${number}`, string>
  );

  const darkGrayColorVars = Object.entries(theme.neutralGray).reduce(
    (acc: Record<`--grayscale-${number}`, string>, [key, value]) => {
      return {
        ...acc,
        [`--grayscale-${key}`]: value.dark,
        [`--grayscale-${key}a`]: value.alphaDark,
      };
    },
    {} as Record<`--grayscale-${number}`, string>
  );

  const themes = {} as Record<string, Record<string, string>>;

  for (const [shade, values] of Object.entries(theme.shades)) {
    const lightColorsValues = {} as Record<string, string>;
    const darkColorsValues = {} as Record<string, string>;
    const saturatedGrayColorVars = {} as Record<string, string>;
    const saturatedDarkGrayColorVars = {} as Record<string, string>;
    for (const [key, value] of Object.entries(
      values as Record<string, Shade>
    )) {
      lightColorsValues[`--shade-${key}`] = value.base;
      lightColorsValues[`--shade-${key}a`] = value.alphaBase;

      darkColorsValues[`--shade-${key}`] = value.dark;
      darkColorsValues[`--shade-${key}a`] = value.alphaDark;

      saturatedGrayColorVars[`--grayscale-${key}`] = value.saturated;
      saturatedGrayColorVars[`--grayscale-${key}a`] = value.alphaSaturated;
      saturatedDarkGrayColorVars[`--grayscale-${key}`] = value.darkSaturated;
      saturatedDarkGrayColorVars[`--grayscale-${key}a`] =
        value.darkAlphaSaturated;
    }

    themes[`.shader-${shade}`] = {
      ...lightColorsValues,
      ...lightGrayColorVars,
    };

    themes[`.shader-${shade}-saturated`] = {
      ...lightColorsValues,
      ...saturatedGrayColorVars,
    };

    themes[`.shader-dark-${shade}`] = {
      ...darkColorsValues,
      ...darkGrayColorVars,
    };

    themes[`.shader-dark-${shade}-saturated`] = {
      ...darkColorsValues,
      ...saturatedDarkGrayColorVars,
    };
  }

  const baseVars = {
    "shade-1": annotate("var(--shade-1)", useCases[0]!),
    "shade-2": annotate("var(--shade-2)", useCases[1]!),
    "shade-3": annotate("var(--shade-3)", useCases[2]!),
    "shade-4": annotate("var(--shade-4)", useCases[3]!),
    "shade-5": annotate("var(--shade-5)", useCases[4]!),
    "shade-6": annotate("var(--shade-6)", useCases[5]!),
    "shade-7": annotate("var(--shade-7)", useCases[6]!),
    "shade-8": annotate("var(--shade-8)", useCases[7]!),
    "shade-9": annotate("var(--shade-9)", useCases[8]!),
    "shade-10": annotate("var(--shade-10)", useCases[9]!),
    "shade-11": annotate("var(--shade-11)", useCases[10]!),
    "shade-12": annotate("var(--shade-12)", useCases[11]!),
    "shade-1a": "var(--shade-1a)",
    "shade-2a": "var(--shade-2a)",
    "shade-3a": "var(--shade-3a)",
    "shade-4a": "var(--shade-4a)",
    "shade-5a": "var(--shade-5a)",
    "shade-6a": "var(--shade-6a)",
    "shade-7a": "var(--shade-7a)",
    "shade-8a": "var(--shade-8a)",
    "shade-9a": "var(--shade-9a)",
    "shade-10a": "var(--shade-10a)",
    "shade-11a": "var(--shade-11a)",
    "shade-12a": "var(--shade-12a)",
    "grayscale-1": annotate("var(--grayscale-1)", useCases[0]!),
    "grayscale-2": annotate("var(--grayscale-2)", useCases[1]!),
    "grayscale-3": annotate("var(--grayscale-3)", useCases[2]!),
    "grayscale-4": annotate("var(--grayscale-4)", useCases[3]!),
    "grayscale-5": annotate("var(--grayscale-5)", useCases[4]!),
    "grayscale-6": annotate("var(--grayscale-6)", useCases[5]!),
    "grayscale-7": annotate("var(--grayscale-7)", useCases[6]!),
    "grayscale-8": annotate("var(--grayscale-8)", useCases[7]!),
    "grayscale-9": annotate("var(--grayscale-9)", useCases[8]!),
    "grayscale-10": annotate("var(--grayscale-10)", useCases[9]!),
    "grayscale-11": annotate("var(--grayscale-11)", useCases[10]!),
    "grayscale-12": annotate("var(--grayscale-12)", useCases[11]!),
    "grayscale-1a": "var(--grayscale-1a)",
    "grayscale-2a": "var(--grayscale-2a)",
    "grayscale-3a": "var(--grayscale-3a)",
    "grayscale-4a": "var(--grayscale-4a)",
    "grayscale-5a": "var(--grayscale-5a)",
    "grayscale-6a": "var(--grayscale-6a)",
    "grayscale-7a": "var(--grayscale-7a)",
    "grayscale-8a": "var(--grayscale-8a)",
    "grayscale-9a": "var(--grayscale-9a)",
    "grayscale-10a": "var(--grayscale-10a)",
    "grayscale-11a": "var(--grayscale-11a)",
    "grayscale-12a": "var(--grayscale-12a)",
  };

  return plugin(
    ({ addBase, addVariant }) => {
      addBase({
        ...themes,
      });

      // Create an inverted variant that works on children and same-level elements
      addVariant("flip", [".flip &", "&.flip"]);
    },
    {
      theme: {
        extend: {
          colors: {
            ...baseVars,
            ...(createTailwindColors ? twColors : {}),
          },
        },
      },
    }
  );
};

function toTailwindColors(theme: Theme) {
  // note: we use callbacks as values here to ignore the opacity value that tailwind adds to each color
  // https://www.youtube.com/watch?v=MAtaT8BZEAo
  const colors: Record<string, (arg: string) => string> = {};

  // shades
  for (const [colorName, values] of Object.entries(theme.shades)) {
    for (const [shade, value] of Object.entries(values)) {
      const useCase = useCases[Number(shade) - 1] ?? "";

      colors[`${colorName}-${shade}`] = () => annotate(value.base, useCase);
      colors[`${colorName}-${shade}a`] = () => value.alphaBase;
      colors[`dark-${colorName}-${shade}`] = () =>
        annotate(value.dark, useCase);
      colors[`dark-${colorName}-${shade}a`] = () => value.alphaDark;
    }
  }

  // create neutral gray colors
  for (const [shade, value] of Object.entries(theme.neutralGray)) {
    const useCase = useCases[Number(shade) - 1] ?? "";

    colors[`gray-${shade}`] = () => annotate(value.base, useCase);
    colors[`gray-${shade}a`] = () => value.alphaBase;
    colors[`dark-gray-${shade}`] = () => annotate(value.dark, useCase);
    colors[`dark-gray-${shade}a`] = () => value.alphaDark;
  }

  return colors;
}

function annotate(val: string, comment: string) {
  return `${val} /* ${comment} */`;
}

/**
 * In order for tailwind opacity to work for colors, we need to convert the color to a R, B, G
 */
// function toTailwindAlphaSafeColor(color: string): RGB | RGBA {
//   if (color.startsWith("#")) {
//     const expanded = expandHex(color);

//     if (isHexNonAlphaColor(color)) {
//       return hexToRGB(color);
//     }

//     if (isHexAlphaColor(color)) {
//       return hexToRGBA(color);
//     }
//   }
// }
