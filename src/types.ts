import type plugin from "tailwindcss/plugin";

export type Shade = {
  base: string;
  alphaBase: string;
  dark: string;
  alphaDark: string;
  saturated: string;
  darkSaturated: string;
  alphaSaturated: string;
  darkAlphaSaturated: string;
};

/**
 * ColorScale represents a scale of shades for various use cases.
 */
export type ColorScale = {
  /**
   * Usecase: Background for App.
   *
   * inverts to 12
   */
  1: Shade;

  /**
   * Usecase: Subtle background.
   *
   * inverts to 11
   */
  2: Shade;

  /**
   * Usecase: Background for UI elements.
   *
   * inverts to 10
   */
  3: Shade;

  /**
   * Usecase: Background for hovered UI elements.
   *
   * inverts to 9
   */
  4: Shade;

  /**
   * Usecase: Background for active/selected UI elements.
   *
   * inverts to 8
   */
  5: Shade;

  /**
   * Usecase: Subtle borders and separators.
   *
   * inverts to 7
   */
  6: Shade;

  /**
   * Usecase: Border and focus rings for UI elements.
   *
   * inverts to 6
   */
  7: Shade;

  /**
   * Usecase: Border for hovered UI elements.
   *
   * inverts to 5
   */
  8: Shade;

  /**
   * Usecase: Solid backgrounds.
   *
   * inverts to 4
   */
  9: Shade;

  /**
   * Usecase: Solid backgrounds for hovered state.
   *
   * inverts to 3
   */
  10: Shade;

  /**
   * Usecase: Low-contrast text.
   *
   * inverts to 2
   */
  11: Shade;

  /**
   * Usecase: High-contrast text.
   *
   * inverts to 1
   */
  12: Shade;
};

export type Theme = {
  shades: Record<string, ColorScale>;
  neutralGray: Record<
    number,
    Omit<
      Shade,
      "saturated" | "darkSaturated" | "alphaSaturated" | "darkAlphaSaturated"
    >
  >;
};

export type ShadersFactory = () => Theme;

export type ShaderPlugin = (
  shaderFactor: ShadersFactory,
  config?: ShaderPluginConfig
) => ReturnType<typeof plugin>;

export type ShaderPluginConfig = {
  /**
   * @default false
   * @description If true, will remove tailwind's default colors.
   */
  removeTailwindDefaultColors?: boolean;

  /**
   * @default true
   * @description If true, will create tailwind colors from the shader's colors.
   *
   * @example a base color of red will create a tailwind colors of red-{1-12}
   */
  createTailwindColors?: boolean;
};
