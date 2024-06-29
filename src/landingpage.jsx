import React, { useEffect } from 'react';

import './index.css'; // Ensure your index.css file is correctly set up with styles
import Typewriter from "typewriter-effect";
import backgroundImage1 from './image/ak (1).jpg';
import backgroundImage2 from './image/ak (2).jpg';
import backgroundImage3 from './image/ak (3).jpg';
import backgroundImage4 from './image/ak (4).jpg';
import backgroundImage5 from './image/ak (5).jpg';

const LandingPage = () => {

  useEffect(() => {
    setTimeout(() => {
     window.location.href="/wish"
    }, 10000);

  
  },[])
 
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-transparent bg-clip-text bg-pink-purple-gradient text-6.5xl font-bold">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
            }}
            onInit={(typewriter) => {
              const loopMessages = () => {
                typewriter
                  .typeString("Happy Birthday Aakrity")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Make A Wish")
                  .pauseFor(1000)
                  .deleteAll()
                  .callFunction(loopMessages)
                  .start();
              };

              loopMessages();
            }}
          />
        </div>
      </div>

      <div className="background-images">
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage1})` }} />
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage2})` }} />
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage3})` }} />
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage4})` }} />
        <div className="background-image" style={{ backgroundImage: `url(${backgroundImage5})` }} />
      </div>

      
    </>
  );
}

export default LandingPage;
