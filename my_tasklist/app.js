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
    } else {
       // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Create text and append li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create new link element
        const link = document.createElement('a');
        // Add class 
        link.className = 'delete-item';
        // Add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        //append link to li
        li.appendChild(link);
        // Append the li to ul
        taskList.appendChild(li);

        // Clear input
        taskInput.value = ''; 
    }

    

    e.preventDefault();
}