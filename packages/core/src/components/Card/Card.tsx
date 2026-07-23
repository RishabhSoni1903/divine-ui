import { cva } from "class-variance-authority";
import { forwardRef, type HTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

export const cardVariants = cva(
  "rounded-sm shadow-sm border border border-gray-300 bg-white text-slate-950 shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        outlined: "shadow-none",
        elevated: "shadow-lg",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CardProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {};

export function CardHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-4", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-4", className)}
      {...props}
    />
  );
}

export function CardFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 p-4",
        className
      )}
      {...props}
    />
  );
}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

CardRoot.displayName = "Card";

export { CardRoot };
