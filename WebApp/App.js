// webapp/App.js
import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    setTasks([...tasks, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    // Bug: wrong index used for toggle
    newTasks[index + 1].completed = !newTasks[index + 1].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    // Bug: deletes wrong index
    newTasks.splice(index - 1, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Task Tracker Lite</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleComplete} onDelete={deleteTask} />
    </div>
  );
}

export default App;
