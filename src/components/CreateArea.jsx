import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          onChange={props.onChange}
          name={props.tName}
          value={props.tValue}
          placeholder="Title"
        />
        <textarea
          onChange={props.onChange}
          name={props.cName}
          value={props.cValue}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addClick();
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
