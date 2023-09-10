// src/components/Task.js
import React from "react";

const Task = ({ task, onDelete }) => {
  const { name, dueDate } = task;

  return (
    <div className="task">
      <div>
        <span className="task-name">{name}</span>
        <span className="task-due-date">Due: {dueDate}</span>
      </div>
      <button className="delete-button" onClick={() => onDelete(task)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
