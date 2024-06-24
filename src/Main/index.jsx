import React from "react";
import Note from '../Note';

const Main = ({ notes }) => {
    return (
        notes.map((note) => (
            <Note key={note.id} title={note.title} description={note.description} />
        ))
    );
}

export default Main;
