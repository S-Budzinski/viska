import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-darkblue to-black">
      <div className="absolute top-1/4 left-1/4 text-white">
        <h1 className="text-6xl font-bold leading-tight">
          Let yourself<br />
          g<span className="text-lightblue">AI</span>n<br />
          knowledge
        </h1>
        <p className="mt-4 text-lg">
          <strong>ANKOTES</strong> can provide you pure facts based on <strong>your notes</strong> enhanced by AI
        </p>
        <div className="mt-6">
          <button className="bg-teal py-2 px-4 rounded mr-4">Sign in</button>
          <button className="bg-transparent border border-white py-2 px-4 rounded">Learn more</button>
        </div>
      </div>
      <div className="absolute top-[60%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 space-y-6">
        <div className="relative p-4 bg-red-500 text-white rounded-md shadow-lg">
          <h3 className="font-bold">World Hunger - AI enhanced</h3>
          <p>"Facts created by AI are helpful"</p>
          <div className="absolute inset-0 bg-red-500 opacity-30 rounded-md blur-lg"></div>
        </div>
        <div className="relative p-4 bg-lightblue text-white rounded-md shadow-lg">
          <h3 className="font-bold">Nuclear Power - Flashcards</h3>
          <p>"It really helped me understand"</p>
          <div className="absolute inset-0 bg-lightblue opacity-30 rounded-md blur-lg"></div>
        </div>
        <div className="relative p-4 bg-green-500 text-white rounded-md shadow-lg">
          <h3 className="font-bold">Ancient Philosophy - Quiz</h3>
          <p>"Having fun while learning"</p>
          <div className="absolute inset-0 bg-green-500 opacity-30 rounded-md blur-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
