import React, { useContext } from "react";
import { CartContext } from "../context/cartContext";

const Card = ({ product }) => {
	const { title, price, thumbnail } = product;
	const { cart, cartDispatch } = useContext(CartContext);
	return (
		<div className="card">
			<img src={thumbnail} alt={title} />
			<div className="title-price">
				<p>{title}</p> <p>$ {price}</p>
			</div>
			<div className="actions">
				{product.quantity > 0 && (
					<div className="left-action-container">
						<span id="number">{product.quantity}</span>{" "}
						<span className="middle-increase-decrease">
							<span onClick={() => cartDispatch({ type: "INCREASE", payload: product })}>+</span>
							<span onClick={() => cartDispatch({ type: "DECREASE", payload: product })}>-</span>
						</span>
					</div>
				)}{" "}
				{product.quantity > 0 ? (
					<button onClick={() => cartDispatch({ type: "REMOVE", payload: product })}>Remove</button>
				) : (
					<button onClick={() => cartDispatch({ type: "ADD", payload: product })}>Add</button>
				)}
			</div>
		</div>
	);
};

export default Card;
