// src/Card.jsx
import React from 'react';
 // Optional: for styling

const Card = ({ image, description, link }) => {
  return (
    <div className="card" onClick={() => window.location.href = link}>
      <img src={image} alt={description} className="card-image" />
      <div className="card-content">
      </div>
    </div>
  );
};

export default Card;
