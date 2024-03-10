import { extendTailwindMerge } from "tailwind-merge";

export const customTailwindMerge = extendTailwindMerge({
  classGroups: {
    fontSize: [
      {
        text: [],
      },
    ],
  },
});
