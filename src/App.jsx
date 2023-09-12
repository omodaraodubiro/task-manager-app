import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TaskList from "./components/taskList";

// src/App.js

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", dueDate: "" });

  const handleAddTask = () => {
    if (newTask.name && newTask.dueDate) {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
      setNewTask({ name: "", dueDate: "" });
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <div className="task-form">
        <input
          type="text"
          placeholder="Task Name"
          value={newTask.name}
          onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
          className="first-form"
        />
        <input
          type="date"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
          className="second-form"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;
