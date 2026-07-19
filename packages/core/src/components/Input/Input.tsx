import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils";

export const inputVariants = cva(
  "flex h-8 text-sm shrink-0 items-center rounded-sm border bg-background transition-colors px-2 focus-within:ring-0",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted border-transparent",
        outline: "border-input",
        ghost: "border-transparent bg-transparent",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends
    InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
        startAdornment?: ReactNode;
        endAdornment?: ReactNode
    }

export function Input({ variant, className, startAdornment, endAdornment, ...props }: InputProps) {
  return (
    <div className="relative flex items-center">
      {startAdornment && (
        <span className={`absolute left-2 flex items-center  text-muted-foreground [&>svg]:pointer-events-none [&>svg]:shrink-0 [&>svg]:size-4`}>
          {startAdornment}
        </span>
      )}

      <input
        className={cn(
          inputVariants({ variant }),
          startAdornment && "pl-8",
          endAdornment && "pr-8",
          className
        )}
        {...props}
      />

      {endAdornment && (
        <span className={`relative right-6 flex items-center text-muted-foreground [&>svg]:shrink-0 [&>svg]:size-4`}>
          {endAdornment}
        </span>
      )}
    </div>
  );
}
