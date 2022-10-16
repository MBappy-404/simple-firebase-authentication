import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Home = () => {

     const { user } = useContext(AuthContext);
     return (
          <div>



<div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-center text-success font-bold">Welcome</h1>
      <h1 className=" text-xl text-center text-white font-bold"> "{user?.email}"</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

               {/* <h1 className='text-2xl text-indigo-300 text-center m-20'> Welcome "{user?.email}"</h1>
               <p>Have a Nice Day
                    <label className="swap swap-flip text-9xl">
                         <input type="checkbox" />
                         <div className="swap-on">😈</div>
                         <div className="swap-off">😇</div>
                    </label>
               </p> */}
          </div>
     );
};

export default Home;