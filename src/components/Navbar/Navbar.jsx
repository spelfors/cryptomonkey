import React from 'react';
// import star from '../../assets/star.jpg';
import logotype from '../../assets/main-logo.png';
import monkey1 from '../../assets/monke1.png';
import monkey2 from '../../assets/monke2.png';


import './Navbar.css';

const Navbar = () => (

    <header ClassName="navbar">
        <div className="container d_flex">
            <div className="navbar__head">
                <div className="navbar__logo">
                    <a href="#home" target="_blank"><img alt="" src={logotype}/></a>
                </div>
                <nav className="navbar__menu" id="menuToggle">
                    <input type="checkbox" className="navbar__menu-input"/>       
                    <span className="navbar__menu-span"></span>
                    <span className="navbar__menu-span"></span>
                    <span className="navbar__menu-span"></span>

                    <ul className="navbar__item" id="menu">
                        <li className="navbar__list"><a className="navbar__link" href="#home">Home</a></li>
                        <li className="navbar__list"><a className="navbar__link" href="#story">Our story</a></li>
                        <li className="navbar__list"><a className="navbar__link" href="#collection">Collection</a></li>
                        <li className="navbar__list"><a className="navbar__link" href="#roadmap">Roadmap</a></li>
                        <li className="navbar__list"><a className="navbar__link" href="#faq">FAQ</a></li>
                    </ul>

                </nav>
            </div>
            <div className="navbar__content">
                <h1 className="navbar__title">
                    <span>Snow Monkey</span> Hot Spring Club
                </h1>
                <div className="navbar__discr">
                    The Snow Monkey Hot Spring club is a collection of 8,888 unique Snow Monkey NFTs who are chilling on the Solana Blockchain in the hot volcanic springs of the phantom white mountains of Jigokundani.
                </div>
                <button className="navbar__btn">Join Discord</button>
                {/* <img className="navbar__btn_left" alt="" src={star}/>
                <img className="navbar__btn_left"   src={star} alt="" />  */}


            </div>
            <img className="navbar__momkey_1" alt="" src={monkey1}/>
                <img className="navbar__momkey_2"   src={monkey2} alt="" /> 
        </div>
    </header>
);

export default Navbar;

// document.querySelectorAll('a').forEach((elem) => {

// 	elem.onmouseenter =
// 	elem.onmouseleave = (e) => {

// 		const tolerance = 10

// 		const left = 0
// 		const right = elem.clientWidth

// 		let x = e.pageX - elem.offsetLeft

// 		if (x - tolerance < left) x = left
// 		if (x + tolerance > right) x = right

// 		elem.style.setProperty('--x', `${ x }px`)

// 	}

// })