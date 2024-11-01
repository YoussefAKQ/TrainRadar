'use client';

import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 select-none">
      <div className="relative flex justify-center py-4 mt-2">
        <nav className="flex flex-col items-center transition-all duration-300 rounded-full bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl w-[400px] mx-auto">
          <div className="flex items-center justify-between w-full px-4 py-2">
            <div className="text-2xl font-bold py-2 tracking-tighter text-black">
              Train Radar
            </div>
            <button className="rounded-full px-4 py-2 bg-black text-white transition-all duration-300">
              Mapa
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
