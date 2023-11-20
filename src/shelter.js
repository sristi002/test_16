
import React, { useState, useEffect } from 'react';


const Shelter = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    // Load and insert the navigation using JavaScript
    fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('nav-container').innerHTML = data;
      });

    // Load and insert the footer using JavaScript
    fetch('footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('footer-container').innerHTML = data;
      });
  }, []); // Empty dependency array to run the effect only once, equivalent to componentDidMount

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here if needed

    // Show the thank you message
    setFormSubmitted(true);
  };

  return (
    <div>
      <div id="nav-container"></div>
      <div className="container9">
        <h1>Pet Shelter and Care</h1>
        <p>Provide shelter and care for dogs and cats for a short period of time.</p>
        {!formSubmitted ? (
          <form id="petForm" onSubmit={handleSubmit}>
            <label htmlFor="petType">Pet Type:</label>
            <select id="petType" name="petType">
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>

            <label htmlFor="breed">Breed:</label>
            <input type="text" id="breed" name="breed" />

            <label htmlFor="duration">Duration in Shelter (days):</label>
            <input type="number" id="duration" name="duration" />

            <label htmlFor="disease">Any Disease:</label>
            <input type="text" id="disease" name="disease" />

            <label htmlFor="weight">Weight (in kg):</label>
            <input type="number" id="weight" name="weight" />

            <label htmlFor="additionalInfo">Additional Information:</label>
            <textarea id="additionalInfo" name="additionalInfo" rows="4"></textarea>

            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div id="thankYou">
            <p>Thank you! An agent will be in contact soon.</p>
          </div>
        )}
      </div>

      <div id="footer-container"></div>
    </div>
  );
};

export default Shelter;
