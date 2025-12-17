import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/footer.jsx";
import Home from "./components/pages/home.jsx";
import Products from "./components/pages/products.jsx";
import Cart from "./components/pages/cart.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
