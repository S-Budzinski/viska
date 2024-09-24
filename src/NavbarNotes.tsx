import React from 'react';

type NavbarNotes = {
    handleBackToMain: () => void;
};

const NavbarNotes: React.FC<NavbarNotes> = ({ handleBackToMain }) => {
  return (
    <div className="w-1/5 bg-white/10 p-4">
        <h2 className="text-lg font-semibold mb-5 pointer" onClick={handleBackToMain}>Viska</h2>
        <div className='w-full h-0.5 bg-slate-400 '></div>
        <div className='flex items-center space-x-20 pt-4'>
          <div className='w-6 h-6 bg-slate-300 rounded-sm'></div>
          <div className="ml-2 text-lg">ChumanistaLech</div>
        </div>
    </div>
  );
};

export default NavbarNotes;
