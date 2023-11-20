import React from 'react';

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        Adopt<span>Me</span>
      </div>
      <div className="menu">
        <a href="#">Pets</a>
        <a href="#">Pet Services</a>
        <a href="#">About Us</a>
        <a href="#">Join us</a>
        <a href="#">Contact</a>
        <a href="faq.html">FAQs</a>
      </div>
      <div className="icon">
        <i className="fa fa-search"></i>
        <a href="#">Login</a>
      </div>
    </nav>
  );
};

export default Nav;
