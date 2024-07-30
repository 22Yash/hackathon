import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#333] shadow-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            
            <span className="text-xl font-semibold ml-2">VCET Hackathon</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className=" hover:text-indigo-500">
              Home
            </a>
            <a href="#" className=" hover:text-indigo-500">
              About
            </a>
            <a href="#" className=" hover:text-indigo-500">
              Problems
            </a>
            <a href="#" className=" hover:text-indigo-500">
              Timeline
            </a>
            <a href="#" className=" hover:text-indigo-500">
              Prizes
            </a>
          </div>
          <div className="md:hidden">
            <button className=" focus:outline-none focus:text-indigo-500">
             
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
