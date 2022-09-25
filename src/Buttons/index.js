import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="list__actionButtons">
        {tasks.lenght > 0 && (
            <>
            <button className="list__actionButton">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone 
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