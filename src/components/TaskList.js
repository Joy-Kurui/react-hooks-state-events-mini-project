import React from "react";
import Task from "./Task";

function TaskList({tasks, handleDelete}) {
  
  return (
   <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) =>(
      <Task key={task.text} category={task.category} text={task.text} handleDelete={() => handleDelete(task.text)}/>))}
    </div>
  );
}

export default TaskList;
