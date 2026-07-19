import { ReactNode } from "react";
import { ButtonProps } from "../Button";
import { X } from "lucide-react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { cn } from "../../utils";

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
  showCloseButton?: boolean;
  width?: number | string;
  height?: number | string;
  closeOnOutsideClick?: boolean;
  closeOnEsc?: boolean;
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  width = 500,
  height = "auto",
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEsc = true,
}: DialogProps) {
  return (
    <RadixDialog.Root open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" />

        <RadixDialog.Content
          onEscapeKeyDown={(e) => {
            if (!closeOnEsc) e.preventDefault();
          }}
          onPointerDownOutside={(e) => {
            if (!closeOnOutsideClick) e.preventDefault();
          }}
          className={cn(
            "fixed left-1/2 top-1/2 z-50",
            "-translate-x-1/2 -translate-y-1/2",
            "rounded-sm bg-white shadow-xl",
            "flex flex-col overflow-hidden",
          )}
          style={{
            width,
            height,
            maxWidth: "95vw",
            maxHeight: "90vh",
          }}
        >
          {(title || description || showCloseButton) && (
            <div className="flex items-start justify-between px-3 pt-3">
              <div className="space-y-1">
                {title && (
                  <RadixDialog.Title className="text-lg font-semibold">
                    {title}
                  </RadixDialog.Title>
                )}

                {description && (
                  <RadixDialog.Description className="text-sm text-gray-500">
                    {description}
                  </RadixDialog.Description>
                )}
              </div>

              {showCloseButton && (
                <RadixDialog.Close asChild>
                  <button className="rounded-md p-1 hover:bg-gray-100">
                    <X className="size-5" />
                  </button>
                </RadixDialog.Close>
              )}
            </div>
          )}

          {children && <div className="flex-1 overflow-auto px-3 pt-3">{children}</div>}

          {footer && <div className="p-3">
            {footer}
          </div>}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
}
