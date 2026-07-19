import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../../utils";

const buttonVariants = cva(
  `inline-flex text-sm items-center justify-center rounded-sm px-4 py-2 h-8 font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg]:size-4`,
  {
    variants: {
      variant: {
        primary: "bg-[#7C3AED] text-white hover:bg-[#6D28D9]",

        ghost: "bg-transparent text-black hover:bg-gray-300",

        outline:
          "border border-[#7C3AED] bg-transparent text-[#7C3AED] hover:text-white hover:bg-[#7C3AED]",

        danger: "bg-red-600 text-white hover:bg-red-700",

        "danger-outline":
          "border border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
}