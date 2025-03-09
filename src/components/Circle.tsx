import React from 'react';

type CircleProps = {
  size?: string;
  color?: string;
  outline?: boolean;
  outlineColor?: string;
  className?: string;
};

const Circle: React.FC<CircleProps> = ({ 
  size = 'h-10 w-10', 
  color = 'bg-pink', 
  outline = false,
  outlineColor = 'border-white',
  className = '' 
}) => {
  return (
    <div 
      className={`rounded-full ${outline ? `border-2 ${outlineColor}` : color} ${size} ${className}`}
    />
  );
};

export default Circle;