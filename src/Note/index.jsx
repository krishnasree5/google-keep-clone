import React from "react";

const Note = ({title, description}) => {

    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Note;
