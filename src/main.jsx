import ReactDOM from "react-dom/client";
import { ToastProvider, toast } from "../src";

const MyIcons = {
  success: () => <span style={{ color: "green" }}>✔️</span>,
  error: () => <span style={{ color: "red" }}>❌</span>,
  warning: () => <span style={{ color: "orange" }}>⚠️</span>,
  info: () => <span style={{ color: "blue" }}>ℹ️</span>,
};

function App() {
  return (
    <div>
      <button
        onClick={() =>
          toast({
            type: "success",
            message: "Saved!",
            duration: 3000,
            dedupe: true,
          })
        }
      >
        Show Success Toast
      </button>
      <button
        onClick={() =>
          toast({
            type: "error",
            message: "Error!",
            duration: 5000,
            dedupe: true,
          })
        }
      >
        Show Error Toast 5s
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider position="center" icons={MyIcons} animation="slide">
    <App />
  </ToastProvider>
);
