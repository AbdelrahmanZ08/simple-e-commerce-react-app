import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import History from "./pages/History";
import { CartContext } from "./context/cartContext";
import useMirroredCart from "./hooks/useMirroredCart";
import { HistoryContext } from "./context/historyContext";

const App = () => {
	const [products, setProducts] = useState([]);
	const [allProducts, setAllProducts] = useState([]);
	const { cart, cartDispatch } = useContext(CartContext);
	const { history, historyDispatch } = useContext(HistoryContext);

	const mirroredProducts = useMirroredCart(products, cart);
	// const [productsToDisplay, setProductsToDisplay] = useState(mirroredProducts);

	useEffect(() => {
		console.log("useEffectRan in App");
		const fetchProducts = async () => {
			const response = await axios.get("http://localhost:8000/products");
			console.log("response.data", response.data);
			const fetchedProducts = response.data;

			setProducts(fetchedProducts);
			console.log("fetchedProducts", fetchedProducts);
			setAllProducts(fetchedProducts);
		};

		const fetchHistory = async () => {
			const response = await axios.get("http://localhost:8000/history");
			console.log("response.data history", response.data);
			if (response.data.length) historyDispatch({ type: "INITIALISE", payload: response.data });
		};

		fetchProducts();
		fetchHistory();
	}, []);

	return (
		<BrowserRouter>
			<NavBar />
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={<Home products={mirroredProducts} setProducts={setProducts} allProducts={allProducts} />}
					/>
					<Route path="/cart" element={<Cart />} />
					<Route path="/history" element={<History />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
