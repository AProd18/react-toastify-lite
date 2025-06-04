import "./styles.css";

export default function ToastContainer({ toasts }) {
  return (
    <div className="rtl-toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`rtl-toast rtl-${toast.type}`}>
          {toast.message}
        </div>
      ))}
    </div>
  );
}
