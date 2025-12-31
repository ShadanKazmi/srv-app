import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';
import instagram from '../../assets/instagram.svg';
import facebook from '../../assets/facebook.svg';
import youtube from '../../assets/youtube.svg';
import callicon from '../../assets/callicon.svg';
import location from '../../assets/locationicon.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__inner">

                <div className="footer__brand">
                    <img src={logo} alt="Premier Schools Exhibition" />
                </div>
                <div className="footer__block footer__block--icon">
                    <img src={location} alt="" className="footer__icon" />
                    <div>
                        <h4>Corporate Office:</h4>
                        <p>
                            Suite B-5, Ballygunge Park Tower,<br />
                            67B Ballygunge Circular Road,<br />
                            Kolkata – 700019
                        </p>
                    </div>
                </div>

                <div className="footer__block footer__block--icon">
                    <img src={location} alt="" className="footer__icon" />
                    <div>
                        <h4>Ahmedabad Office:</h4>
                        <p>
                            12/A, Swastik Chambers, Near CU Shah College,<br />
                            Ashram Road,<br />
                            Ahmedabad – 380009
                        </p>
                    </div>
                </div>

                <div className="footer__block footer__block--icon">
                    <img src={callicon} alt="" className="footer__icon" />
                    <div>
                        <h4>Call us on</h4>
                        <p>
                            9674850912<br />
                            9674585012
                        </p>
                    </div>
                </div>

                <div className="footer__social">
                    <h4>Follow us on</h4>
                    <div className="footer__icons">
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                        <a href="#"><img src={facebook} alt="Facebook" /></a>
                        <a href="#"><img src={youtube} alt="YouTube" /></a>
                    </div>
                </div>

            </div>

            <div className="footer__copyright">
                Copyright © 2025 | All Rights Reserved | Premier Schools Exhibition
            </div>
        </footer>
    );
};

export default Footer;
