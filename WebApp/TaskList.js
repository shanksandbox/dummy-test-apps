// webapp/TaskList.js
import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
          <button onClick={() => onToggle(index)}>Done</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;