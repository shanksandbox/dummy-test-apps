# 🐞 Bug Report: Task Tracker Lite

## Overview

This document summarizes all known bugs intentionally embedded in the **Task Tracker Lite** project. It includes both **Web App (React)** and **CLI Tool (Python)** components. Each bug includes a description, reproduction steps, expected behavior, and suggested fixes.

---

## 🖥 Web App Bugs

### 1. Allows Empty Tasks

- **File**: `TaskForm.js`  
- **Type**: Input Validation  

**Steps to Reproduce**:
1. Click "Add Task" without typing anything.
2. Observe a blank task is added.

**Expected**: Input should be validated before submission.  
**Fix**: Check for empty/whitespace-only task before adding.

---

### 2. Wrong Task Marked Complete

- **File**: `App.js` → `toggleComplete`  
- **Type**: Logic Error  

**Steps to Reproduce**:
1. Add two tasks.
2. Click "Done" on the first.
3. Second task is marked complete.

**Expected**: Correct task should toggle.  
**Fix**: Use `index` instead of `index + 1`.

---

### 3. Wrong Task Deleted

- **File**: `App.js` → `deleteTask`  
- **Type**: Index Misuse  

**Steps to Reproduce**:
1. Add tasks.
2. Click "Delete" on a task.
3. An unexpected task is removed.

**Expected**: Correct task should be deleted.  
**Fix**: Use `splice(index, 1)` properly.

---

### 4. Tasks Not Updating Consistently

- **File**: UI behavior  
- **Type**: Inconsistent Render  

**Steps to Reproduce**:
1. Add a task.
2. Sometimes the task does not appear until another UI action.

**Expected**: New tasks should appear instantly.  
**Fix**: Likely resolved by fixing index or state update issues.

---

### 5. Non-Responsive UI

- **File**: `index.html` (no styles applied)  
- **Type**: Layout Bug  

**Steps to Reproduce**:
1. Open app on a mobile device.
2. Layout breaks or scrolls awkwardly.

**Expected**: Responsive layout.  
**Fix**: Add responsive CSS or use a UI framework (e.g., Bootstrap, Tailwind).

---

## 💻 CLI Tool Bugs

### 6. Tasks with >5 Words Not Saved

- **File**: `task_cli.py` → `add_task`  
- **Type**: Arbitrary Limitation  

**Steps to Reproduce**:
```bash
python task_cli.py add "This is a very long task input"
```

**Expected**: Task should be accepted or clear error shown.  
**Fix**: Remove or document the word limit.

---

### 7. Deleting Index 0 Crashes

- **File**: `task_cli.py` → `delete_task`  
- **Type**: Index Error  

**Steps to Reproduce**:
1. Add a task.
2. Run:
```bash
python task_cli.py delete 0
```

**Expected**: Should handle gracefully.  
**Fix**: Validate index bounds before deleting.

---

### 8. No Index Check on `complete`

- **File**: `task_cli.py` → `complete_task`  
- **Type**: Index Error  

**Steps to Reproduce**:
```bash
python task_cli.py complete 5
```

**Expected**: Should not allow invalid index.  
**Fix**: Check index bounds before completing task.

---

### 9. `save` Command Doesn’t Save

- **File**: `task_cli.py` → `save_tasks`  
- **Type**: UX Misleading  

**Steps to Reproduce**:
1. Add a task.
2. Run:
```bash
python task_cli.py save
```
3. Reopen tool—task is gone.

**Expected**: Should persist data or indicate no actual save.  
**Fix**: Save to a JSON file or remove misleading message.

---

## 📊 Summary Table

| ID | Location             | Bug                     | Severity |
|----|----------------------|--------------------------|----------|
| 1  | Web - `TaskForm.js`  | Empty task allowed       | Medium   |
| 2  | Web - `App.js`       | Wrong task toggled       | High     |
| 3  | Web - `App.js`       | Wrong task deleted       | High     |
| 4  | Web - UI             | Inconsistent UI update   | Medium   |
| 5  | Web - Layout         | Not responsive           | Low      |
| 6  | CLI - `add_task`     | >5 word limit            | Medium   |
| 7  | CLI - `delete_task`  | Crashes on index 0       | High     |
| 8  | CLI - `complete_task`| No index validation      | Medium   |
| 9  | CLI - `save_tasks`   | Fake save                | Low      |

---

## ✅ Next Steps

- Let candidates explore and document these bugs.
- Optionally assign fixes as part of follow-up tasks.
