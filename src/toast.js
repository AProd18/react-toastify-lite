let showToast;

export function toast({ type = "default", message = "" }) {
  if (showToast) {
    showToast({ type, message });
  } else {
    console.warn("Toast system is not ready yet.");
  }
}

export function setToastFunction(fn) {
  showToast = fn;
}
