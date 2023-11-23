import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const onTaskFormSubmit = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  
  const handleDelete = (text) => {
    const updatedTasks = tasks.filter((task) => task.text !== text);
    setTasks(updatedTasks);
  };  

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter tasks={tasks} categories={CATEGORIES} setTasks={setTasks}  />
      <NewTaskForm tasks={tasks} categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
