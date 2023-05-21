import React from 'react';

const Tabularrow = ({ toys }) => {
  const { toyname, sellername, selleremail, subcategory, price, rating, availablequantity, url } = toys;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        
          <div className="avatar">
            <div className="rounded w-24 h-12">
              <img src={url} alt="Avatar Tailwind CSS Component" />
            </div>
         
         
        </div>
      </td>
      <td>{toyname}</td>
      <td>{sellername}</td>
      <td>{selleremail}</td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{availablequantity}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default Tabularrow;
