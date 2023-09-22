import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [category, setCategory] = useState("All");
  function handleDeleteTask(deleteTask) {
    const tasksToDisplay = tasks.filter((task) => task.text !== deleteTask);
    setTasks(tasksToDisplay);
  }

  const displayedTasks = tasks.filter(
    (task) => category === "All" || task.category === category
  );
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }
  const categoriesToChoseFrom = CATEGORIES.filter(
    (category) => category !== "All"
  );
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        categorySelected={category}
        onSelectedCategory={setCategory}
      />
      <NewTaskForm
        onTaskFormSubmit={handleAddTask}
        categories={categoriesToChoseFrom}
      />
      <TaskList tasks={displayedTasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
