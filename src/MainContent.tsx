// MainContent.tsx

import React from 'react';
import './App.css';
import WorldMapIcon from './WorldMapIcon';

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen background">
      <WorldMapIcon/>
      <div className="flex flex-col z-10 px-4 md:ml-40 md:mt-48 text-slate-200">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Let yourself<br />
          g<span className="text-blue-400">AI</span>n<br />
          knowledge
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400">
          <strong>Viska</strong> can provide you pure facts based on <strong>your notes</strong> enhanced by AI
        </p>
        <div className="mt-6 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">
            Sign in
          </button>
          <button className="bg-transparent border border-white py-2 px-4 rounded hover:bg-gray-700">
            Learn more
          </button>
        </div>
      </div>
      <div className="hidden md:block absolute right-[35%] bottom-[20%] p-4 border-2 bg-slate-600 border-lightblue text-white rounded-md shadow-lg">
        <h3 className="font-bold">World Hunger - AI enhanced</h3>
        <p>"Facts created by AI are helpful"</p>
        <div className="absolute inset-0 bg-lightblue opacity-100 rounded-md blur-xl z-[-1]"></div>
      </div>
      <div className="hidden md:block absolute right-[20%] bottom-[40%] p-4 border-2 bg-slate-600 border-red text-white rounded-md shadow-lg">
        <h3 className="font-bold">Nuclear Power - Flashcards</h3>
        <p>"It really helped me understand"</p>
        <div className="absolute inset-0 bg-red opacity-100 rounded-md blur-xl z-[-1]"></div>
      </div>
      <div className="hidden md:block absolute right-[10%] bottom-[10%] p-4 border-2 bg-slate-600 border-green text-white rounded-md shadow-lg">
        <h3 className="font-bold">Ancient Philosophy - Quiz</h3>
        <p>"Having fun while learning"</p>
        <div className="absolute inset-0 bg-green opacity-100 rounded-md blur-xl z-[-1]"></div>
      </div>
    </div>
  );
};

export default MainContent;
