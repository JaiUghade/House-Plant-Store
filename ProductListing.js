import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './redux/cartSlice';
import products from './products';

const ProductListing = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Group products by category
  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <h1>Products</h1>
      {Object.entries(groupedProducts).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="row">
            {items.map((product) => (
              <div key={product.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <div
                    style={{
                      height: '200px', // Fixed height for the image container
                      overflow: 'hidden', // Ensure the image doesn't overflow
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f8f9fa', // Light background for better contrast
                    }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{
                        width: '100%', // Make the image fill the container
                        height: '100%', // Make the image fill the container
                        objectFit: 'contain', // Ensure the entire image is visible
                      }}
                    />
                  </div>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.price}</p>
                    <button
                      className="btn btn-primary mt-auto" // Align button to the bottom
                      onClick={() => dispatch(addItem(product))}
                      disabled={cartItems.some((item) => item.id === product.id)}
                    >
                      {cartItems.some((item) => item.id === product.id)
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;