import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tabularrow from './Tabularrow';

const AllToy = () => {
  const toys = useLoaderData();
  

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Toyname</th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Subcategory</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Available Quantity</th>
              <th>Detail</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <Tabularrow key={toy._id} toys={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToy;
