// import { expect, test } from "vitest";
// import { hexToRGB, hexToRGBA, isHexAlphaColor, isHexNonAlphaColor } from "../utils";

// test("hexToRGBA", () => {
//   expect(hexToRGBA("#00000000")).toEqual({
//     r: 0,
//     g: 0,
//     b: 0,
//     a: 0,
//   });

//   expect(hexToRGB("#ffffff")).toEqual({
//     r: 255,
//     g: 255,
//     b: 255,
//   });
// });

// test("isHexNonAlphaColor", () => {
//   expect(isHexNonAlphaColor("#ff00af")).toEqual(true);
//   expect(isHexNonAlphaColor("#a00")).toEqual(true);
//   expect(isHexNonAlphaColor("#a40a")).toEqual(false);
//   expect(isHexNonAlphaColor("#000000aa")).toEqual(false);
//   expect(isHexNonAlphaColor("#111111111")).toEqual(false);
//   expect(isHexNonAlphaColor("#zzzzzz")).toEqual(false);
// });

// test("isHexAlphaColor", () => {
//   expect(isHexAlphaColor("#000000ff")).toEqual(true);
//   expect(isHexAlphaColor("#000000")).toEqual(false);
//   expect(isHexAlphaColor("#000000aa")).toEqual(true);
//   expect(isHexAlphaColor("#1234")).toEqual(true);
//   expect(isHexAlphaColor("#111111111")).toEqual(false);
// });
