import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import LandingPage from './LandingPage';
import ProductListing from './ProductListing';
import ShoppingCart from './ShoppingCart';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
};

export default App;