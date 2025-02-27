import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, deleteItem, increaseQuantity, decreaseQuantity } from './redux/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className="container mt-4">
      <h1>Shopping Cart</h1>
      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="row">
            <div className="col-md-8">
              {cart.items.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded-start"
                        style={{ height: '150px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">${item.price.toFixed(2)}</p>
                        <div className="d-flex align-items-center">
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                            disabled={item.quantity === 1}
                          >
                            -
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            className="btn btn-outline-secondary btn-sm"
                            onClick={() => dispatch(increaseQuantity(item.id))}
                          >
                            +
                          </button>
                          <button
                            className="btn btn-danger btn-sm ms-3"
                            onClick={() => dispatch(deleteItem(item.id))}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cart Summary</h5>
                  <p>Total Items: {cart.totalQuantity}</p>
                  <p>Total Price: ${cart.totalPrice.toFixed(2)}</p>
                  <button
                    className="btn btn-primary w-100 mb-2"
                    onClick={() => alert('Coming Soon!')}
                  >
                    Checkout
                  </button>
                  <Link to="/products" className="btn btn-outline-secondary w-100">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;