// README.md

# Task Tracker Lite (Testing Interview Project)

## 📝 Overview
This is a deliberately buggy task management app meant for testing/QA interviews. It includes both a **web app** and a **CLI tool**, each with embedded issues to evaluate a candidate’s ability to identify, document, and suggest fixes.

---

## 📦 Project Structure
```
task-tracker-lite/
├── webapp/             # React-based Web App
│   ├── App.js
│   ├── TaskForm.js
│   ├── TaskList.js
│   └── index.html
├── cli/                # Python CLI Tool
│   └── task_cli.py
└── README.md           # This file
```

---

## 🖥 Web App
Built using **React**. Tasks are stored in browser memory (not persisted).

### 🐛 Known Bugs in Web App
| Feature | Bug Description |
|--------|------------------|
| Add Task | Allows empty task submission |
| Mark Complete | Marks wrong task due to index mismatch |
| Delete Task | Deletes incorrect task |
| UI Refresh | Added task may not show without manual refresh |
| Responsive Design | Breaks on small screen sizes |

### 🛠 Setup
```bash
cd webapp
npm install
npm start
```

---

## 💻 CLI Tool (Python)
Lightweight CLI-based task tracker written in Python 3.

### 🐛 Known Bugs in CLI
| Command | Bug Description |
|---------|------------------|
| add     | Tasks with >5 words are silently not saved |
| delete  | Deleting task with index 0 crashes the app |
| complete | No index validation; may throw exception |
| save     | Says tasks are saved, but does not persist |

### 🛠 Setup
```bash
cd cli
python task_cli.py add "Sample task"
python task_cli.py list
```

---

## ✅ Interview Task for Candidates
Candidates should:
1. Use both the **web app** and **CLI tool**
2. Report **bugs**, **steps to reproduce**, and **expected behavior**
3. Suggest possible **fixes** or improvements
4. (Bonus) Attempt to write a basic test suite

---

## 📎 Notes
- Webapp uses functional components + hooks.
- CLI intentionally avoids external dependencies.
- No authentication, user roles, or real persistence.

---

## 📫 Contact
This is a mock project. Please direct feedback to the interviewing team.
