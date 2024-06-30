import React, { useEffect, useState } from 'react';
import Typewriter from "typewriter-effect";
import './index.css'; // Ensure your index.css file is correctly set up with styles
import backgroundImage1 from './image/ak (1).jpg';
import backgroundImage2 from './image/ak (2).jpg';
import backgroundImage3 from './image/ak (3).jpg';
import backgroundImage4 from './image/ak (4).jpg';
import backgroundImage5 from './image/ak (5).jpg';

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showMessage, setShowMessage] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2024-09-01');
      const now = new Date();
      const timeDiff = targetDate.getTime() - now.getTime();

      if (timeDiff > 0) {
        let seconds = Math.floor((timeDiff / 1000) % 60);
        let minutes = Math.floor((timeDiff / 1000 / 60) % 60);
        let hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
        let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Countdown has reached zero, show message and start typewriter
        setShowTypewriter(true);
        setShowMessage(true);
        setTimeout(() => {
          window.location.href = "/wish";
        }, 5000); // Redirect after 5 seconds
      }
    };

    calculateTimeLeft();

    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-transparent bg-clip-text bg-pink-purple-gradient text-6.5xl font-bold">
          {showTypewriter && (
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Happy Birthday Aakrity")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Make A Wish")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          )}
          <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("❤ ONE STEP CLOSER TO DEATH ❤")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I HAVE SURPRISE FOR YOU ON THAT DAY ")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          {!showMessage && (
            <div className="text-3xl mt-4">
              <span>{timeLeft.days} DAYS </span>
              <span>{timeLeft.hours} HR </span>
              <span>{timeLeft.minutes} MIN </span>
              <span>{timeLeft.seconds} SEC </span>
              UNTIL YOUR BIRTHDAY
              
            </div>
            
          )}
          {showMessage && (
            <div className="text-3xl mt-4">
              Your birthday has arrived! Redirecting to make a wish...
            </div>
          )}
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
