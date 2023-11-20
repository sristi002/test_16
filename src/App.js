
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 


const App = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 35,
            behavior: 'smooth',
          });
        }
      });
    });

    

    document.getElementById('open-popup').addEventListener('click', function () {
      document.getElementById('popup').style.display = 'block';
    });

    document.getElementById('close-popup').addEventListener('click', function () {
      document.getElementById('popup').style.display = 'none';
    });

    document.addEventListener('DOMContentLoaded', function () {
      const submitButton = document.getElementById('open-popup2');
      const closePopupButton = document.querySelector('.bpop2');
      const popup = document.getElementById('popup2');
      const overlay = document.getElementById('overlay');

      document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
    
        submitButton.addEventListener('click', function () {
          // Show the overlay and popup when the "Submit" button is clicked
          overlay.style.display = 'block';
          popup.style.display = 'block';
        });
        });

      closePopupButton.addEventListener('click', function () {
        // Hide the overlay and popup when the "Close" button is clicked
        overlay.style.display = 'none';
        popup.style.display = 'none';
      });
    });
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          Adopt<span>Me</span>
        </div>
        <div className="menu">
          <a href="#">Pets</a>
          <a href="#">Pet Services</a>
          <a href="#aboutus">About Us</a>
          <a href="#joinus">Join Us</a>
          <a href="#contact">Contact</a>
          <Link to="/faq">FAQs</Link>
        </div>

        <button id="open-popup" className="open-popup">
          Login
        </button>

        <div id="popup" className="popup">
          <div className="popup-content">
            <span className="close" id="close-popup">
              &times;
            </span>
            <h2 className="s2">Sign In</h2>
            <br />
            <form>
              <label htmlFor="username">Username:</label>
              <input
                type="email"
                id="username"
                name="username"
                required
                placeholder="Enter Your Username"
              />
              <br />
              <br />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter Password"
              />
              <br />
              <br />
              <button type="submit" className="sub">Submit</button>
            </form>
          </div>
        </div>
      </nav>

      
      <div className="container1">
      <div className="home">
        <p className="phome">
          <span className="shome1">
            FIND YOUR FOREVER FRIEND: <span style={{ color: '#e74c3c' }}>ADOPT</span>,
            <span style={{ color: '#e74c3c' }}>LOVE</span> AND{' '}
            <span style={{ color: '#e74c3c' }}>BE LOVED</span>.
          </span>
          <span className="shome2">"Adopt a furry friend and make a difference in their life!"</span>
        </p>
      </div>
      <div className="right">
        <img className="img1" src="petowner.jpg" alt="" />
      </div>
    </div>

    <div className="one">
        <p className="pone">
          Find your new furry friend and bring endless joy into your life. Adopt a pet today and make a loving companion's dream come true.
        </p>
        <button className="bone">
          <p>Adopt a Pet</p>
        </button>
        <br />
        <p className="ptwo">
          Offer your pet a loving home with a responsible, caring owner. Rehoming your pet ensures their happiness and well-being.
        </p>
        <button className="btwo">
          <p>Rehome Your Pet</p>
        </button>
      </div>
      <div className="two">
        <p className="pthree">
          Short-term pet care services are here to provide comfort and care for your furry companions while you're briefly apart.
        </p>
        <button className="bthree" id="findShelterButton">
        <Link to="/shelter" className="LinkStyle">Find a Shelter for your Pet</Link>
        </button>
      </div>
      <div className="three">
        <p className="pfour">Ensure your pet's health and well-being with our dedicated veterinary services.</p>
        <button className="bfour">Explore Vet Clinics</button>
      </div>
      
      
      <div>
        <br />
        <div className="container5" id="aboutus">
          <p className="pfive">
            <span className="sfive">About Us</span>
          </p>
          <br />
          <p className="psix">
            At AdoptMe, we are dedicated to facilitating the beautiful journey of pet adoption, shelter care, and access to trusted vet clinics. Our platform acts as a compassionate mediator, connecting pet owners looking to rehome their beloved companions with individuals seeking to provide a loving forever home.
            With a deep commitment to animal welfare, we are here to ensure that every pet finds its forever home, receives the care it deserves, and enjoys the best possible health through accessible veterinary services.
            <br />
            At AdoptMe, we understand the profound bond between pets and their owners and the importance of providing shelter, care, and reliable veterinary care to those in need. Our aim is to create heartwarming stories of pets finding loving homes, receiving the support they require, and humans discovering the joys of pet companionship.
            Join us in our mission to make a positive impact on the lives of animals and those who cherish them. Together, we can create brighter and healthier futures for our beloved furry friends.
            <br />
          </p>
        </div>
        <div className="container2">
          <div className="four"></div>
          <div className="five"></div>
          <div className="six"></div>
        </div>
        <br />
        <br />
        <div className="container6" id="joinus">
          <p className="pseven">
            <span className="ssix">Join Us</span>
          </p>
          <br />
          <br />

          <form id="myForm" action="">
            <label htmlFor="Name" className="name">
              Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input type="text" name="name" id="name" placeholder="Enter Your Name" /><br />
            <br />
            <label htmlFor="Email" className="mail">
              Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input type="email" name="Email" id="email" placeholder="Enter Your Email" /><br />
            <br />
            <label htmlFor="No" className="phone">
              Phone&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </label>
            <input type="text" name="No" id="phone" placeholder="Enter Your Phone Number" /><br />
            <br />
            <button id="open-popup2" className="bjoin">Submit
              
            </button>
            
          </form>
        </div>
      </div>
    

      <br />
      <br />
      
      <div id="overlay" className="overlay"></div>
      <div id="popup2" className="popup2">
        <img src="tick.png" alt="" />
        
        <h2>Thank You!</h2>
        <p>Your details have been successfully submitted.</p>
        <br />
        <button className="bpop2">Close</button>
      </div>
      <br />


      {/* Repeat the structure for the remaining sections */}
      
      <footer className="footer" id="contact">
      <div className="f-contact" data-aos="zoom-in-up" data-aos-offset="200">
        <div>
          <p>
            <span className="sseven">
              Connect with us for any queries or support.
            </span>
            <br />
            We are dedicated to providing you with a hassle-free adoption process 24X7. Our only goal is to provide you with a pawsitive experience all the way.
          </p>
          <i className="fa fa-whatsapp"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-telegram"></i>
          <i className="fa fa-twitter"></i>
        </div>

        <div>
          <h1>Contact</h1>
          <p>adoptme@gmail.com</p>
          <p>+91 9876543210</p>
          <p>Buliding No 123, Street xyz, Mumbai</p>
        </div>

        <div>
          <h1>Get Involved</h1>
          <p>Adopting Pets</p>
          <p>Shelter and Rescues</p>
          <p>As a Veterinarian</p>
          <p>As a Trainer</p>
          <p>As a Breeder</p>
        </div>
      </div>
    </footer>



        
      
    </>
  );
};

export default App