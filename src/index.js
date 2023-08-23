import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CartContextProvider from "./context/cartContext";
import HistoryContextProvider from "./context/historyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<CartContextProvider>
			<HistoryContextProvider>
				<App />
			</HistoryContextProvider>
		</CartContextProvider>
	</React.StrictMode>
);
