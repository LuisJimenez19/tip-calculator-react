import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./components/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <div className="body">
            <h1 className="title">
                SPLI <br /> TTER
            </h1>
            <App />
        </div>
    </React.StrictMode>
);
