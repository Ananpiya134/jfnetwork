import { cn } from "@/utils/cn";

import type { BadgeProps } from "./types";

const Badge = ({ className = "", ...props }: BadgeProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn("bg-grey-700 px-2.5 pt-1 pb-1.5 rounded-full", className)}
    />
  );
};

export default Badge;
