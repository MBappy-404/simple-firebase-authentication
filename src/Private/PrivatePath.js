import React, { useContext } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivatePath = ({ children }) => {
     const MySwal = withReactContent(Swal);
     const { user, loading } = useContext(AuthContext);

     if(loading){

          return <div>loading......</div>

     };
     if (user && user.uid) {
          return children
     }
     return (
          <Navigate to="/login">

               {MySwal.fire({
                    title: <strong>Warning</strong>,
                    html: <h5>You Need First Log In</h5>,
                    icon: 'warning'
               })}

          </Navigate>
     );
};

export default PrivatePath;