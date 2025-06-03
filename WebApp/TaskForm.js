// webapp/TaskForm.js
import React, { useState } from 'react';

function TaskForm({ onAdd }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Bug: No check for empty input
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;