import React from "react";
import videoBg from "../../assets/front_video.mp4";

function Home() {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>

      {/* ======================================
          FULLSCREEN HERO VIDEO (PERFECT FIT)
      ====================================== */}
<section
  id="home"
  className="hero-section"
  aria-label="Hero"
  style={{
    position: "relative",
    width: "100%",
    height: "92vh",
    overflow: "hidden",
    marginTop: "70px",
  }}
>

  {/* Background Video */}
  <video
    src={videoBg}
    autoPlay
    loop
    muted
    playsInline
    style={{
      position: "absolute",
      
      top: "50%",
      left: "50%",
      minWidth: "100%",
      minHeight: "100%",
      width: "auto",
      height: "auto",
      transform: "translate(-50%, -50%)",
      objectFit: "cover",
    }}
  />
  {/* Content */}
  <div
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2,
      textAlign: "center",
      color: "white",
      width: "100%",
    }}
  >
    <button className="btn btn-warning btn-lg px-5 fw-semibold " style={{
      position: "absolute", bottom: "-320px", left: "650px"
    }}>Shop Now</button>
  </div>
</section>


      {/* FIX: REMOVE WHITE GAP (Spacer removed) */}

      {/* ======================================
          SHOP BY CATEGORY
      ====================================== */}
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

      {/* ======================================
          FEATURED PRODUCTS
      ====================================== */}
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

      {/* ======================================
          CTA BANNER
      ====================================== */}
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
