import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

interface EditNotesProps {
  notes: string[];
  handleEditNote: (oldTitle: string, newTitle: string) => void;
}

const EditNotes: React.FC = () => {
  const { noteTitle } = useParams<{ noteTitle: string }>(); // Get the note title from the URL
  const navigate = useNavigate();
  const location = useLocation(); // Extract the state from location
  const { notes, handleEditNote } = location.state as EditNotesProps; // Typecast state

  const [newTitle, setNewTitle] = useState(noteTitle || ''); // Initialize with the current note title

  const handleSave = () => {
    if (noteTitle && newTitle) {
      // Call the passed function to edit the note
      handleEditNote(noteTitle, newTitle);
      // Navigate back to the NotesView after saving
      navigate('/notes');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-4xl mb-6">Edit Note: {noteTitle}</h2>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="p-2 bg-gray-700 rounded-md w-1/2"
      />
      <button
        className="mt-4 bg-blue-600 p-2 rounded-md"
        onClick={handleSave}
      >
        Save Note
      </button>
    </div>
  );
};

export default EditNotes;
