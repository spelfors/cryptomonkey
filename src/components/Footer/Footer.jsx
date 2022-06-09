import React from 'react';
import logotypefooter from '../../assets/show-monkey.png';
import insta from '../../assets/Tilda_Icons_26snw_instagram.svg';
import twit from '../../assets/Tilda_Icons_26snw_twitter.svg';
import teleg from '../../assets/Tilda_Icons_26snw_telegram.svg';
import diskord from '../../assets/Tilda_Icons_26snw_diskord.svg';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__blockup">
        <img src={logotypefooter} alt="" className="footer__logo" />
        <ul className="footer__item" >
              <li className="footer__list"><a className="footer__link" href="#home">Home</a></li>
              <li className="footer__list"><a className="footer__link" href="#story">Our story</a></li>
              <li className="footer__list"><a className="footer__link" href="#collection">Collection</a></li>
              <li className="footer__list"><a className="footer__link" href="#roadmap">Roadmap</a></li>
              <li className="footer__list"><a className="footer__link" href="#faq">FAQ</a></li>
        </ul>
      </div>
      <div className="footer__blockdown">
        <p className="footer_copywrite">Copyright © 2022 Snow Monkey All rights reserved</p>
        <div className="footer__social-links">
          <div className="footer__social-link"><img src={insta} alt='' /></div>
          <div className="footer__social-link"><img src={twit} alt='' /></div>
          <div className="footer__social-link"><img src={diskord} alt='' /></div>
          <div className="footer__social-link"><img src={teleg} alt='' /></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
