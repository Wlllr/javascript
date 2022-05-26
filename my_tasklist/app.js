// Define UI vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');
const taskList = document.querySelector('.collection');

// Load event listeners
loadEventlisteners();

// Load event listeners 
function loadEventlisteners() {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }


    e.preventDefault();
}