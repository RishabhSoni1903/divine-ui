import { create } from "zustand";
import { ToastItem } from "./toast.types";


interface ToastStore {
  toasts: ToastItem[];

  addToast: (toast: ToastItem) => void;

  removeToast: (id: string) => void;

  clearToasts: () => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],

  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, toast],
    })),

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),

  clearToasts: () =>
    set({
      toasts: [],
    }),
}));