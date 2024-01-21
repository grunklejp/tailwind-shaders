export type RGBA = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export type RGB = {
  r: number;
  g: number;
  b: number;
};

// export function hexToRGBOrRGBA(hex: string): RGBA {
//   const value = hex.substring(1);
//   const intVal = parseInt(hex.replace("#", ""), 16);
//   if (intVal.length === 5) {
//     // #fffa -> #ffffffaa
//     hex = hex.replace(
//       /#([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i,
//       "#$1$1$2$2$3$3$4$4"
//     );
//   }

//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;

//   return {
//     r,
//     g,
//     b,
//   };
// }

// export function hexToRGB(hex: string): RGB {
//   const bigint = parseInt(hex.replace("#", ""), 16);
//   const r = (bigint >> 16) & 255;
//   const g = (bigint >> 8) & 255;
//   const b = bigint & 255;

//   return {
//     r,
//     g,
//     b,
//   };
// }

// export function isHexNonAlphaColor(color: string): boolean {
//   if (color.length === 4) {
//     // #fff -> #ffffff
//     color = color.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i, "#$1$1$2$2$3$3");
//   }

//   if (color.length === 7) {
//     return /^#[0-9A-F]{6}$/i.test(color);
//   }

//   return false;
// }

// export function isHexAlphaColor(color: string): boolean {
//   if (color.length === 5) {
//     // #fffa -> #ffffffaa
//     color = color.replace(
//       /#([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i,
//       "#$1$1$2$2$3$3$4$4"
//     );
//   }

//   return /^#[0-9A-F]{8}$/i.test(color);
// }

// export function expandHex(hex: string) {
//   if (hex.length === 4) {
//     // #fff -> #ffffff
//     return hex.replace(/#([0-9A-F])([0-9A-F])([0-9A-F])/i, "#$1$1$2$2$3$3");
//   }

//   if (hex.length === 5) {
//     // #fffa -> #ffffffaa
//     return hex.replace(
//       /#([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])/i,
//       "#$1$1$2$2$3$3$4$4"
//     );
//   }

//   return hex;
// }

// export function isHex(color: string): boolean {
//   color = expandHex(color);
//   return isHexNonAlphaColor(color) || isHexAlphaColor(color);
// }

// /**
//  * Might be useful in the future
//  */
// // const normalize = (val, max, min) => {
// //   return (val - min) / (max - min);
// // };

// // export const hexToAlpha = (alphaHexString:) => {
// //   return Math.round(normalize(parseInt(alphaHexString, 16), 255, 0) * 100);
// // };
