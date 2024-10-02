// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import NotesView from './NotesView';
import EditNotes from './EditNotes'; // Import EditNotes component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Layout />} />

        {/* Notes View Route */}
        <Route path="notes" element={<NotesView />} />

        {/* Edit Notes Route - Dynamic route */}
        <Route path="edit/:noteTitle" element={<EditNotes />} /> {/* Edit notes route */}
      </Routes>
    </Router>
  );
};

export default App;
