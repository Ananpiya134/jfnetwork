import { Slot } from "@radix-ui/react-slot";

import { cn } from "@utils/cn";

import type { TypographyProps } from "./types";
import { getDefaultHtmlTag } from "./helpers";

const Typography = ({
  variant,

  asChild = false,
  className = "",
  style = {},
  ...props
}: TypographyProps): JSX.Element => {
  const defaultHtmlTag = getDefaultHtmlTag(variant);
  const Component = asChild ? Slot : defaultHtmlTag;

  return (
    <Component
      {...props}
      className={cn(
        "font-normal tracking-default",
        {
          "font-manrope text-sm font-extrabold": variant === "header",
          "font-epilogue text-base leading-5 font-bold xl:font-manrope xl:text-sm":
            variant === "name",
          "text-xs xl:text-sm font-medium font-manrope": variant === "content",
          "font-manrope font-semibold text-xs": variant === "date",
        },
        className
      )}
      style={style}
    />
  );
};

export default Typography;
