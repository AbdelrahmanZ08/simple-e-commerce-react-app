import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Summary = ({ date, cartProp, border, grid }) => {
	const { cart, cartDispatch } = useContext(CartContext);
	const theCart = cartProp ?? cart;
	const noProducts = theCart.length;

	const getTime = (date) => {
		date = new Date(date);
		let [hour, minute, second] = date.toLocaleTimeString().split(":");
		let [time, amPm] = date.toLocaleTimeString().split(" ");
		return hour + ":" + minute + " " + amPm;
	};

	return (
		<div className={`summary`} style={border && { border: "1px solid indigo", borderRadius: "10px" }}>
			{date && (
				<p style={{ fontWeight: "bold" }}>
					{new Date(date).toLocaleDateString()} at {getTime(date)}
				</p>
			)}
			<p>{noProducts} different products</p>
			{theCart.map((product) => (
				<p>
					{product.quantity} {product.title}, ${product.price} per unit = ${product.quantity * product.price}
				</p>
			))}

			<p style={{ fontWeight: "bold" }}>
				Total cost: {theCart.reduce((sum, product) => sum + product.quantity * product.price, 0)}
			</p>
		</div>
	);
};

export default Summary;
