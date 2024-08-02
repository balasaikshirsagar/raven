import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterStyles from "../styles/Footer.module.css"; 
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-5 mt-5">
        <div className="container mt-5">
          <div className="row">
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0 lh-lg fs-5 ${FooterStyles.embark}`}>
              <h5 className="mb-3 fs-3">Raven Labs - Your Strategic Partners</h5>
              <p>
                Embark on a transformative journey with Raven Labs, transcending the role of traditional service providers to become strategic partners in propelling your business to unprecedented heights.
              </p>
              <div className="mt-3">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark me-3">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-dark">
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
              </div>
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0 lh-lg fs-5 ${FooterStyles.embark}`}>
              <h5 className="mb-4 fs-4">Our Locations</h5>
              <p>Hyderabad, TS IND</p>
              <p>Gaithersburg, MD USA</p>
              <p>+61 432 913 392</p>
              <p>info@ravenlabs.com.au</p>
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0 lh-lg fs-5 ${FooterStyles.embark}`}>
              <h5 className=" mb-4 fs-4">Useful Links</h5>
              <ul className="list-unstyled">
                <li><a className='text-decoration-none text-dark' href="#">Home</a></li>
                <li><a className='text-decoration-none text-dark' href="#">Partners</a></li>
                <li><a className='text-decoration-none text-dark' href="#">About Raven Labs</a></li>
                <li><a className='text-decoration-none text-dark' href="#">Contact</a></li>
              </ul>
            </div>
            <div className={`col-lg-3 col-md-6 mb-4 mb-lg-0 lh-lg fs-5 ${FooterStyles.embark}`}>
              <h5 className="mb-4 fs-4">Services</h5>
              <ul className="list-unstyled">
                <li><a className='text-decoration-none text-dark' href="#">Business Intelligence</a></li>
                <li><a className='text-decoration-none text-dark' href="#">Mobile Apps</a></li>
                <li><a className='text-decoration-none text-dark' href="#">CRM</a></li>
                <li><a className='text-decoration-none text-dark' href="#">ERP</a></li>
                <li><a className='text-decoration-none text-dark' href="#">Digital Marketing</a></li>
                <li><a className='text-decoration-none text-dark' href="#">AI Integration</a></li>
                <li><a className='text-decoration-none text-dark' href="#">Managed IT Support</a></li> 
                <li><a className='text-decoration-none text-dark' href="#">Web Development</a></li>
              </ul>
            </div>
          </div>
        </div> 
      </footer>

      <footer className="bg-white py-3">
        <div className="container d-flex align-items-center justify-content-between">
        <img
            src="/raven.png"
            alt="Raven Labs"
            className={FooterStyles.logo}
          />
          <p className={`mb-0 fs-5  ${FooterStyles.copyright} `}>© 2024 Copyrights by <b><u>RavenLabs</u></b> . All Rights Reserved. Designed by <b><u>RavenLabs</u></b></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
