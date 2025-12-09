import React from "react";
function Home() {
  return (
    
    <div style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* Hero Section */}
      <section
        className="text-light d-flex align-items-center"
        style={{
          background: "url('https://images.unsplash.com/photo-1524594154908-edd222533a6e') center/cover",
          height: "90vh",
          paddingTop: "80px"
        }}
      >
        <div className="container">
          <h1 className="display-3 fw-bold text-warning">
            Welcome to FarmHive
          </h1>
          <p className="fs-4">
            Your trusted marketplace for quality farming essentials.
          </p>
          <button className="btn btn-warning btn-lg px-5 fw-semibold">Shop Now</button>
        </div>
      </section>

      {/* Categories */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4">Shop by Category</h2>
        <div className="row">

          {[
            { name: "Seeds", img: "https://images.unsplash.com/photo-1589927986089-35812388d1f4" },
            { name: "Tools", img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351" },
            { name: "Fertilizers", img: "https://images.unsplash.com/photo-1607354584268-8c920840e1e9" },
            { name: "Crop Protection", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" }
          ].map((cat, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="card shadow-sm">
                <img src={cat.img} className="card-img-top" height="180" alt={cat.name} />
                <div className="card-body text-center">
                  <h5 className="fw-bold">{cat.name}</h5>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Featured Products */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Featured Products</h2>

          <div className="row">
            {[1, 2, 3].map((prod) => (
              <div className="col-md-4 mb-4" key={prod}>
                <div className="card shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                    className="card-img-top"
                    alt="Product"
                  />
                  <div className="card-body text-center">
                    <h5 className="fw-bold">Premium Fertilizer</h5>
                    <p>High-nutrient formula for healthier, stronger crops.</p>
                    <button className="btn btn-warning px-4">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="text-center text-light py-5"
        style={{ backgroundColor: "#000" }}
      >
        <h2 className="fw-bold text-warning">Join the FarmHive Community</h2>
        <p className="fs-5 mt-3">
          Get the best deals, product updates & expert farming tips.
        </p>
        <button className="btn btn-warning btn-lg px-5 fw-semibold">
          Sign Up Now
        </button>
      </section>

    </div>
  );
}

export default Home;
