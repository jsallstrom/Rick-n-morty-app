import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";

import { StoreProvider } from "./context/Store";

import regeneratorRuntime from "regenerator-runtime"; // For async calls DO NOT REMOVE

import "./styles/style.scss";

import "./firebase/firebase";

const jsx = (
     <StoreProvider>
          <AppRouter />
     </StoreProvider>
);

ReactDOM.render(jsx, document.getElementById("root"));
