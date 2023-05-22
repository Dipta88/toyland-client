import bp1 from '../../../../images/bp1.jpg';
import bp2 from '../../../../images/bp2.jpg';
import bp3 from '../../../../images/bp3.jpg';
import bp4 from '../../../../images/bp4.jpg';
import offer from '../../../../images/offer.jpg';
import welc from '../../../../images/welc.jpg';
import ph1 from '../../../../images/ph1.jpg';
import ph2 from '../../../../images/ph2.jpg';
import ph3 from '../../../../images/ph3.jpg';
import ph4 from '../../../../images/ph4.jpg';
import ph5 from '../../../../images/ph5.jpg';
import ph6 from '../../../../images/ph6.jpg';


const Banner = () => {
    return (
      <div className="pl-36">
        <div className="justify-between"><div className="carousel w-full">
          
        <div id="item1" className="carousel-item w-full">
        <img className="w-full" src={bp1} alt="bp1"/>
        </div>
        <div id="item2" className="carousel-item w-full">
        <img className="w-full" src={bp2} alt="bp2"/>
        </div>
        <div id="item3" className="carousel-item w-full">
        <img className="w-full" src={bp3} alt="bp3"/>
        </div>
        <div id="item4" className="carousel-item w-full">
        <img className="w-full" src={bp4} alt="bp4"/>
        </div>
    </div><div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-2xl">1</a>
            <a href="#item2" className="btn btn-2xl">2</a>
            <a href="#item3" className="btn btn-2xl">3</a>
            <a href="#item4" className="btn btn-2xl">4</a>
        </div>
        <h1 className="text-6xl text-center pt-20 pl-20 pb-10">Welcome to Lego World</h1>
       


        <div className="h-14 bg-gradient-to-r from-cyan-500 to-pink-500 text-black content-center pl-20">
        <h2 className="text-2xl bold pt-5 text-center">Inspire and Develop the Builders of Tomorrow,
        LEGO play starts to release a child’s potential from the moment they pick up their first brick.</h2>
        </div>

        
        

         <div class="flex flex-row">
  <div>
  <h4 className="text-4xl pl-10 mt-20 text-center pl-20">The LEGO History</h4>
         <p className="text-xl center pl-20 pt-4">The name ‘LEGO’ is an abbreviation of the two Danish words “leg godt”, meaning “play well”. It’s our name and it’s our ideal.

         The LEGO Group was founded in 1932 by Ole Kirk Kristiansen. The company has passed from father to son and is now owned by Kjeld Kirk Kristiansen, a grandchild of the founder.
         It has come a long way over the past 90 years - from a small carpenter’s workshop to a modern, global enterprise that is now one of the world’s largest manufacturers of toys.

The LEGO brick is our most important product. We are proud to have been named “Toy of the Century” twice. Our products have undergone extensive development over the years – but the foundation remains the traditional LEGO brick.

The brick in its present form was launched in 1958. The interlocking principle with its tubes makes it unique and offers unlimited building possibilities. It's just a matter of getting the imagination going – and letting a wealth of creative ideas emerge through play.
         
         </p>
  

  </div>
  <div>
  
  <div className="w-3/4 ml-20 mt-20 pb-10 pl-20">
  <img src={offer} alt="offer"/>
  
  </div>
  
</div>


      </div>

      <h2 className="text-6xl ml-64">Special Offer</h2>
      <p className="text-2xl center pl-64 pt-4">Limited Edition Big Bang Theory Set Only for $999. Get special 20% discount on online order.
      
         </p>
         <button className="btn btn-secondary mt-5 ml-64">Order Now</button>

      <div className="w-full ml-64 mt-20 pb-10">
      <img src={welc} alt="welc"/>
        
        </div>

      <h2 className="text-6xl ml-72">Offers End In</h2>
      <div className="justify-center ml-72 ">
        <div className="mt-5 mb-20">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":15}}></span>
        </span>
        days
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":10}}></span>
        </span>
        hours
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":24}}></span>
        </span>
        min
      </div> 
      <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
        <span className="countdown font-mono text-5xl">
          <span style={{"--value":23}}></span>
        </span>
        sec
      </div>

    </div>
    </div>
    </div>


    <div className="stats shadow bg-warning mt-28 text-accent-content align-center ml-72 w-3/4">
  
  <div className="stats stats-vertical lg:stats-horizontal shadow bg-green-600 text-accent-content">
  
  <div className="stat text-accent-content">
    <div className="stat-title text-accent-content">Online Orders</div>
    <div className="stat-value text-accent-content">31K</div>
    <div className="stat-desc text-accent-content">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat text-accent-content">
    <div className="stat-title text-accent-content">New Users</div>
    <div className="stat-value text-accent-content">4,200</div>
    <div className="stat-desc text-accent-content">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat accent-content text-accent-content">
    <div className="stat-title text-accent-content">New Registers</div>
    <div className="stat-value text-accent-content">1,200</div>
    <div className="stat-desc text-accent-content">↘︎ 90 (14%)</div>
  </div>
  </div>
</div>
             

    <h1 className="text-6xl text-center pt-20 pl-20 pb-10">Gallery</h1>

    <div class="grid grid-cols-3 gap-4 pt-20 pl-10 pr-10">
  <div>
  
  <img src={ph1} alt="ph1"/>
        
  </div>
  <div> <img src={ph2} alt="ph2"/>
  </div>
  <div><img src={ph3} alt="ph3"/>
  </div>
  <div><img src={ph4} alt="ph4"/>
  </div>
  <div><img src={ph5} alt="ph5"/>
  </div>
  <div>
  <img src={ph6} alt="ph6"/>
        
  </div>


  
</div>
  
</div>


</div>




    
        
        
       
    

        

        
        
        
       


      
    );
};

export default Banner;