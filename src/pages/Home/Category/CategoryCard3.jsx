import React from 'react';
import bp9 from '../../../../images/bp9.jpg';
const CategoryCard3 = ({ category }) => {
  const { seller, toyName, subCategory, price, availableQuantity, viewDetailsButton } = category;
  
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
      <img src={bp9} alt="bp9"/>
      </figure>
      <div className="card-body">
      <h2 className="card-title text-3xl">{toyName}</h2>
      <h2 className="card-title text-sm">{subCategory}</h2>
        <h2 className="card-title text-x">{seller.name}</h2>
        <h2 className="card-title text-2xl">Price: ${price}</h2>
        <h2 className="card-title text-m">Available Quantity: {availableQuantity}</h2>
        <h2 className="card-title text-sm text-green-600">
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

export default CategoryCard3;
;