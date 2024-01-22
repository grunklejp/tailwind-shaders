import { useEffect, useRef, useState } from "react";

export function useParentShader<T extends HTMLElement>() {
  const [shader, setShader] = useState<string>();
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current && typeof window !== "undefined") {
      const themeClass = findClosestShaderClass(ref.current) ?? "";
      setShader(themeClass);
    }
  }, [ref]);

  return { ref, parentShaderClassName: shader };
}

function findClosestShaderClass(element: HTMLElement) {
  const elementWithTheme = element.closest("[class*='shader-']");
  const elementWithDarkTheme = element.closest("[class*='dark:shader-']");
  let lightTheme = "";
  let darkTheme = "";
  let hasFlip = false;

  if (elementWithTheme) {
    const classes = Array.from(elementWithTheme.classList);
    lightTheme = classes.find((c) => c.startsWith("shader-")) ?? "";
    classes.find((c) => c == "flip") && (hasFlip = true);
  }

  if (elementWithDarkTheme) {
    const classes = Array.from(elementWithDarkTheme.classList);
    darkTheme = classes.find((c) => c.startsWith("dark:shader-")) ?? "";
    classes.find((c) => c == "flip") && (hasFlip = true);
  }

  return `${darkTheme} ${lightTheme} ${hasFlip ? "flip" : ""}`.trim();
}
