import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import { AuthContext } from '../../Context/UserContext';

const Register = () => {

     const { createUser, signInWIthGoogle } = useContext(AuthContext);
     // const [error, setError] = useState();
     const navigate = useNavigate();
     const MySwal = withReactContent(Swal)
     // console.log(createUser);
     const handleSubmit = (e) => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(name, email, password);
          createUser(email, password)
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    form.reset()
                    navigate('/home')


                    MySwal.fire({
                         title: <strong>CONGRATULATION " {name} "!!</strong>,
                         html: <h3>Your Registration Successfully</h3>,
                         icon: 'success'
                    })
               })
               .catch(error => {
                    console.error(error);
                   
               })

     };

     const handleSignIn = () => {
          signInWIthGoogle()
               .then(result => {
                    const user = result.user;
                    console.log(user);
                    navigate('/home')
               })
               .catch(error => {
                    console.error(error);

               });

     }


     return (
          <div>
               <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                         <div className="text-center lg:text-left">
                              <img src="https://cdni.iconscout.com/illustration/premium/thumb/social-media-signup-4489359-3723266.png" alt="" className='w-full' />
                         </div>
                         <div className="card flex-shrink-0 w-full max-w-sm shadow-3xl    bg-base-100">
                              <div className="card-body">
                                   <div>
                                        <h1 className="text-3xl font-bold text-center">Please Register!</h1>
                                   </div>

                                   <form onSubmit={handleSubmit} >

                                        <div className="form-control">
                                         
                                             <label className="label">
                                                  <span className="label-text">Username</span>
                                             </label>
                                             <input type="text" placeholder="Username" name='name' className="input input-bordered" required />
                                        </div>
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
                                             <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                             <label className="label">
                                                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                                  <Link to="/login"> <a className=' m-5 link text-light' href="">Already have account?</a></Link>
                                             </label>
                                        </div>
                                        <div className="form-control mt-6">
                                             <button className="btn btn-primary">Register</button>
                                        </div>
                                        <div>
                                             <h2 className='text-1xl text-light m-3'>Sign In With</h2>
                                             <button onClick={handleSignIn} class="btn btn-active btn-block btn-primary">Google</button>
                                        </div>
                                   </form>

                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Register;