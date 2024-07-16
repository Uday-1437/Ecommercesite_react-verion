// Importing necessary libraries and components
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Defining the Cart component
function Cart() {
  const [product, setProduct] = useState({});
  const { id } = useParams()

  useEffect(() => {
    getProduct()

  }, [])

  const getProduct = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    setProduct(data)
  }

  return (
    <div className="cart">
      {
        Object.keys(product).length > 0 ? (
          <div className='row'>
            <div >
              <img src={product.image} alt={product.titile} />
            </div>
            <div>
              <h4> {product.titile}</h4>
              <p> {product.description}</p>
            </div>
          </div>
        ) : null

      }
    </div>
  );
}

export default Cart;