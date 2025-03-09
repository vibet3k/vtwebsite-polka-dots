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
  
  // Calculate viewport dimensions
  const viewportHeight = dimensions.height;
  const viewportWidth = dimensions.width;
  
  // Calculate right third of screen
  const rightThirdStart = Math.floor(viewportWidth * 2/3);
  
  // Calculate the pivot point (55% from top)
  const pivotPointY = Math.floor(viewportHeight * 0.55);
  
  // Calculate rows and columns
  const rows = Math.ceil(viewportHeight / verticalGap) + 1;
  const maxCols = Math.ceil(viewportWidth / horizontalGap) + 1;
  
  // Generate a grid of dots
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const isOffset = rowIndex % 2 === 1;
    const rowOffset = isOffset ? horizontalGap / 2 : 0;
    
    // Calculate the Y position
    const yPos = rowIndex * verticalGap;
    
    // Calculate how far this row is from the pivot point
    const distanceFromPivot = Math.abs(yPos - pivotPointY);
    
    // Calculate the starting X position for this row
    // Rows closer to the pivot point start further left (closer to 2/3 mark)
    // Rows farther from pivot start further right
    const xStartPercent = 2/3 + (distanceFromPivot / viewportHeight) * 0.25;
    const rowStartX = Math.floor(viewportWidth * xStartPercent);
    
    // Calculate the starting column for this row
    const startCol = Math.floor((rowStartX - rowOffset) / horizontalGap);
    
    for (let colIndex = startCol; colIndex < maxCols; colIndex++) {
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
            top: `${yPos}px`,
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