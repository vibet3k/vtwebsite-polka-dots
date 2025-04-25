"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

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
  const circleSize = dimensions.width < 768 ? 30 : 50; // Smaller circles on mobile
  const horizontalGap = dimensions.width < 768 ? 50 : 70; // Smaller gaps on mobile
  const verticalGap = dimensions.width < 768 ? 50 : 70;
  const sequence = ['pink', 'green', 'white'];
  const dots = [];
  
  // Calculate viewport dimensions
  const viewportHeight = dimensions.height;
  const viewportWidth = dimensions.width;
  
  // Calculate the pivot point (55% from top)
  const pivotPointY = Math.floor(viewportHeight * 0.55);
  
  // Calculate rows and columns
  const rows = Math.ceil(viewportHeight / verticalGap) + 1;
  const maxCols = Math.ceil(viewportWidth / horizontalGap) + 1;
  
  // Generate a grid of dots
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const isOffset = rowIndex % 2 === 1;
    const rowOffset = isOffset ? horizontalGap / 2 : 0;
    
    // Calculate the Y position - shift up by two rows
    const yPos = rowIndex * verticalGap - (verticalGap * 2);
    
    // Calculate how far this row is from the pivot point
    const distanceFromPivot = Math.abs(yPos - pivotPointY);
    
    // Calculate the starting X position for this row
    // Adjust for mobile to have fewer dots (more space on left)
    const xStartPercentMobile = dimensions.width < 768 ? 0.75 : 2/3;
    const xStartPercent = xStartPercentMobile + (distanceFromPivot / viewportHeight) * 0.25;
    const rowStartX = Math.floor(viewportWidth * xStartPercent);
    
    // Calculate the starting column for this row
    let startCol = Math.floor((rowStartX - rowOffset) / horizontalGap);
    
    // Adjust specific rows to have fewer dots on the left
    if (rowIndex === 5 || rowIndex === 7 || rowIndex === 9 || rowIndex === 12 || rowIndex === 14) {
      startCol += 1; // Remove the leftmost dot
    }
    else if (rowIndex === 2 || rowIndex === 3 || rowIndex === 4) {
      startCol += 2; // Remove the two leftmost dots
    }
    
    // For mobile, apply additional spacing adjustments to avoid overcrowding
    if (dimensions.width < 768 && (rowIndex % 3 === 0)) {
      startCol += 1;
    }
    
    for (let colIndex = startCol; colIndex < maxCols; colIndex++) {
      const sequenceIndex = (colIndex + (isOffset ? 2 : 0)) % 3;
      const dotType = sequence[sequenceIndex];
      
      let className = '';
      const style: React.CSSProperties = {
        width: `${circleSize}px`,
        height: `${circleSize}px`,
        top: `${yPos}px`,
        left: `${colIndex * horizontalGap + rowOffset}px`,
        position: 'absolute',
      };
      
      if (dotType === 'pink') {
        className = "bg-[#ef5ba1] rounded-full";
      } else if (dotType === 'green') {
        className = "bg-[#39b54a] rounded-full";
      } else if (dotType === 'white') {
        // Using inline style for white circles to reduce border width by 30%
        // Default border width is 2px, 70% of that is 1.4px
        // Further reduce for mobile
        const borderWidth = dimensions.width < 768 ? '1px' : '1.4px';
        className = "rounded-full bg-transparent";
        style.border = `${borderWidth} solid white`;
      }
      
      dots.push(
        <div 
          key={`${rowIndex}-${colIndex}`} 
          className={className}
          style={style}
        />
      );
    }
  }
  
  // Footer height - smaller on mobile
  const footerHeight = dimensions.width < 768 ? 40 : 50;
  
  return (
    <div className="bg-[#0074bc] w-screen h-screen overflow-hidden relative">
      {/* Polka dot pattern */}
      {dots}
      
      {/* Logo in the upper left - responsive sizing */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 z-10">
        <Image 
          src="/images/vt_Logo_Tagline_White.png" 
          alt="Vibrant Technology Logo" 
          width={dimensions.width < 768 ? 180 : 300}
          height={dimensions.width < 768 ? 60 : 100}
          className="w-[180px] md:w-[240px] lg:w-[300px]"
          priority
        />
      </div>
      
      {/* Kelly Green footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#39b54a]" style={{ height: `${footerHeight}px` }}>
        {/* No content for now */}
      </div>
    </div>
  );
};

export default PolkaDotBackground;