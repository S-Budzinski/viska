// Navbar.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 p-4 text-white bg-transparent">
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">Viska</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Flashcards</a>
          <a href="#" className="hover:underline">Notes</a>
          <a href="#" className="hover:underline">Quiz</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">About Us</a>
        </div>
        <button
          className="border border-white py-1 px-4 rounded hidden md:block hover:bg-gray-700"
          onClick={() => navigate('/notes')}
        >
          Enter App
        </button>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="flex flex-col space-y-1.5">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 items-center">
          <a href="#" className="hover:underline">Flashcards</a>
          <a href="#" className="hover:underline">Notes</a>
          <a href="#" className="hover:underline">Quiz</a>
          <a href="#" className="hover:underline">Community</a>
          <a href="#" className="hover:underline">About Us</a>
          <button
            className="border border-white py-1 px-4 rounded hover:bg-gray-700 mt-2"
            onClick={() => navigate('/notes')}
          >
            Enter App
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
