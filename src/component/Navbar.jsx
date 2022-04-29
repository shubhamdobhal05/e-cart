import React from "react";
import {NavLink} from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state.handleCart);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
  <div class="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="#">E-Commerce APP</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx   -auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li class="nav-item">
          <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        
        
      </ul>
      <div className="buttons">
            <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-l"></i>Login</NavLink>
            <NavLink to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-l "></i>Register</NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-l "></i> ({state.length})</NavLink>
      </div>

    </div>
  </div>
</nav>
        </div>
    )
}


export default Navbar;