import React from 'react';

type CircleProps = {
  color: string;
  size: string;
  className: string;
};

const Circle: React.FC<CircleProps> = ({ color, size, className }) => {
  return (
    <div 
      className={`rounded-full ${color} ${size} ${className}`}
      style={{ position: 'absolute' }}
    />
  );
};

export default Circle;