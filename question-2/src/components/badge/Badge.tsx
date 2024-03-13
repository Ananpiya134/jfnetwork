import { cn } from "@/utils/cn";

import type { BadgeProps } from "./types";

const Badge = ({ className = "", ...props }: BadgeProps): JSX.Element => {
  return (
    <div
      {...props}
      className={cn(
        "bg-grey-700 flex justify-center items-center px-2.5 h-6.5 rounded-full",
        className
      )}
    />
  );
};

export default Badge;
