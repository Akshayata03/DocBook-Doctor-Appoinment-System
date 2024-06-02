import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your Health, <br />
          Our Duty
        </h1>
        <p>
        "Discover seamless appointment scheduling for your healthcare needs. Our platform connects you with trusted doctors swiftly and effortlessly. Experience convenience and control over your health journey with our intuitive booking system."
        </p>
      </div>
      <div className="hero-img">
        <img
          src={"https://images.pexels.com/photos/3985159/pexels-photo-3985159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
