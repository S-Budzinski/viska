// src/components/NotesView.tsx
import React, { useState, useRef, useEffect } from 'react';
import StudyingView from './StudyingView';
import { useNavigate } from 'react-router-dom';

const NotesView: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([
    'Philosophy',
    'Gravity',
    'Second World War',
    'Universe',
    'Trains'
  ]);
  
  const [noteTitle, setNoteTitle] = useState<string>('')

  const [editingNote, setEditingNote] = useState<string | null>(null);
  const [newTitle, setNewTitle] = useState<string>('');
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupStep, setPopupStep] = useState<number>(1);;
  const [error, setError] = useState<string>('');
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [view, setView] = useState<'notes' | 'studying'>('notes');

  const notesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (notesEndRef.current) {
      notesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [notes]);

  const navigate = useNavigate();

  const handleBackToMain = () => {
    navigate('/');
  };

  const addNote = () => {
    setShowPopup(true);
    setPopupStep(1);
  };

  const saveNewNote = () => {
    if (notes.includes(noteTitle)) {
      setError('Note title already exists');
    } else {
      setNotes([...notes, noteTitle]);
      setShowPopup(false);
      setNoteTitle('');
      setError('');
    }
  };

  const deleteNote = (noteToDelete: string) => {
    setNotes(notes.filter(note => note !== noteToDelete));
  };

  const startEditingNote = (note: string) => {
    setEditingNote(note);
    setNewTitle(note);
    setOpenMenu(null);
  };

  const saveEditedNote = () => {
    setNotes(notes.map(note => (note === editingNote ? newTitle : note)));
    setEditingNote(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      saveEditedNote();
    }
  };

  const startStudying = () => {
    if (selectedNote) {
      setView('studying');
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-tr from-teal-900 via-gray-800 to-gray-900 text-white">
      <div className="w-1/5 bg-white/10 p-4">
        <h2 className="text-lg font-semibold mb-5 pointer" onClick={handleBackToMain}>Viska</h2>
        <div className='w-full h-0.5 bg-slate-400 '></div>
        <div className='flex items-center space-x-20 pt-4'>
          <div className='w-6 h-6 bg-slate-300 rounded-sm'></div>
          <div className="ml-2 text-lg">ChumanistaLech</div>
        </div>

      </div>
      {view === 'notes' ? (
        <div className="flex-1 p-8 flex flex-col relative overflow-hidden -mt-4">
          <div className='flex items-center'>
            <div className='w-full h-0.5 bg-slate-400'></div>
            <h2 className="text-4xl mb-6 font-thin p-5 ">Notes</h2>
            <div className='w-full h-0.5 bg-slate-400'></div>
          </div>
          <div className="flex-1 overflow-y-auto mb-10 pr-10">
            <div className="grid grid-cols-3 gap-20">
              {/* Single note view */}
              {notes.map((note) => (
                <div
                  key={note}
                  className="relative flex flex-col items-center w-full max-w-64"
                  onClick={() => setSelectedNote(note)}
                >
                  <div
                    className={`bg-teal-900/30 p-4 h-72 w-full rounded-md shadow-md flex items-center justify-center cursor-pointer ${
                      selectedNote === note ? 'border-4 border-blue-500 transition-colors duration-500' : ''
                    }`}
                  >
                    {/* Note tile content */}
                    <div className="w-full h-full flex items-center justify-center"></div>
                    {openMenu === note && (
                      <div className="absolute bottom-0 right-0 mb-4 mr-4 bg-gray-700 p-2 rounded shadow-md z-10">
                        <button
                          className="text-white mb-2 block w-full text-left"
                          onClick={() => startEditingNote(note)}
                        >
                          Edit
                        </button>
                        <button
                          className="text-white block w-full text-left"
                          onClick={() => deleteNote(note)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  {/* Note title below the tile */}
                  <div className="mt-2 w-full"> {/* Full width container for the title */}
                    {editingNote === note ? (
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="bg-gray-700 p-2 rounded w-full text-center" // Full width input
                      />
                    ) : (
                      <div className="flex items-center justify-between w-full">
                        <span className="flex-grow text-left font-thin">{note}</span> {/* Full width title */}
                        <button
                          className="relative"
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenu(openMenu === note ? null : note);
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M6 10a1 1 0 100-2 1 1 0 000 2zm4-1a1 1 0 110 2 1 1 0 010-2zm4 1a1 1 0 100-2 1 1 0 000 2z" />
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Add Note tile with the same styling as note tiles */}
              <div
                className="relative flex flex-col items-center w-full max-w-64"
                onClick={addNote}
              >
                <div
                  className="bg-gray-800 p-4 h-72 w-full rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  <span className="text-white text-3xl font-semibold">+</span>
                </div>
              </div>

              {/* Spacer for scrolling */}
              <div ref={notesEndRef} />
            </div>
          </div>

          <div className="fixed bottom-0 left-1/5 right-0 bg-opacity-50 p-4 px-20">
            <button
              className="border border-teal-600 text-lg font-medium py-1 rounded px-10 hover:bg-teal-500 mt-2 transition-colors duration-300"
              onClick={startStudying}
            >
              Start studying
            </button>
          </div>
          {showPopup && (
            <div className="fixed bottom-1 right-1 h-1/2 w-1/3 bg-gray-800 bg-opacity-90 p-8 z-50 overflow-auto">
              <button
                className="absolute top-4 right-4 text-white"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>
              {popupStep === 1 && (
                <>
                  <h2 className="text-xl mb-4">Add Note - Step 1</h2>
                  <textarea
                    className="w-full p-2 mb-4 bg-gray-700 rounded"
                    placeholder="Enter your note content here..."
                  />
                  <input
                    type="file"
                    className="mb-4"
                  />
                  <button
                    className="bg-blue-500 p-2 rounded-md float-right"
                    onClick={() => setPopupStep(2)}
                  >
                    Next
                  </button>
                </>
              )}
              {popupStep === 2 && (
                <>
                  <h2 className="text-xl mb-4">Add Note - Step 2</h2>
                  <input
                    type="text"
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    placeholder="Enter note title"
                    className="w-full p-2 mb-4 bg-gray-700 rounded"
                  />
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <label className="block mb-2">Priority</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    className="w-full mb-4"
                  />
                  <label className="block mb-2">Focus on topic</label>
                  <input
                    type="text"
                    className="w-full p-2 mb-4 bg-gray-700 rounded"
                  />
                  <button
                    className="bg-green-500 p-2 rounded-md float-right"
                    onClick={saveNewNote}
                  >
                    Save
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      ) : (
        <StudyingView note={selectedNote!} />
      )}
    </div>
  );
};

export default NotesView;
