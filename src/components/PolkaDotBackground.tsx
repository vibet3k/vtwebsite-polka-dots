import React from 'react';
import Circle from './Circle';

type PolkaDotBackgroundProps = {
  className?: string;
  children: React.ReactNode;
};

const PolkaDotBackground: React.FC<PolkaDotBackgroundProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background circles */}
      <div className="absolute inset-0 z-0">
        <Circle size="h-16 w-16" color="bg-pink" className="absolute top-10 right-20 opacity-80" />
        <Circle size="h-10 w-10" color="bg-kelly-green" className="absolute top-32 right-40 opacity-80" />
        <Circle size="h-20 w-20" outline={true} className="absolute top-20 right-60 opacity-30" />
        <Circle size="h-12 w-12" outline={true} className="absolute bottom-10 right-10 opacity-30" />
        <Circle size="h-16 w-16" color="bg-pink" className="absolute bottom-32 right-24 opacity-70" />
        <Circle size="h-10 w-10" color="bg-kelly-green" className="absolute bottom-20 right-52 opacity-70" />
        <Circle size="h-24 w-24" outline={true} className="absolute -bottom-10 left-1/4 opacity-30" />
      </div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default PolkaDotBackground;