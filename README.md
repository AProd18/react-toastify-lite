# react-toastify-lite

🚀 Lightweight toast notification library for React.

No external dependencies. Simple API. Fully customizable.

## ✨ Features

- ✅ Success, error, warning, info toast types
- ✅ Custom position (`top-left`, `top-right`, `bottom-center`, etc.)
- ✅ Auto-dismiss with customizable duration
- ✅ Manual dismiss with close button
- ✅ Animations (`slide`, `bounce`, `zoom`)
- ✅ Custom icons per toast type
- ✅ Fully controlled via global `toast()` function
- ✅ Accessible by default (aria-live)

---

## 📦 Installation

```bash
npm install react-toastify-lite

```

## 🧠 Basic Usage

`````jsx
import ReactDOM from "react-dom/client";
import { ToastProvider, toast } from "react-toastify-lite";

function App() {
  return (
    <div>
      <button onClick={() => toast({ type: "success", message: "Saved!" })}>
        Show Toast
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ToastProvider position="top-right">
    <App />
  </ToastProvider>
);


## ⚙️ Advanced Options

#✅ Custom Icons
````jsx
const MyIcons = {
  success: () => <span>✅</span>,
  error: () => <span>🔥</span>,
  warning: () => <span>⚠️</span>,
  info: () => <span>ℹ️</span>,
};
````jsx
<ToastProvider icons={MyIcons}>...</ToastProvider>

#⏱️ Custom Duration
````jsx
toast({ type: "error", message: "Something went wrong", duration: 5000 });

#✨ Animation Types
````jsx
<ToastProvider animation="slide">...</ToastProvider>

#📍 Positions
````jsx
<ToastProvider position="bottom-left">...</ToastProvider>
<<<<<<< HEAD
`````

## 🧩 API

### `ToastProvider` Props

=======

## 🧩 API

### `ToastProvider` Props

> > > > > > > 95572b0b0a31f4f0d4ddb00ccb022792daf1be3b
> > > > > > > | Prop | Type | Default | Description |
> > > > > > > | ----------- | ------ | ----------- | -------------------------------- |
> > > > > > > | `position` | string | `top-right` | Toast placement |
> > > > > > > | `icons` | object | Built-in | Custom React components per type |
> > > > > > > | `animation` | string | `fade` | Animation type |

### `toast(options)`

<<<<<<< HEAD

=======

> > > > > > > 95572b0b0a31f4f0d4ddb00ccb022792daf1be3b
> > > > > > > | Prop | Type | Required | Description |
> > > > > > > | ---------- | ------ | -------- | ----------------------------------------- |
> > > > > > > | `type` | string | No | `success`, `error`, `warning`, `info` |
> > > > > > > | `message` | string | Yes | Message to display |
> > > > > > > | `duration` | number | No | Auto-close time in ms (0 = no auto close) |

<<<<<<< HEAD

## 📁 File Size

- Minified ~4KB
- # Gzipped ~2KB

## 📁 File Size

- Minified ~4KB
- Gzipped ~2KB
  > > > > > > > 95572b0b0a31f4f0d4ddb00ccb022792daf1be3b

## 📃 License

## 🧪 Coming Soon

<<<<<<< HEAD

- Dark mode support
- Queueing multiple toasts
- # Progress bars
- Dark mode support
- Queueing multiple toasts
- Progress bars

```
>>>>>>> 95572b0b0a31f4f0d4ddb00ccb022792daf1be3b
```
