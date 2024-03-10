import type { TypographyVariant } from "./types";

export const getDefaultHtmlTag = (variant: TypographyVariant): string => {
  switch (variant) {
    case "name":
      return "h6";
    case "content":
    case "date":
    case "header":
      return "p";
    default:
      throw new Error(`Variant:${variant} is not existed`);
  }
};
