"use client"
import React, { useEffect, useState } from 'react';

function Experience() {
  const [lineColor, setLineColor] = useState('bg-gray-300');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setLineColor('bg-black');
    } else {
      setLineColor('bg-gray-300');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 space-y-8">
      <div className="relative flex">
        <div className={`absolute h-full w-1 ${lineColor} transition-colors duration-300`} />
        
        <div className="flex flex-col items-center pl-10 space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">JavaScript</h2>
            <p className="text-gray-700">Experience in building web applications, using modern frameworks like React and Next.js.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Python</h2>
            <p className="text-gray-700">Skilled in data analysis, scripting, and backend development using Django and Flask.</p>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">C / C++</h2>
            <p className="text-gray-700">Experience in system-level programming, memory management, and data structures.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
