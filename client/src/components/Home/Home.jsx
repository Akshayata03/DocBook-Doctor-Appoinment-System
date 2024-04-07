import React from 'react';
import './Home.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import {Link} from 'react-router-dom';

function Home() {
  return (
      <div>
      <div>
      <div className="background">
          <div className="home">
              <h6>'Welcome to the World of Doctors'</h6>
              
          YOUR MOST TRUSTED HEALTH PARTNER
          <br/> <br />
          <button id="b5"> <Link to='/Login'>Get Started</Link></button>
          <br/>
          <div className="line">
          <h6><i>Find the best doctors, clinics & hospitals in the city nearest to you.</i></h6>
          </div>
          </div>
      </div>


      <div className="part2">    
      <section id="why-us" className="why-us">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                            Provides a centralized platform for storing and managing 
                            patient information, including 
                             appointment history and medical records.
                            </p>
                            <div className="text-center">
                                <Link href="/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Appointment</h4>
                                        <small className='text-secondary'>24 Hours Service</small>
                                        <p>Improves patient adherence to appointments, leading to better healthcare outcomes.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Emegency Cases</h4>
                                        <h6 className='text-secondary'>+91 01751 040425</h6>
                                        <p>Facilitates quick scheduling for urgent or emergency care appointments.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'>Timing schedule</small>                     
                                        <p>Sun - Sat : </p> <p>8:00 - 17: 00</p>
                                                                           
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

      </div>
  </div>
  </div>

  );
};

export default Home