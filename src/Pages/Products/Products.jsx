import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');
    const [brand, setBrand] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        fetchProducts();
    }, [page, searchQuery, category, brand, priceRange, sortOption]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/allProducts', {
                params: {
                    page,
                    search: searchQuery,
                    category,
                    brand,
                    priceRange,
                    sort: sortOption,
                },
            });
            setProducts(response.data.products);
            console.log('here is product', products)
        } catch (error) {
            console.error('Failed to fetch products', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="input input-bordered w-full max-w-xs"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select
                    className="select select-bordered ml-2"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="date-desc">Newest first</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(product => ( 
                    <div key={product._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={product.productImage} alt={product.productName} className="w-full h-48 object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.productName}</h2>
                            <p>{product.description}</p>
                            <div className='grid grid-cols-2'>
                                <p>{product.category}</p>
                                <p>Price: ${product.price}</p>
                            </div>
                            <div className='grid grid-cols-2'>
                                <p>Rating: {product.ratings}</p>
                                <p>{product.productCreationDate}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-6">
                <button
                    className="btn btn-outline"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    className="btn btn-outline ml-2"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Products;
