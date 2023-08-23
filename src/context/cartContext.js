import React from "react";

import { createContext, useReducer } from "react";

export const CartContext = createContext();

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			const product = action.payload;
			product.quantity = 1;
			return [...state, product];

		case "REMOVE":
			return state.filter((product) => product.id !== action.payload.id);

		case "INCREASE":
			return state.map((product) =>
				product.id === action.payload.id ? { ...product, quantity: product.quantity + 1 } : product
			);

		case "DECREASE":
			if (action.payload.quantity === 1) {
				return state.filter((product) => product.id !== action.payload.id);
			} else {
				return state.map((product) =>
					product.id === action.payload.id ? { ...product, quantity: product.quantity - 1 } : product
				);
			}

		case "EMPTY":
			return [];

		default:
			return state;
	}
};

const CartContextProvider = ({ children }) => {
	const [cart, cartDispatch] = useReducer(cartReducer, []);

	return <CartContext.Provider value={{ cart, cartDispatch }}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
