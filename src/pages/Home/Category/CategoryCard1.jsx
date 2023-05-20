import React from 'react';

const CategoryCard1 = ({ category }) => {
  const { seller, toyName, subCategory, price, availableQuantity, viewDetailsButton } = category;
  
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="/images/bp7.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{seller.name}</h2>
        <h2 className="card-title">{toyName}</h2>
        <h2 className="card-title">{subCategory}</h2>
        <h2 className="card-title">Price: ${price}</h2>
        <h2 className="card-title">Available Quantity: {availableQuantity}</h2>
        <h2 className="card-title">
          <a href={viewDetailsButton} target="_blank" rel="noopener noreferrer">
            View Details
          </a>
        </h2>
     
        <div className="card-actions justify-end">
          <button className="btn btn-warning">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard1;
;