import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import "../node_modules/aos/dist/aos.js";
import "../node_modules/aos/dist/aos.css";
import "./assests/css/bootstrap.min.css";
import "./assests/css/style.css";


const root = createRoot(document.getElementById("root"));
root.render(<App/>);
    