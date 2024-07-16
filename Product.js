
import React, { useEffect, useState } from 'react';

// Defining the Product component
const Product = () => {
    const [products, setProducts] = useState([]);

    // Fetching product data from an API 
    useEffect(() => {
        fetchProduct()
    }, []);
    const fetchProduct = async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
    }

    return (
        <div className='row'>
            {
                products && products.map((product) => (
                    <div className='card mb-4 me-3 mt-3' style={{ width: '19rem' }} key={product.id}>
                        <a href=''>
                            <div className='d-flex justify-content-center'>
                                <img className='card-img-top' src={product.image} alt="..." style={{ width: '200px', height: '250px' }} />
                            </div>
                        </a>
                        <div className='card-body'>
                            <h5 className='card-title'>{product.title}</h5>
                            <b>Price: {product.price}</b>
                            <p className='card-text' style={{ maxHeight: '7.9em', overflow: 'hidden' }}>{product.description}</p>
                            <button className='btn btn-primary' style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)' }}>Add to cart</button>
                        </div>
                    </div>
                ))

            }
        </div>
    );
}

export default Product;
