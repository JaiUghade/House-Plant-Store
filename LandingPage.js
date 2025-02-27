import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + '/background.jpg'})`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1 style={{ fontSize: '54px', color: 'black' }}>Welcome to GreenHouse</h1>
      <p style={{ fontSize: '30px', color: 'black' }}>Your one-stop shop for beautiful houseplants.</p>
      <Link to="/products">
        <button
          style={{
            padding: '15px 30px', // Increased button size
            fontSize: '24px', // Increased font size
            backgroundColor: '#90EE90', // Light green background
            color: '#000000', // Black text
            border: 'none', // Remove default border
            borderRadius: '8px', // Rounded corners
            cursor: 'pointer', // Show pointer on hover
            transition: 'background-color 0.3s', // Smooth hover effect
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add shadow
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#76c776')} // Darker green on hover
          onMouseOut={(e) => (e.target.style.backgroundColor = '#90EE90')} // Restore light green
        >
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default LandingPage;