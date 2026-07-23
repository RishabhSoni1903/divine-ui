import { ReactNode } from "react";

export type ToastVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastItem {
  id: string;

  variant: ToastVariant;

  title: ReactNode;

  description?: ReactNode;

  duration?: number;

  action?: ToastAction;
}