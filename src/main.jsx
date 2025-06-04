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
      <button onClick={() => toast({ type: "success", message: "Saved!" })}>
        Show Success Toast
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider position="center" icons={MyIcons} animation="bounce">
    <App />
  </ToastProvider>
);
