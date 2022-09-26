import "./style.css"

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
        <li key={task.id}
            className={`list__newTask 
            ${task.done && props.hideDoneTasks ? "list__newTask--hidden": ""}`}>
            <button className="list__buttons list__buttons--done">
            {task.done ? "✓" : ""}
            </button>
            <span 
             className={`list__item--content ${task.done ? "list__item--content--done" : ""}`}>
            {task.content}
             </span>
         <  button className="list__buttons list__buttons--remove">🗑</button>            
         </li>
        ))}
    </ul>
);

export default Tasks;