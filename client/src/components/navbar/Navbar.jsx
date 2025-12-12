import React from "react";
import logo from "../../assets/farmhive-logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center fw-bold fs-3 text-warning" href="#home">
          <img
            src={logo}
            alt="FarmHive Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          FarmHive
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

            {/* Home */}
        <li className="nav-item">
              <a href="#Home">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Contact us
              </button>
              </a>
            </li>

            {/* Products */}
        <li className="nav-item">
              <a href="#Products">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Contact us
              </button>
              </a>
            </li>
            {/* Cart */}
        <li className="nav-item">
              <a href="#Cart">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Contact us
              </button>
              </a>
            </li>

            {/* About */}
        <li className="nav-item">
              <a href="#About">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Contact us
              </button>
              </a>
            </li>
            {/* Contact */}
        <li className="nav-item">
              <a href="/contact.html">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Contact us
              </button>
              </a>
            </li>

            {/* Login Button */}
            <li className="nav-item">
            <a href="/login/index.html">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Login
              </button>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
