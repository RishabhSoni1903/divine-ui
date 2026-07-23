import { Toast } from "./Toast";
import { useToastStore } from "./toastStore";

export function ToastContainer() {
  const toasts = useToastStore((state) => state.toasts);

  return (
    <div
      className="
        fixed
        top-4
        right-4
        z-9999

        flex
        w-full
        max-w-sm
        flex-col
        gap-3
      "
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
        />
      ))}
    </div>
  );
}