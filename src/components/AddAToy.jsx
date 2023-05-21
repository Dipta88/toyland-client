
import Swal from 'sweetalert2';

const AddAToy = () => {

  const handleAddToy = event => {
    event.preventDefault();

    const form = event.target;
    const toyname = form.toyname.value;
    const sellername = form.sellername.value;
    const selleremail = form.selleremail.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availablequantity = form.availablequantity.value;
    const url = form.url.value;

    const AddedToys = {
      toyname,
      sellername,
      selleremail,
      subcategory,
      price,
      rating,
      availablequantity,
      url,
    };

    console.log(AddedToys);

    fetch('http://localhost:5000/toys',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(AddedToys)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertId){
         
Swal.fire('Any fool can use a computer')
        

      }
    });
  };

  return (
    <div>
      <h2 className='text-5xl text-center'>Add Your Toys</h2>
      <form onSubmit={handleAddToy} className='grid grid-cols-2 gap-4 pl-72 pr-20 mt-10'>
        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label">
              <span className="label-text text-2xl">Toy Name</span>
            </label>
            <label className="input-group text-xl">
              <input type="text" name="toyname" placeholder="ToyName" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label">
              <span className="label-text text-2xl">Seller Name</span>
            </label>
            <label className="input-group text-xl">
              <input type="text" name="sellername" placeholder="SellerName" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label">
              <span className="label-text text-2xl">Seller Email</span>
            </label>
            <label className="input-group text-xl">
              <input type="text" name="selleremail" placeholder="Seller Email" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label">
              <span className="label-text text-2xl">Subcategory</span>
            </label>
            <label className="input-group text-xl">
              <input type="text" name="subcategory" placeholder="SubCategory" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label text-2xl">
              <span className="label-text text-2xl">Price</span>
            </label>
            <label className="input-group text-2xl">
              <input type="text" name="price" placeholder="Price" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label text-2xl">
              <span className="label-text text-2xl">Rating</span>
            </label>
            <label className="input-group text-2xl">
              <input type="text" name="rating" placeholder="Rating" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label text-2xl">
              <span className="label-text text-2xl">Available Quantity</span>
            </label>
            <label className="input-group">
              <input type="text" name="availablequantity" placeholder="Available Quantity" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8">
            <label className="label text-2xl">
              <span className="label-text text-2xl">Detail Description</span>
            </label>
            <label className="input-group-lg text-2xl">
              <input type="text" name="detail" placeholder="Write in 5 words" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
        </div>

        <div>
          <div className="form-control text-2xl mt-8 mb-20">
            <label className="label text-2xl">
              <span className="label-text text-2xl">Picture URL link</span>
            </label>
            <label className="input-group-lg text-2xl">
              <input type="text" name="url" placeholder="URL" className="input input-bordered text-2xl w-3/4" />
            </label>
          </div>
          <button className="btn btn-warning  w-3/4 h-20 mt-10 ml-72  mb-20 items-center">
            <h2 className='text-3xl '>Submit</h2>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
