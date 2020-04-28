import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { indexReducer } from "./reducers/indexReducer";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(indexReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
