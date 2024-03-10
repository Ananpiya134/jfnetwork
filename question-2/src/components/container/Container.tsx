import { cn } from "@/utils/cn";

import type { ContainerProps } from "./types";

const Container = ({
  className = "",
  noPadding = false,
  isFullWidth = false,
  ...props
}: ContainerProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        "container mx-auto px-2.5",
        {
          "mx-0 w-full max-w-none": isFullWidth,
          "p-0": noPadding,
        },
        className
      )}
    />
  );
};

export default Container;
