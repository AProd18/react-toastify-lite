import React, { createContext, useState, useCallback, useEffect } from "react";
import { setToastFunction } from "./toast";
import ToastContainer from "./ToastContainer";

export default function ToastProvider({
  children,
  position = "top-right",
  icons = {},
  animation = "fade",
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

  const addToast = useCallback(({ type, message, duration = 1000 }) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);

    if (duration > 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, duration);
    }
  }, []);

  // Connect the global toast function with the local handler
  useEffect(() => {
    setToastFunction(addToast);
  }, [addToast]);

  return (
    <>
      {children}
      <ToastContainer
        toasts={toasts}
        position={position}
        onRemove={removeToast}
        icons={icons}
        animation={animation}
      />
    </>
  );
}
