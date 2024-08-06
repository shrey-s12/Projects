const body = document.body;

// Container
const container = document.createElement('div');
body.appendChild(container);
container.style.border = "2px solid black";
container.style.minHeight = "50vh";
container.style.padding = "20px 0px";
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.flexDirection = "column";

// Container for inputField & addButton
const container1 = document.createElement('div');
container.appendChild(container1);

// Input Field
let input = document.createElement('input');
input.id = "tasks";
input.style.fontSize = "20px"
input.placeholder = "Enter your Task";
container1.appendChild(input);

// Add button
let button = document.createElement("button");
button.innerText = "Add Task";
button.id = "addtask";
button.style.fontSize = "20px"
container1.appendChild(button);

// Container For Tasks
let tasklist = document.createElement('div');
tasklist.id = "tasklist";
container.appendChild(tasklist);

// Function to trim the input
button.addEventListener('click', function () {
    let task = document.getElementById('tasks');
    let taskValue = task.value.trim();

    if (taskValue == "") {
        alert("Input is Empty!!");
        return;
    }


    // Div container for task element
    let taskElement = document.createElement('div');
    taskElement.className = "taskelement";
    taskElement.innerText = taskValue;
    taskElement.style.marginTop = "5px";
    taskElement.style.display = "flex";
    taskElement.style.justifyContent = "space-between";
    tasklist.appendChild(taskElement);

    // Delete Button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.style.marginLeft = "10px"
    taskElement.appendChild(deleteButton);

    // Function for remove task
    deleteButton.addEventListener('click', function () {
        tasklist.removeChild(taskElement);
    });

    input.value = "";

});