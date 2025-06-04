let showToast;

export function toast({ type = "default", message = "", duration }) {
  if (showToast) {
    showToast({ type, message, duration });
  } else {
    console.warn("Toast system is not ready yet.");
  }
}

export function setToastFunction(fn) {
  showToast = fn;
}
