import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import img from '../../assets/images/freshcart.webp';
import { userContext } from '../../context/userContext';
import { cartContext } from '../../context/cartContext';
import './Navbar.module.css'; 

export default function Navbar() {
  let navigate = useNavigate();
  let { isLogin, setLogin } = useContext(userContext);
  let { cartNumber } = useContext(cartContext);

  function logOut() {
    localStorage.removeItem('userToken');
    setLogin(null);
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar shadow-sm sticky-top">
      <div className="container">
        {/* Logo and Brand */}
        <NavLink to="" className="navbar-brand d-flex align-items-center">
          <img src={img} width="40" alt="FreshCart" className="me-2" />
          <span className="brand-text">FreshCart</span>
        </NavLink>
        
        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Navigation Links */}
          {isLogin && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink 
                  to="" 
                  className={({ isActive }) => 
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="brands" 
                  className={({ isActive }) => 
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Brands
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="carts" 
                  className={({ isActive }) => 
                    isActive ? "nav-link active cart-link" : "nav-link cart-link"
                  }
                >
                  Cart
                  {cartNumber > 0 && (
                    <span className="cart-badge">{cartNumber}</span>
                  )}
                </NavLink>
              </li>
            </ul>
          )}
          
          {/* Right Side - Auth and Social */}
          <ul className="navbar-nav ms-auto">
            {!isLogin ? (
              <>
                <li className="nav-item">
                  <NavLink 
                    to="register" 
                    className={({ isActive }) => 
                      isActive ? "nav-link active auth-link" : "nav-link auth-link"
                    }
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink 
                    to="login" 
                    className={({ isActive }) => 
                      isActive ? "nav-link active auth-link" : "nav-link auth-link"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button onClick={logOut} className="nav-link logout-btn">
                  <i className="fas fa-sign-out-alt me-1"></i> Logout
                </button>
              </li>
            )}
            
            {/* Social Icons */}
            <li className="nav-item d-flex align-items-center social-icons">
              <a href="#" className="nav-link social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="nav-link social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="nav-link social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}