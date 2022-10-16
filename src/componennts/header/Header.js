import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';


const Header = () => {

     const { logOut, user } = useContext(AuthContext);

     const handleLogOut = () => {
          logOut()
               .then(() => { })
               .catch(error => console.error(error));

     }

     return (
          <div>
               <div className="navbar bg-primary text-primary-content flex justify-around">
                    <div>
                         <a className="btn btn-ghost normal-case text-xl">AN Center</a>
                    </div>

                    <div className=''>
                         <Link className="btn btn-ghost  normal-case text-xl" to="home">Home</Link>
                         <Link className="btn btn-ghost normal-case text-xl" to="orders">Orders</Link>

                         {
                              user?.email ?
                                   <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log Out</button>
                                   :

                                   <Link to='/login'>
                                        <button onClick={handleLogOut} className="btn btn-ghost normal-case text-xl">Log In</button>
                                   </Link>
                         }
                    </div>
               </div>
               </div>
     );
};

export default Header;