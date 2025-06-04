import "./styles.css";

export default function ToastContainer({ toasts }) {
  function getIcon(type) {
    switch (type) {
      case "success":
        return "✔️";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      default:
        return "";
    }
  }

  return (
    <div className="rtl-toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`rtl-toast rtl-${toast.type}`}>
          <span className="rtl-toast-icon">{getIcon(toast.type)}</span>
          <span className="rtl-toast-message">{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
