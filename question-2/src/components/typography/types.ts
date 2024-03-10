import { CSSProperties, ReactNode } from "react";

export type TypographyVariant = "header" | "name" | "content" | "date";

export interface TypographyProps {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  variant: TypographyVariant;
  style?: CSSProperties;
}
