export const fetchProducts = async () => {
    const response = await fetch('http://localhost:5000/api/products');
    return await response.json();
};
