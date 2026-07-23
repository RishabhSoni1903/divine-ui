import { cva } from "class-variance-authority";

export const toastVariants = cva(
  `
    relative
    flex
    items-start
    gap-3

    rounded-lg
    border

    p-4

    shadow-lg

    transition-all
    duration-300

    animate-in
    fade-in
    slide-in-from-right-5
  `,
  {
    variants: {
      variant: {
        success:
          "border-green-200 bg-green-50 text-green-900",

        error:
          "border-red-200 bg-red-50 text-red-900",

        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-900",

        info:
          "border-blue-200 bg-blue-50 text-blue-900",
      },
    },

    defaultVariants: {
      variant: "info",
    },
  }
);