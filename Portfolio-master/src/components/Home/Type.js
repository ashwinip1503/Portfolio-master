import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
    options={{
      strings: [
        "Full Stack Developer",
        "MERN Stack Developer",
        "Frontend Developer",
        "Backend Developer"
      ],
      autoStart: true,
      loop: true,
      deleteSpeed: 50,
      delay: 75, // You can adjust the delay option
    }}
  />
  
  );
}

export default Type;
