import React, { useMemo } from "react";
import Card from "../components/Card";
import axios from "axios";
import ProductList from "../components/ProductList";

const Home = ({ products, setProducts, allProducts }) => {
	const handleSearch = async (e) => {
		let term = e.target.value;
		if (term.length > 3) {
			const response = await axios.get(`http://localhost:8000/products/?q=${term}`);
			setProducts(response.data);
		} else {
			setProducts(allProducts);
		}
	};

	return (
		<div className="home">
			<input type="text" onChange={handleSearch} placeholder="Search for product by name" id="search" />
			{products.length ? <ProductList products={products} marginTop={35} /> : <p className="loading-p">loading...</p>}
		</div>
	);
};

export default Home;
