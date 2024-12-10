import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { fetchProducts } from '../api';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const data = await fetchProducts();
            setProducts(data);
        };
        getProducts();
    }, []);

    return (
        <div className="homepage">
            <h1>Food Items</h1>
            <div className="products-grid">
                {products.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
        </div>
    );
};

export default HomePage;
