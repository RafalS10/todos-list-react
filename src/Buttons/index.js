import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="list__actionButtons">
         {tasks.length > 0 && (
            <>
            <button onClick={toggleHideDone} className="list__actionButton">
            {hideDone ? "Pokaż" : "Ukryj"} ukończone 
            </button>
            <button 
            className= "list__actionButton"
            disabled={tasks.every(({ done }) => done)}
            >
          Ukończ wszystkie
            </button>
            </>
        )} 
    </div >
);
export default Buttons;