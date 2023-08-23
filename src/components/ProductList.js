import React from "react";
import Card from "./Card";

const ProductList = ({ products, marginTop }) => {
	return (
		<div className="product-list" style={{ marginTop: `${marginTop}px` }}>
			{products.length ? (
				products.map((product) => <Card product={product} key={product.id} />)
			) : (
				<p className="empty-p">No product</p>
			)}
		</div>
	);
};

export default ProductList;
