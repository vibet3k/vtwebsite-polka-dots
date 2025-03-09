"use client"

import React, { useEffect, useState } from 'react';

const PolkaDotBackground = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [showDebug, setShowDebug] = useState(true); // Debug mode enabled by default
  
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
  const sequence = ['pink', 'green', 'white'];
  const dots = [];
  const rowLabels = [];
  
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
    
    // Add row label for debugging
    if (showDebug) {
      rowLabels.push(
        <div 
          key={`row-${rowIndex}`} 
          className="absolute text-white bg-black bg-opacity-50 px-1 rounded text-xs"
          style={{
            top: `${yPos + circleSize/2 - 8}px`,
            left: '5px',
            zIndex: 100
          }}
        >
          Row {rowIndex}
        </div>
      );
    }
    
    // Calculate how far this row is from the pivot point
    const distanceFromPivot = Math.abs(yPos - pivotPointY);
    
    // Calculate the starting X position for this row
    const xStartPercent = 2/3 + (distanceFromPivot / viewportHeight) * 0.25;
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
        className = "rounded-full bg-transparent";
        style.border = '1.4px solid white'; // 30% reduction from 2px
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
  
  // Footer height
  const footerHeight = 50;
  
  // Toggle debug mode with "d" key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'd') {
        setShowDebug(prev => !prev);
      }
    }
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="bg-[#0074bc] w-screen h-screen overflow-hidden relative">
      {/* Polka dot pattern */}
      {dots}
      
      {/* Row number labels */}
      {showDebug && rowLabels}
      
      {/* Debug toggle instruction */}
      {showDebug && (
        <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white p-2 text-sm rounded z-50">
          Press &ldquo;d&rdquo; to toggle debug overlay
        </div>
      )}
      
      {/* Kelly Green footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#39b54a]" style={{ height: `${footerHeight}px` }}>
        {/* No content for now */}
      </div>
    </div>
  );
};

export default PolkaDotBackground;