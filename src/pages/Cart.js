import React, { useContext } from "react";
import ProductList from "../components/ProductList";
import Summary from "../components/Summary";
import { CartContext } from "../context/cartContext";
import { HistoryContext } from "../context/historyContext";
import axios from "axios";

const Cart = () => {
	const { cart, cartDispatch } = useContext(CartContext);
	const { history, historyDispatch } = useContext(HistoryContext);

	const handlePay = async () => {
		const date = new Date();
		const cartToSave = { date, cart };
		const response = await axios.post("http://localhost:8000/history", cartToSave);
		historyDispatch({ type: "ADD", payload: response.data });
		cartDispatch({ type: "EMPTY" });
	};

	return (
		<div className="cart">
			<div className="split-column">
				<div className="left-products-list">
					<ProductList products={cart} marginTop={0} />
				</div>
				<div className="right-summary">
					<div className="sticky">
						<h3>Summary</h3>
						<p>
							<Summary />
						</p>
						<button onClick={handlePay} className="pay">
							Pay
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
