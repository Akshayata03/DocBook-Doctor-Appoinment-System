import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout}) {
   const navigate = useNavigate();

   const logoutHandler = () => {
    handleLogout();
    navigate('/');
   };

  return (
    <div className="navbar">
            <div className="name">
             DocBook
        </div>
        <div className="item">
            <ul>
                <li><Link to='./'>Home</Link></li>
                <li><Link to='./'>Contact</Link></li>
                <li><Link to='./Show'>Show</Link></li>
            </ul>
            { isLoggedIn ? (
                <button id="b2" onClick={logoutHandler}>
                  Logout
                  </button>
              ) : (
                <>
                  <button id="b2">
          <Link to='/Login'>Login</Link>
          </button>             
        <button id="b1">
          <Link to='/SignUp'>SignUp</Link>
          </button>
                </>
              )
            }
        
        </div>
      </div>
    );
};
  

export default Navbar