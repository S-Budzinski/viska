// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotesView from './NotesView';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="notes" element={<NotesView />} />
      </Routes>
    </Router>
  );
};

export default App;
