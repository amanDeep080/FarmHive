import React from "react";

function Footer() {
  return (
    <footer
      className="app-footer"
      style={{
        width: "100%",
        marginTop: "50px"
      }}
    >
      <div className="container py-5">

        <div className="row">

          <div className="col-md-4 mb-4">
            <h3 className="fw-bold text-warning">FarmHive</h3>
            <p className="mt-3">
              Your trusted agriculture marketplace delivering quality seeds,
              tools, and farming essentials.
            </p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="text-warning fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"><a href="#" className="text-decoration-none footer-link">Home</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none footer-link">Products</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none footer-link">Categories</a></li>
              <li><a href="#" className="text-decoration-none footer-link">About Us</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="text-warning fw-bold">Contact Us</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">📞 +91 9876543210</li>
              <li className="mb-2">📧 support@farmhive.com</li>
              <li>📍 Phagwara, India</li>
            </ul>
          </div>

          <div className="col-md-3 mb-4">
            <h5 className="text-warning fw-bold">Follow Us</h5>
            <div className="d-flex mt-3">
              <a href="#" className="me-3 text-warning fs-4">🐝</a>
              <a href="#" className="me-3 text-warning fs-4">🌾</a>
              <a href="#" className="text-warning fs-4">📸</a>
            </div>
          </div>

        </div>

        <hr className="border-warning" />

        <p className="text-center mt-3 mb-0">
          © {new Date().getFullYear()} <span className="text-warning">FarmHive</span> — All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
