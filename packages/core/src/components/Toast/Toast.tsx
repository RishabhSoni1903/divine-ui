import { useEffect } from "react";

import {
  CircleCheck,
  CircleAlert,
  CircleX,
  Info,
  X,
} from "lucide-react";

import { Button } from "../Button";

import { cn } from "../../utils";

import { toastVariants } from "./toastVariants";
import { useToastStore } from "./toastStore";
import { ToastItem } from "./toast.types";

const icons = {
  success: CircleCheck,
  error: CircleX,
  warning: CircleAlert,
  info: Info,
};

export function Toast({
  id,
  variant,
  title,
  description,
  duration = 4000,
  action,
}: ToastItem) {
  const removeToast = useToastStore((state) => state.removeToast);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      removeToast(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, removeToast]);

  const Icon = icons[variant];

  return (
    <div className={cn(toastVariants({ variant }))}>
      <div className="mt-0.5 shrink-0">
        <Icon className="size-5" />
      </div>

      <div className="flex flex-1 flex-col">
        <span className="font-medium">
          {title}
        </span>

        {description && (
          <span className="mt-1 text-sm opacity-80">
            {description}
          </span>
        )}

        {action && (
          <Button
            variant="outline"
            className="mt-3 w-fit"
            onClick={action.onClick}
          >
            {action.label}
          </Button>
        )}
      </div>

      <button
        onClick={() => removeToast(id)}
        className="
          rounded-md
          p-1
          transition-colors
          hover:bg-black/10
        "
      >
        <X className="size-4" />
      </button>
    </div>
  );
}