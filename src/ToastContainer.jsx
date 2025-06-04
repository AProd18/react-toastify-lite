import "./styles.css";

export default function ToastContainer({
  toasts,
  position,
  onRemove,
  icons = {},
}) {
  function getIcon(type) {
    if (icons[type]) {
      const IconComponent = icons[type];
      return <IconComponent />;
    }

    switch (type) {
      case "success":
        return "✔️";
      case "error":
        return "❌";
      case "warning":
        return "⚠️";
      case "info":
        return "ℹ️";
      default:
        return "";
    }
  }

  return (
    <div className={`rtl-toast-container rtl-toast-container-${position}`}>
      {toasts.map((toast) => (
        <div key={toast.id} className={`rtl-toast rtl-${toast.type}`}>
          <span className="rtl-toast-icon">{getIcon(toast.type)}</span>
          <span className="rtl-toast-message">{toast.message}</span>
          <button
            className="rtl-toast-close"
            onClick={() => onRemove(toast.id)}
            aria-label="Close toast"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
