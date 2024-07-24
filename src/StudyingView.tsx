// src/components/StudyingView.tsx
import React, { useState } from 'react';

interface StudyingViewProps {
  note: string;
}

const StudyingView: React.FC<StudyingViewProps> = ({ note }) => {
  const [expanded, setExpanded] = useState(false);
  const [showButtonClicked, setShowButtonClicked] = useState(false);

  const handleShowClick = () => {
    setExpanded(true);
    setShowButtonClicked(true);
  };

  return (
    <div className="flex-1 p-8 flex flex-col relative overflow-hidden text-white">
      <h2 className="text-2xl font-semibold mb-6">Studying / {note}</h2>
      <div className="bg-gray-800 p-6 rounded-md shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl">Question</h3>
          <div className="flex space-x-2">
            {!showButtonClicked ? (
              <button
                className="bg-gray-600 px-4 py-2 rounded"
                onClick={handleShowClick}
              >
                Show
              </button>
            ) : (
              <button className="bg-gray-600 px-4 py-2 rounded">
                Elaborate
              </button>
            )}
            <button className="bg-red-600 px-4 py-2 rounded">Delete</button>
            <button className="bg-gray-600 px-4 py-2 rounded">Back</button>
          </div>
        </div>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        {expanded && (
          <>
            <h3 className="text-xl mb-2">Answer</h3>
            <p className="bg-gray-700 p-4 rounded">
              Answer text goes here...
            </p>
          </>
        )}
      </div>
      <div className="flex space-x-2">
        <button className="bg-green-500 px-4 py-2 rounded">Easy</button>
        <button className="bg-yellow-500 px-4 py-2 rounded">Medium</button>
        <button className="bg-orange-500 px-4 py-2 rounded">Hard</button>
        <button className="bg-red-500 px-4 py-2 rounded">Very Hard</button>
      </div>
    </div>
  );
};

export default StudyingView;
