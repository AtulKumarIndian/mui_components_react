import React, { useState } from "react";

function RandomMouseMove() {
    const [position, setPosition] = useState({ top: 100, left: 100 });

    const getRandomPosition = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const randomLeft = Math.floor(Math.random() * (screenWidth - 100)); // subtracting button width
        const randomTop = Math.floor(Math.random() * (screenHeight - 50)); // subtracting button height
        return { top: randomTop, left: randomLeft };
    }
    const handleMouseEnter = () => {
        setTimeout(() => {
          const newPosition = getRandomPosition();
          setPosition(newPosition);
        }
        , 400);
      };
  return (
    <div>
      <button className="move-button" onMouseEnter={handleMouseEnter}         
      style={{ top: `${position.top}px`, left: `${position.left}px` }}>login</button>
    </div>
  );
}

export default RandomMouseMove;
