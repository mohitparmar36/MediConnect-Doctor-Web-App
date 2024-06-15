import React from "react";
import 'antd/dist/antd.min.css'
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const root = ReactDOM.createRoot(document.getElementById("root"));

Kommunicate.init("f459c6cf8c33e73d73a6338d21626ece", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


reportWebVitals();
