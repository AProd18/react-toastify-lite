import { useState, useCallback, useEffect } from "react";
import { setToastFunction } from "./toast";
import ToastContainer from "./ToastContainer";

export default function ToastProvider({
  children,
  position = "bottom-right",
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

  const finalPosition = validPositions.includes(position)
    ? position
    : "top-right";

  const addToast = useCallback(
    ({ type, message, duration = 1000, dedupe = false }) => {
      const id = Date.now();

      setToasts((prev) => {
        const isDuplicate = dedupe && prev.some((t) => t.message === message);
        if (isDuplicate) return prev;

        return [...prev, { id, type, message, dedupe }];
      });

      if (duration > 0) {
        setTimeout(() => {
          setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
      }
    },
    []
  );

  useEffect(() => {
    setToastFunction(addToast);
  }, [addToast]);

  return (
    <>
      {children}
      <ToastContainer
        toasts={toasts}
        position={finalPosition}
        onRemove={removeToast}
        icons={icons}
        animation={animation}
      />
    </>
  );
}
