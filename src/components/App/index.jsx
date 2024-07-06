import React, { useState } from 'react';
import Header from '../Header/'
import CreateArea from "../CreateArea";
import Note from '../Note';
import Footer from '../Footer';

const App = () => {
  const [notes, setNotes] = useState([]);
  
  function addNote(noteBody) {
    if (noteBody.title !== "" && noteBody.content !== "") {
      setNotes([...notes, noteBody]);
    } else {
      alert("Write Something");
    }
  }
  
  function deleteNote(id) {
    const tempNotes = notes.filter((note, index) => index !== id);
    setNotes(tempNotes);
  }
  
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
