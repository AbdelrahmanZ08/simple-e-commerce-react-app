const useMirroredCart = (products, cart) => {
	// const [mirroredProducts, setmirroredProducts] = useState([]);
	const withQuantityInitialised = products.map((product) => {
		return { ...product, quantity: 0 };
	});

	const productsUpdated = withQuantityInitialised.map((product) => {
		let presentProduct = cart.find((cartProduct) => cartProduct.id === product.id);
		return presentProduct ? presentProduct : product;
	});

	return productsUpdated;
};

export default useMirroredCart;
