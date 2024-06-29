import React from 'react';
import './index.css'; // Ensure your index.css file is correctly set up with styles
import { Link } from 'react-router-dom';

const BirthdayMessage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-4">
        <span className="gradient-text">Happy Birthday, Aakrity!</span>
      </h1>
      <p className="text-lg">
        <span className="gradient-text">
          Dear Aakrity,
          <br />
          Wishing you a day filled with love, joy, and all your heart desires. May this year bring you
          happiness, success, and many memorable moments. You are a wonderful person, and today is a
          reminder of how special you are to all of us. Enjoy your special day to the fullest!
          <br />
          With warmest wishes,
          <br />
          Anshu
        </span>
      </p>
      <p className="text-lg mt-6">
        <span className="gradient-text">
          Happy Birthday! May your day be as beautiful and radiant as you are. You bring so much warmth
          and positivity into our lives, and we are grateful to celebrate another year of your amazing
          existence. Here's to many more wonderful years ahead filled with love, laughter, and endless
          adventures.
          <br />
          Best wishes,
          <br />
          Anshu
        </span>
      </p>
      <p className="text-lg mt-6">
        <span className="gradient-text">
          Aakrity, on your special day, I want to express my gratitude for your kindness, your laughter,
          and your genuine friendship. You are a beacon of light in our lives, and I feel blessed to have
          you as a friend. May this birthday bring you closer to your dreams and fill your heart with
          happiness and fulfillment.
          <br />
          Cheers,
          <br />
          Anshu
        </span>
      </p>
      <Link to="/party">
    <button className="button">
      Click Me 
    </button>
    </Link>
    </div>
  );
};

export default BirthdayMessage;
