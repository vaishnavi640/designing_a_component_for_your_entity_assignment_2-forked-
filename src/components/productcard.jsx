// write product card here

// productcard.jsx
import React from 'react';
import '../App.css'; // Import the CSS file for styling
import ViewProductButton from './button'; // Import the ViewProductButton component

const ProductCard = () => {
  // Static dummy data for product details
  const productImage = "https://m.media-amazon.com/images/I/71pI2i8Yh9L.jpg"; // Placeholder image URL
  const productName = "iphone 15-case";
  const productPrice = "$100";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-card__image" />
      <div className="product-card__details">
        <h2 className="product-card__name">{productName}</h2>
        <p className="product-card__price">{productPrice}</p>
        <ViewProductButton /> {/* Using the ViewProductButton component here */}
      </div>
    </div>
  );
};

export default ProductCard;

