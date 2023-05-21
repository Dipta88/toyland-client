import React from 'react';

const AddAToy = () => {
    return (
      
        <div>
        <h2 className='text-5xl text-center'>Add Your Toys</h2>
        <form className='grid grid-cols-2 gap-4 pl-72 pr-20 mt-10'>
       
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label">
    <span className="label-text text-2xl">Toy Name</span>
  </label>
  <label className="input-group text-xl">
    
    <input type="text" placeholder="Toy Name" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label">
    <span className="label-text text-2xl">Seller Name</span>
  </label>
  <label className="input-group text-xl">
    
    <input type="text" placeholder="Seller Name" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label">
    <span className="label-text text-2xl">Seller Email</span>
  </label>
  <label className="input-group text-xl">
    
    <input type="text" placeholder="Seller Email" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>
        <div>
        
        <div className="form-control text-2xl mt-8">
        <span className="label-text text-2xl">Subcategory</span>
        <div className="input-group text-xl w-3/4">
        
          <select className="select select-bordered text-2xl">
         
            <option disabled selected>Choose Your Category</option>
            <option>Lego City</option>
            <option>Lego Architecture</option>
            <option>Lego Cars</option>
            <option>Lego Star Wars</option>
          </select>
        
        </div>
      </div>

        
        </div>
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label text-2xl">
    <span className="label-text text-2xl">Price</span>
  </label>
  <label className="input-group text-2xl">
    
    <input type="text" placeholder="Price" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label text-2xl">
    <span className="label-text text-2xl">Rating</span>
  </label>
  <label className="input-group text-2xl">
    
    <input type="text text-2xl" placeholder="Rating" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label text-2xl">
    <span className="label-text text-2xl">Available Quantity</span>
  </label>
  <label className="input-group">
    
    <input type="text text-2xl" placeholder="Available Quantity" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>
        <div>
        <div className="form-control text-2xl mt-8">
  <label className="label text-2xl">
    <span className="label-text text-2xl">Detail Description</span>
  </label>
  <label className="input-group-lg text-2xl">
    
    <input type="text" placeholder="Write in 5 words" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
        
        </div>

        <div>
        <div className="form-control text-2xl mt-8 mb-20">
  <label className="label text-2xl">
    <span className="label-text text-2xl">Picture URL link</span>
  </label>
  <label className="input-group-lg text-2xl">
    
    <input type="text" placeholder="URL" className="input input-bordered text-2xl w-3/4" />
  </label>
</div>
<button className="btn btn-warning  w-3/4 h-20 mt-10 ml-72  mb-20 items-center"><h2 className='text-3xl '>Submit</h2></button>

        </div>
        
        </form>
        </div>
    );
};

export default AddAToy;