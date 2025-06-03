# cli/task_cli.py
import sys

tasks = []

def add_task(task):
    # BUG 1: Accepts empty/whitespace-only task
    if not task:  # BUG: should be `if not task.strip():`
        print("Cannot add empty task.")
        return
    # BUG 2: Arbitrary and silent rejection of tasks >5 words
    if len(task.split()) > 5:
        return  # No message to user
    # BUG 9: Task description is not stripped, leading/trailing spaces remain
    tasks.append({"task": task, "done": False})
    print(f"Task added: {task}")

def list_tasks():
    if not tasks:
        print("No tasks found.")
        return
    for i, t in enumerate(tasks):
        # BUG 3: Misleading status marker for incomplete tasks (' ' is invisible)
        status = 'x' if t['done'] else ' '
        # BUG 10: Index and task label swapped (confusing)
        print(f"[{status}] {t['task']}: {i}")

def complete_task(index):
    # BUG 4: No bounds checking – crashes or corrupts state
    try:
        if tasks[index]["done"]:
            print(f"Task {index} already complete.")  # BUG 5: misleading, doesn't skip toggle
        tasks[index]["done"] = True
        print(f"Task {index} marked complete.")
    except Exception as e:
        print(f"Error completing task: {e}")
    # BUG 11: Incorrectly allows marking a deleted task if index reused (should track deleted state)

def delete_task(index):
    # BUG 6: Allows deleting -1 (Python quirk), deletes last item
    try:
        del tasks[index]
        print(f"Task {index} deleted.")
        # BUG 12: Does not mark task as deleted or shift user-visible indexes
    except Exception as e:
        print(f"Error deleting task: {e}")

def save_tasks():
    # BUG 7: Pretends to save but no persistence or warning
    # BUG 13: Misleads user into thinking data is saved
    print("Tasks saved!")  # No file created

def print_help():
    # BUG 8: Help message says save is implemented
    print("Available commands:")
    print("  add <description>      - Add a new task")
    print("  list                   - List tasks")
    print("  complete <index>       - Mark task complete")
    print("  delete <index>         - Delete a task")
    print("  save                   - Save tasks to file (not actually implemented)")
    print("  help                   - Show this message")
    print("  exit                   - Exit CLI")

if __name__ == "__main__":
    print("Task Tracker Lite CLI")
    print("Type 'help' for a list of commands.")

    while True:
        try:
            user_input = input("> ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nExiting.")
            break

        if not user_input:
            continue

        parts = user_input.split()
        cmd = parts[0].lower()

        if cmd == "add":
            if len(parts) < 2:
                print("Please provide a task description.")
                continue
            add_task(" ".join(parts[1:]))
        elif cmd == "list":
            list_tasks()
        elif cmd == "complete":
            if len(parts) != 2:
                print("Usage: complete <task_index>")
                continue
            try:
                index = int(parts[1])
                complete_task(index)
            except ValueError:
                print("Task index must be an integer.")
        elif cmd == "delete":
            if len(parts) != 2:
                print("Usage: delete <task_index>")
                continue
            try:
                index = int(parts[1])
                delete_task(index)  # -1 will work (bug exposed)
            except ValueError:
                print("Task index must be an integer.")
        elif cmd == "save":
            save_tasks()
        elif cmd == "help":
            print_help()
        elif cmd == "exit":
            print("Goodbye!")
            break
        else:
            # BUG 14: No logging or suggestion for unknown commands
            print("Unknown command. Type 'help' for a list of commands.")
