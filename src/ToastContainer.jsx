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
    <div
      className={`rtl-toast-container rtl-toast-container-${position}`}
      role="region"
      aria-live="polite"
      aria-atomic="false"
    >
      {toasts.map((toast) => (
        <section
          key={toast.id}
          className={`rtl-toast rtl-${toast.type}`}
          role="alert"
          aria-live={toast.type === "error" ? "assertive" : "polite"}
          aria-atomic="true"
        >
          <span className="rtl-toast-icon">{getIcon(toast.type)}</span>
          <span className="rtl-toast-message">{toast.message}</span>
          <button
            className="rtl-toast-close"
            onClick={() => onRemove(toast.id)}
            aria-label="Close toast"
          >
            ×
          </button>
        </section>
      ))}
    </div>
  );
}
