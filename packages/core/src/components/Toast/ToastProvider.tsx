import { ReactNode } from "react";
import { ToastContainer } from "./ToastContainer";


interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}