import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    
    setLoggedIn(user !== null);
  }, [user]);

  const handleLogout = () => {
    logOut();
    setLoggedIn(false);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-4xl"><Link to="/">LegoLand</Link></a>
        <div className="w-20 rounded-full">
          <img src="/images/logo.png" alt="Logo" />
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li tabIndex={0}>
            <a>
            <Link to="all-toys">All Toys</Link>
            </a>
            <ul className="p-2 bg-base-100">
              
            </ul>
          </li>
          <li>
            <Link to="mytoys">My Toy</Link>
          </li>
          <li>
            <Link to="/blog">Blogs</Link>
          </li>
          <li>
            <Link to="/addatoy">Add a Toy</Link>
          </li>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/user.png" alt="User" />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                {loggedIn ? (
                  <button onClick={handleLogout}>Logout</button>
                ) : (
                  <Link to="/login">Log In</Link>
                )}
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
