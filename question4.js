// Array to store tasks
let tasks = [];

// Task Model
class Task {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
}

// Create a new task
function createTask(name, description) {
    const id = tasks.length + 1;  // Generate a new id
    const newTask = new Task(id, name, description);
    tasks.push(newTask);
}

// View all tasks
function viewTasks() {
    return tasks;
}

// Update a task
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.name = updatedName;
        task.description = updatedDescription;
    }
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
}

// Example Usage
createTask('Task 1', 'Description for Task 1');
createTask('Task 2', 'Description for Task 2');
console.log(viewTasks());

updateTask(1, 'Updated Task 1', 'Updated description for Task 1');
console.log(viewTasks());

deleteTask(2);
console.log(viewTasks());