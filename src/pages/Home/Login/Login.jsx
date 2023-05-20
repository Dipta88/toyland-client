import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const { user, logOut, signIn } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    setLoggedIn(false);
  };

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setLoggedIn(true);
        navigate('/');
      })
      .catch(error => console.log(error));
  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold pl-20 pb-6">Join The World Of Lego</h1>
            <div className="w-3/4 ml-24">
              <img src="/images/bp12.jpg" />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text" name="email" placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name="password" placeholder="password" className="input input-bordered" />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input className="btn btn-warning" type="submit" value="Login" />
                </div>
              </form>
              <p className="pt-5">Don't have an account? <Link className="text-yellow-500" to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
