import React from "react";

import { createContext, useReducer } from "react";

export const HistoryContext = createContext();

const historyReducer = (state, action) => {
	switch (action.type) {
		case "INITIALISE":
			return [...action.payload];

		case "ADD":
			return [...state, action.payload];

		default:
			return state;
	}
};

const HistoryContextProvider = ({ children }) => {
	const [history, historyDispatch] = useReducer(historyReducer, []);

	return <HistoryContext.Provider value={{ history, historyDispatch }}>{children}</HistoryContext.Provider>;
};

export default HistoryContextProvider;
