import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1 className="note-head">{props.headNote}</h1>
      <p className="note-para">{props.description}</p>
    </div>
  );
}

export default Note;
