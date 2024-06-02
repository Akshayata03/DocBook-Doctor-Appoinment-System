import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            DocBook is designed to revolutionize the way healthcare providers and patients manage appointments.
           Our user-friendly platform simplifies scheduling, offers real-time availability, and sends automated 
           reminders. With secure patient data management, DocBook enhances efficiency and satisfaction for both
           providers and patients. 
            Join us in making healthcare more accessible and organized with DocBook.
              
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
