// src/Components/Home/HomePage.jsx
import React from "react";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import chinese from "../Images/chinese.png";
import noodles from "../Images/noodles.png";
import shake from "../Images/shake.png";
import chhole from "../Images/chhole.png";
import pizza from "../Images/pizza.png";
import biryani from "../Images/biryani.png";
import fresh from "../Images/fresh.png";
import fast from "../Images/fast.png";
import support from "../Images/support.png";
import UserLocationMap from "../Maplayout/MapLayout";

const categories = [
  { name: "Chinese", image: chinese },
  { name: "Noodles", image: noodles },
  { name: "Shake", image: shake },
  { name: "Biryani", image: biryani },
    { name: "Pizza", image: pizza },

  //   { name: "Khichdi", image: "/assets/khichdi.png" },
  { name: "Chole Bhature", image: chhole },
  //   { name: "Lassi", image: "/assets/lassi.png" },
];

const HomePage = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/menu");
  };

  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Delicious Food Delivered Fast</h1>
          <p>Your favorite meals, just a tap away!</p>
          <button className="order-button" onClick={handleOrderNow}>
            Order Now
          </button>
        </div>
        <div className="hero-image">
          {/* <img src={dabba} alt="Food Delivery" /> */}
        </div>
      </section>

      <div className="category-section">
        <h2 className="category-title">What's on your mind?</h2>
        <div className="category-scroll">
          {categories.map((cat, index) => (
            <div className="category-item" key={index}>
              <img src={cat.image} alt={cat.name} />
              <p>{cat.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="map-section" style={{ padding: "2rem 5%" }}>
        <UserLocationMap />
      </div> */}

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-card">
            <img src={fresh} alt="Fresh" />
            <h3>Fresh Ingredients</h3>
            <p>Only the best quality and freshness in every bite.</p>
          </div>
          <div className="feature-card">
            <img src={fast} alt="Fast Delivery" />
            <h3>Fast Delivery</h3>
            <p>Lightning-fast service, right to your doorstep.</p>
          </div>
          <div className="feature-card">
            <img src={support} alt="Support" />
            <h3>24/7 Support</h3>
            <p>We’re here anytime you need help or have questions.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Hungry Already?</h2>
        <p>Check out our menu and place your order now!</p>
        <button className="order-button" onClick={handleOrderNow}>
          Browse Menu
        </button>
      </section>
    </div>
  );
};

export default HomePage;
