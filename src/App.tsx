import React from 'react';
import Navbar from './Navbar';
import MainContent from './MainContent';
import './index.css';
import NotesView from './NotesView';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
