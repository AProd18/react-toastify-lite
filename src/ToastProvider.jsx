import React, { createContext, useState, useCallback } from "react";
import { setToastFunction } from "./toast";
import ToastContainer from "./ToastContainer";

export default function ToastProvider({
  children,
  position = "top-right",
  icons = {},
}) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const validPositions = [
    "top-left",
    "top-right",
    "top-center",
    "bottom-left",
    "bottom-right",
    "bottom-center",
    "center",
  ];

  const addToast = useCallback(({ type, message }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  }, []);

  // Connect the global toast function with the local handler
  setToastFunction(addToast);

  return (
    <>
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        onRemove={removeToast}
        icons={icons}
      />
    </>
  );
}
