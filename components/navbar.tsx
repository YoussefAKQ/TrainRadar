'use client';

import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="relative flex justify-center py-4 mt-6">
        <div className="flex flex-col items-center bg-[#9fe870] transition-all duration-300 rounded-full bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl w-[300px] mx-auto">
          <div className="flex items-center justify-between w-full px-4 py-2">
            <div className="text-2xl font-bold tracking-tighter text-black">
              Bamp
            </div>
            <button className="rounded-full px-4 py-2 bg-black text-white transition-all duration-300">
              Menú
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
