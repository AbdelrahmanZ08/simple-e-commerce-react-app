import React, { useContext, useEffect } from "react";
import Summary from "../components/Summary";
import { HistoryContext } from "../context/historyContext";
import axios from "axios";

const History = () => {
	const { history, historyDispatch } = useContext(HistoryContext);
	console.log("history", history);

	return (
		<div className="history grid">
			{history.map((h) => (
				<Summary border={true} grid={true} date={h.date} cartProp={h.cart} />
			))}
		</div>
	);
};

export default History;
