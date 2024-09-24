import React from 'react';

type TitleWithLinesProps = {
  name: string;
};

const TitleWithLines: React.FC<TitleWithLinesProps> = ({ name }) => {
  return (
    <div className='flex items-center'>
      <div className='w-full h-0.5 bg-slate-400'></div>
      <h2 className="text-4xl mb-6 font-thin p-5">{name}</h2>
      <div className='w-full h-0.5 bg-slate-400'></div>
    </div>
  );
};

export default TitleWithLines;
