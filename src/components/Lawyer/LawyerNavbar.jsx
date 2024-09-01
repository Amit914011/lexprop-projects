import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LawyerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold cursor-pointer" onClick={()=>window.location.href='/lawyer'}>Logo</div>
        <div className="hidden md:flex space-x-6">
          <Link to='/lawyer/pending' className="text-white hover:text-blue-300">Pending Issue</Link>
          <Link to='/lawyer/submitissue' className="text-white hover:text-blue-300">Submit Issue</Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#pending" className="block text-white py-2 px-4 hover:bg-blue-700">Pending Issue</a>
          <a href="#submit" className="block text-white py-2 px-4 hover:bg-blue-700">Submit Issue</a>
        </div>
      )}
    </nav>
  );
};

export default LawyerNavbar;
