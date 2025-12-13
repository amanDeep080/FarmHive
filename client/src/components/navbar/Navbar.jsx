import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/farmhive-logo.png";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container-fluid">

        <Link
          className="navbar-brand d-flex align-items-center fw-bold fs-3 text-warning"
          to="/"
        >
          <img
            src={logo}
            alt="FarmHive Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
          FarmHive
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

            <li className="nav-item">
              <Link to="/">
                <button className="btn nav-btn">Home</button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/products">
                <button className="btn nav-btn">Products</button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cart">
                <button className="btn nav-btn">Cart</button>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about">
                <button className="btn nav-btn">About</button>
              </Link>
            </li>

            <li className="nav-item">
              <a href="/contact.html">
                <button className="btn nav-btn">Contact Us</button>
              </a>
            </li>
            {/* Login */}
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

      <style>{`
        .nav-btn {
          background: transparent;
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          font-weight: 600;
        }

        .nav-btn:hover {
          color: #ffc107;
        }

        .theme-toggle {
          background: transparent;
          border: 1px solid #ffc107;
          color: #ffc107;
        }

        .theme-toggle:hover {
          background: #ffc107;
          color: #000;
        }

        body[data-theme="light"] .navbar {
          background-color: #fff !important;
        }

        body[data-theme="light"] .nav-btn {
          color: #000;
        }

        body[data-theme="light"] .nav-btn:hover {
          color: #ffc107;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
