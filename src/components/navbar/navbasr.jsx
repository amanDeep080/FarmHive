import React from "react";
import logo from "../../assets/farmhive-logo.png";

function Navbar() {
  const menu = ["Home", "Products", "Cart", "About", "Contact"];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center fw-bold fs-3 text-warning" href="#">
          <img
            src={logo}
            alt="FarmHive Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          FarmHive
        </a>

        {/* toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* Menu items */}
            {menu.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link fs-5 mx-2" href="#">
                  {item}
                </a>
              </li>
            ))}

            {/* Login button — MUST be inside <li> */}
            <li className="nav-item">
              <button className="btn btn-warning ms-3 px-4 fw-semibold">
                Login
              </button>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
