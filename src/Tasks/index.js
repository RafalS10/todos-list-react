import "./style.css"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
        <li key={task.id}
            className={`list__newTask 
            ${task.done && hideDone ? "list__newTask--hidden": ""}`}>
            <button className="list__buttons list__buttons--done"
            onClick={() => toggleTaskDone(task.id)}
            >
            {task.done ? "✓" : ""}
            </button>
            <span 
             className={`list__item--content ${task.done ? "list__item--content--done" : ""}`}>
            {task.id} - {task.content}
             </span>
         <  button className="list__buttons list__buttons--remove"
         onClick={() => removeTask(task.id)}
         >🗑
         </button>            
         </li>
        ))}
    </ul>
);

export default Tasks;