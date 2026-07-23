import { ToastItem } from "./toast.types";
import { useToastStore } from "./toastStore";

function createToast(
  toast: Omit<ToastItem, "id">
) {
  useToastStore.getState().addToast({
    id: crypto.randomUUID(),
    ...toast,
  });
}

export const toast = {
  success(title: ToastItem["title"], description?: ToastItem["description"]) {
    createToast({
      variant: "success",
      title,
      description,
    });
  },

  error(title: ToastItem["title"], description?: ToastItem["description"]) {
    createToast({
      variant: "error",
      title,
      description,
    });
  },

  warning(title: ToastItem["title"], description?: ToastItem["description"]) {
    createToast({
      variant: "warning",
      title,
      description,
    });
  },

  info(title: ToastItem["title"], description?: ToastItem["description"]) {
    createToast({
      variant: "info",
      title,
      description,
    });
  },

  custom(toast: Omit<ToastItem, "id">) {
    createToast(toast);
  },

  dismiss(id: string) {
    useToastStore.getState().removeToast(id);
  },

  dismissAll() {
    useToastStore.getState().clearToasts();
  },
};