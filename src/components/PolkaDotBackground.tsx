"use client"

import React, { useEffect, useState } from 'react';

const PolkaDotBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  
  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  // Circle properties
  const circleSize = 50;
  const horizontalGap = 70;
  const verticalGap = 70;
  const sequence = ['white', 'pink', 'green'];
  const dots = [];
  
  // Calculate how many rows and columns we need to cover the entire viewport
  const rows = Math.ceil(dimensions.height / verticalGap) + 1;
  const cols = Math.ceil(dimensions.width / horizontalGap) + 1;
  
  // Generate a grid of dots
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const isOffset = rowIndex % 2 === 1;
    const rowOffset = isOffset ? horizontalGap / 2 : 0;
    
    for (let colIndex = 0; colIndex < cols; colIndex++) {
      let sequenceIndex = (colIndex + (isOffset ? 2 : 0)) % 3;
      const dotType = sequence[sequenceIndex];
      
      let className = '';
      if (dotType === 'pink') className = "bg-[#ef5ba1]";
      if (dotType === 'green') className = "bg-[#39b54a]";
      if (dotType === 'white') className = "border-2 border-white bg-transparent";
      
      dots.push(
        <div 
          key={`${rowIndex}-${colIndex}`} 
          className={`absolute rounded-full ${className}`}
          style={{
            width: `${circleSize}px`,
            height: `${circleSize}px`,
            top: `${rowIndex * verticalGap}px`,
            left: `${colIndex * horizontalGap + rowOffset}px`,
          }}
        />
      );
    }
  }
  
  return (
    <div className="bg-[#0074bc] w-screen h-screen overflow-hidden relative">
      {dots}
    </div>
  );
};

export default PolkaDotBackground;