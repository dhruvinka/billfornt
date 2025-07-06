import React from 'react';
import './Menubar.css'; // Assuming you have a Menubar.css file for styles
import { Link } from 'react-router-dom';

function Menubar() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <a className="navbar-brand" href="#">
          <img
            src="https://www.svgrepo.com/show/303109/adobe-xd-logo.svg"
            alt="Logo"
            height={40}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse p-2" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/items">
                Manage Item
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Manage Category
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Manage Users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export default Menubar;
