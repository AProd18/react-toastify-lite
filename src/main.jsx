import ReactDOM from "react-dom/client";
import { ToastProvider, toast } from "../src";

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
  <ToastProvider position="center">
    <App />
  </ToastProvider>
);
