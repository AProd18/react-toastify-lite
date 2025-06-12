# react-toastify-lite

Lightweight, customizable toast notification system for React with no external dependencies (except React).  
Designed to be simple, flexible, and minimal.

## Features

- Success, error, warning, info toast types
- Custom position (`top-left`, `top-right`, `bottom-center`, etc.)
- Auto-dismiss with customizable duration
- Manual dismiss with close button
- Animations (`slide`, `bounce`, `zoom`)
- Custom icons per toast type
- Fully controlled via global `toast()` function
- Accessible by default (aria-live)

## Installation

```bash
npm install react-toastify-lite

```

## Basic Usage

```jsx
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
```

## API Reference

toast({ type, message, duration })

| Prop       | Type   | Required | Description                                              |
| ---------- | ------ | -------- | -------------------------------------------------------- |
| `type`     | string | No       | One of: `success`, `error`, `warning`, `info`, `default` |
| `message`  | string | Yes      | Text to display in the toast                             |
| `duration` | number | No       | Auto-dismiss time in milliseconds (default: `1000`)      |

<ToastProvider />
Wrap your application with `ToastProvider`.

| Prop        | Type   | Default        | Description                                                       |
| ----------- | ------ | -------------- | ----------------------------------------------------------------- |
| `position`  | string | `bottom-right` | Position of the toast container. See supported positions.         |
| `icons`     | object | `{}`           | Custom icons per toast type. E.g. `{ success: () => <MyIcon /> }` |
| `animation` | string | `fade`         | Animation type: `fade`, `slide`, `bounce`, `zoom`                 |

Supported position values:

- top-left

- top-right

- top-center

- bottom-left

- bottom-right

- bottom-center

- center

## Advanced Options

Custom Icons

```jsx
const MyIcons = {
  success: () => <span style={{ color: "green" }}>✔️</span>,
  error: () => <span style={{ color: "red" }}>❌</span>,
};

<ToastProvider icons={MyIcons}>
  <App />
</ToastProvider>;
```

Custom Duration

```jsx
toast({ type: "error", message: "Something went wrong", duration: 5000 });
```

Animation Types

```jsx
<ToastProvider animation="slide">...</ToastProvider>
```

Positions

```jsx
<ToastProvider position="bottom-left">...</ToastProvider>
```

## Tips

- You don’t need to use useContext or useRef to show a toast — just call toast() from anywhere after ToastProvider is mounted.
- You can set duration: 0 to disable auto-dismiss and manually close toasts via the × button.

## 🤝 Contributing

Contributions are welcome!  
If you'd like to help improve **toastify-lite-react**, feel free to open issues or submit pull requests.
