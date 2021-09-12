import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TO-DO List
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " exact to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <Link to="/addtodo">
              <button className="btn btn-success btn-sm">add To-Do</button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
