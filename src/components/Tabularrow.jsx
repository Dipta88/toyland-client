
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Tabularrow = ({ toys }) => {
  const { _id, toyname, sellername, selleremail, subcategory, price, rating, availablequantity, url } = toys;


  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
     
       fetch(`https://toyland-server-henna.vercel.app/toys/${_id}`,{
          method: 'DELETE'
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data);
        if(data.deletedCount > 0){
            Swal.fire(
         'Deleted!',
         'Your file has been deleted.',
          'success'
        )

        }
       })
      }
    })

  }
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
        <button className="btn btn-ghost btn-xs"><Link to="/login">Detail</Link></button>
      </th>
      <th>
      <button onClick={()=> handleDelete(_id)} class="btn btn-active btn-accent">Delete</button>
      </th>
    </tr>
  );
};

export default Tabularrow;
