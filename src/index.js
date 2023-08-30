import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// -- style
import "core/style/app.css";

// -- App
import App from "presentation/container/app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
