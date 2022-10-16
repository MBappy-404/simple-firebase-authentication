import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

     const {signIn} = useContext(AuthContext);
     const navigate = useNavigate();
     const MySwal = withReactContent(Swal);

     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          console.log(email, password);

          signIn(email, password)
          .then(result=>{
               const user = result.user;
               console.log(user);
               form.reset();
               navigate('/home')

               MySwal.fire({
                    title: <strong>Log In SuccessFully</strong>,
                    html: <h5>WELCOME</h5>,
                    icon: 'success'
                  })
              
          })
          .catch(error => console.error(error))

     }
     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse ">
                         <div className="text-center lg:text-left">
                             <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-showing-user-login-page-in-website-or-application-1886527-1597938.png" className='w-full' alt="" />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                         <h1 className="text-3xl mt-4 font-bold">Please Login now!</h1>
                              <div className="card-body">
                                   <form onSubmit={handleSubmit}>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Email</span>
                                             </label>
                                             <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                             <label className="label">
                                                  <span className="label-text">Password</span>
                                             </label>
                                             <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                             <label className="label">
                                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                  <Link to="/register"> <a className='text-light m-5 ' href="">Haven't account?</a></Link>
                                             </label>
                                        </div>
                                        <div className="form-control mt-6">
                                             <button className="btn btn-primary">Login</button>

                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;