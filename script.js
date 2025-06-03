const tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  // BUG 1: Accepts empty task
  if (!taskText) {
    alert("Task cannot be empty.");
    return;
  }

  // BUG 2: Rejects >5 words without feedback
  if (taskText.split(" ").length > 5) {
    return;
  }

  // BUG 3: Doesn't trim whitespace
  // BUG 9: Allows duplicate task entries
  tasks.push({ text: taskText, done: false });
  input.value = "";
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  // BUG 12: Completing or deleting when tasks.length == 0 will throw error

  if (tasks.length === 0) {
    list.innerHTML = "<li>No tasks found.</li>";
    return;
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    // BUG 4: Incomplete task marker is a blank space
    // BUG 10: Double click "complete" shows no visual update
    li.innerHTML = `
      [${task.done ? "x" : " "}] ${index}: ${task.text}
      <button onclick="completeTask(${index})">Complete</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    list.appendChild(li);
  });
}

function completeTask(index) {
  // BUG 5: No bounds check
  if (tasks[index].done) {
    alert(`Task ${index} already complete.`);
  }
  tasks[index].done = true;
  renderTasks();
}

function deleteTask(index) {
  // BUG 6: -1 deletes last task
  tasks.splice(index, 1);
  renderTasks();
}

function saveTasks() {
  // BUG 7: No actual save or storage
  alert("Tasks saved!");
}

// BUG 8: No keyboard support (Enter doesn't submit)
document.getElementById("taskInput").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // BUG: does nothing on Enter press
  }
});
