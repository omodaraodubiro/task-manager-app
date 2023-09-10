// src/components/TaskList.js
import React from "react";
import Task from "./task";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks to display</p>
      ) : (
        tasks.map((task) => (
          <Task key={task.id} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TaskList;
