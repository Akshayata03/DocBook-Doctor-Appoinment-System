import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer position-relative">
			<div className="footer-top">
				<div className="container-fluid">
                <div className="col-lg-3 col-md-6">
							<div className="footer-widget footer-about">
								
								<div className="footer-about-content">
									<p className='form-text'>Book World Best Doctors from HealthCounselor Book. </p>
								</div>
							</div>
						</div>
					<div className="row">
						

						<div className="col-lg-3 col-md-6">
							<div className="footer-widget footer-menu">
								<h2 className="footer-title">For Patients</h2>
								<ul>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Search for Doctors</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Login</Link></li>
									<li><Link to={'/SignUp'}><FaAngleDoubleRight className='icon' />  SignUp</Link></li>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Booking</Link></li>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' />  Patient Dashboard</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">

							<div className="footer-widget footer-menu">
								<h2 className="footer-title">For Doctors</h2>
								<ul>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' /> Appointments</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' /> Login</Link></li>
									<li><Link to={'/SignUp'}><FaAngleDoubleRight className='icon' /> SignUp</Link></li>
									<li><Link to={'/dashboard'}><FaAngleDoubleRight className='icon' /> Doctor Dashboard</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-lg-3 col-md-6">
							<div className="footer-widget footer-contact">
								<h2 className="footer-title">Contact Us</h2>
								<div className="footer-contact-info">
									<div className="footer-address">
										<span><i className="fas fa-map-marker-alt"></i></span>
										<p> Cotton University<br /> Guwahati, Assam</p>
									</div>
									<p>
										<i className="fas fa-phone-alt"></i>
										+91 8471965988
									</p>
									<p className="mb-0">
										<i className="fas fa-envelope"></i>
										dasakshayata03@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container-fluid">

					<div className="copyright">
						<div className="row1">
							<div className="col-md-6 col-lg-6">
								
							</div>
							
						</div>
					</div>
                    <div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<ul className="policy-menu d-flex gap-2">
										<Link to={'/'} className='text-white'>Terms and Conditions</Link>
										<Link to={'/'} className='text-white'>Policy</Link>
									</ul>
								</div>
							</div>
				</div>
			</div>

		</footer>
	);
};

export default Footer;