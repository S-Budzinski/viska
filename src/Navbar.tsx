import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 text-white">
      <div className="text-lg font-bold">Viska</div>
      <div className="flex space-x-6">
        <a href="#" className="hover:underline">Flashcards</a>
        <a href="#" className="hover:underline">Notes</a>
        <a href="#" className="hover:underline">Quiz</a>
        <a href="#" className="hover:underline">Community</a>
        <a href="#" className="hover:underline">About Us</a>
      </div>
      <button className="border border-white py-1 px-4 rounded">Enter App</button>
    </nav>
  );
};

export default Navbar;
