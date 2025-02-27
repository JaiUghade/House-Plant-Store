import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand" style={{ fontSize: '30px', fontWeight: 'bold' }}>
          GreenHouse
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link to="/" className="nav-link" style={{ fontSize: '18px' }}>
                Home
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: '20px' }}>
              <Link to="/products" className="nav-link" style={{ fontSize: '18px' }}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link" style={{ fontSize: '18px' }}>
                🛒 Cart ({totalQuantity})
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;