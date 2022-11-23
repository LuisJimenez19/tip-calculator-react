import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { TipContextProvider } from "./context/TipContext";
import "./components/scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TipContextProvider>
            <div className="body">
                <h1 className="title">
                    SPLI <br /> TTER
                </h1>
                <App />
            </div>
        </TipContextProvider>
    </React.StrictMode>
);
