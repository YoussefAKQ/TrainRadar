'use client';

import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="relative flex justify-center py-4 mt-6">
        <div className="flex items-center bg-[#9fe870] transition-all duration-300 backdrop-blur-xl rounded-3xl w-[300px] mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-[#163300]">
            Bamp
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;