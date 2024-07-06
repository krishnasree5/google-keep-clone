import React, { useState } from "react";

const CreateArea = ({ addNote }) => {
  const [noteBody, setNoteBody] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteBody((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    addNote(noteBody);
    setNoteBody({
      title: "",
      content: "",
    })
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={noteBody.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={noteBody.content}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
