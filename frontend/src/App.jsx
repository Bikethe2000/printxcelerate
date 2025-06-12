import React, { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // Replace with your actual subscribe logic
  const subscribe = (e) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setMsg("Please enter a valid email address.");
      return;
    }
    setMsg(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  // Simulated addToCart handler
  const addToCart = (productName) => {
    alert(`Added "${productName}" to cart!`);
  };

  return (
    <>
      <header>
        <div className="container header-container">
          <h1 className="logo">PrintXcelerate</h1>
          <nav>
            <a href="#products" className="nav-link">
              Products
            </a>
            <a href="#features" className="nav-link">
              Why Us
            </a>
            <a href="#newsletter" className="nav-link">
              Newsletter
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container hero-container">
            <h2>Transform Your Prints with Speed &amp; Style</h2>
            <p>Premium-quality prints delivered fast, with unmatched service.</p>
            <a href="#products" className="btn btn-primary">
              Shop Now
            </a>
          </div>
        </section>

        <section
          className="products"
          id="products"
          aria-label="Featured products"
        >
          <div className="container">
            <h3>Featured Products</h3>
            <div className="product-grid">
              <article className="product-card" tabIndex={0}>
                <img
                  src="images/watch1.avif"
                  alt="Smart Watch Charger Case"
                />
                <h4>Smart Watch Charger Case</h4>
                <p className="price">€2.99</p>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        window.open("https://payhip.com/b/4hCOf", "_blank");
                    }}

                    >
                    Shop Now
                </button>
              </article>

              <article className="product-card" tabIndex={0}>
                <img src="images/aa_box.jpg" alt="Sticker Pack" />
                <h4>AA Batteries Box</h4>
                <p className="price">€4.44</p>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        window.open("https://payhip.com/PrintXcelerate", "_blank");
                    }}
                    >
                    Shop Now
                </button>
              </article>

              <article className="product-card" tabIndex={0}>
                <img src="images/card-holder.avif" alt="Business Card Holder" />
                <h4>Business Card Holder</h4>
                <p className="price">€3.99</p>
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        window.open("https://payhip.com/b/HoTBb", "_blank");
                    }}

                    >
                    Shop Now
                </button>

              </article>
            </div>
          </div>
        </section>

        <section className="features" id="features" aria-label="Why choose us">
          <div className="container">
            <h3>Why Choose Us</h3>
            <div className="features-grid">
              <div className="feature" tabIndex={0}>
                <span className="feature-icon" aria-hidden="true">
                  🚀
                </span>
                <h4>Fast Shipping</h4>
                <p>Get your orders delivered within 2–3 business days.</p>
              </div>

              <div className="feature" tabIndex={0}>
                <span className="feature-icon" aria-hidden="true">
                  🔒
                </span>
                <h4>Secure Checkout</h4>
                <p>Your payment and data are fully encrypted and safe.</p>
              </div>

              <div className="feature" tabIndex={0}>
                <span className="feature-icon" aria-hidden="true">
                  💬
                </span>
                <h4>24/7 Support</h4>
                <p>We’re always here to help — anytime you need us.</p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="newsletter"
          id="newsletter"
          aria-label="Newsletter subscription"
        >
          <div className="container newsletter-container">
            <h3>Subscribe to Our Newsletter</h3>
            <form onSubmit={subscribe} noValidate>
              <label htmlFor="email" className="visually-hidden">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
                aria-required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
            <p
              id="newsletter-msg"
              role="alert"
              aria-live="polite"
              style={{ marginTop: "0.5rem", minHeight: "1.2em" }}
            >
              {msg}
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-container">
          <p>© 2025 PrintXcelerate. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
