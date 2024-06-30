import React, { useState } from 'react';
import './index.css'; // Ensure your CSS file is correctly set up
import SimpleMap from './GoogleMaps';
const BirthdayWishUI = () => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Sending message:', message);
   
    setMessage('');
  };

  return (
    <div className="birthday-ui-container">
      <h2 className="title">Birthday Wishes</h2>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="wish-message" className="label">
          What do you wish for your birthday?
        </label>
        <textarea
          id="wish-message"
          className="textarea"
          value={message}
          onChange={handleChange}
          placeholder="Type your wish here... And yes I Won't Be Able To Read This "
          required
        />
         <h2>Meet Me At Domino 24.042772856724373, 84.07724777935476</h2>
        <button type="submit" className="button">
          Send Wish
        </button>
       
      </form>
     <SimpleMap/>
    </div>
  );
};

export default BirthdayWishUI;
