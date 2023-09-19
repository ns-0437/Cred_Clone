import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div className="mobile-menu-wrapper">
    <div className="max-width header top">
        <div className="left-column">
            <img src='https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png'
                className="header-logo" />
        </div>
        <div className="right-column">
            <p className="header-nav-item">credit score check</p>
            <p className="header-nav-item">CRED pay</p>
        </div>
    </div>
</div>


  )
}

export default Header;