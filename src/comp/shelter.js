import React, { useState } from 'react';
import './shelter.css';
import Nav from './nav'; 
import Footer from './footer';


const Shelter = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here if needed

    // Show the thank you message
    setFormSubmitted(true);
  };

  return (
    <div>
      <Nav/>
      <div className="container9">
        <h1>Pet Shelter and Care</h1>
        <p>Provide shelter and care for dogs and cats for a short period of time.</p>
        {!formSubmitted ? (
          <form id="petForm" onSubmit={handleSubmit}>
            <label2 htmlFor="petType">Pet Type:</label2>
            <select id="petType" name="petType">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>

            <label2 htmlFor="breed">Breed:</label2>
            <input type="text" id="breed" name="breed" />

            <label2 htmlFor="duration">Duration in Shelter (days):</label2>
            <input type="number" id="duration" name="duration" />

            <label2 htmlFor="disease">Any Disease:</label2>
            <input type="text" id="disease" name="disease" />

            <label2 htmlFor="weight">Weight (in kg):</label2>
            <input type="number" id="weight" name="weight" />

            <label2 htmlFor="additionalInfo">Additional Information:</label2>
            <textarea id="additionalInfo" name="additionalInfo" rows="4"></textarea>

            <label2 htmlFor="phone">Phone Number:</label2>
            <input type="tel" id="phone" name="phone" />

            <label2 htmlFor="email">Email:</label2>
            <input type="email" id="email" name="email" />

            <button1 type="submit">Submit</button1>
          </form>
        ) : (
          <div id="thankYou">
            <p>Thank you! An agent will be in contact soon.</p>
          </div>
        )}
      </div>

      <Footer/>
    </div>
  );
};

export default Shelter;