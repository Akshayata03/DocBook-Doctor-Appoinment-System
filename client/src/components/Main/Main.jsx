import React from 'react';
import {Link} from 'react-router-dom';

function Main() {
  return (
      <div>
      <div>
      <div className="backgroundhome">
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


      
     
  </div>
  </div>

  );
};

export default Main