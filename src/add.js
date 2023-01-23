export default function addTask() {
    let newTaskText = document.getElementById('task-user-input').textContent;         //take text from input when add button is clicked and make it a new button entry in the list
    let taskList = document.getElementById('task-list');
    let newTaskBtn = document.createElement('button');
    let newListElement = document.createElement('li');
    taskList.appendChild(newListElement);
    newTaskBtn.textContent = newTaskText; 
    newListElement.appendChild(newTaskBtn);
    newTaskText.textContent = '';
    changeTaskInputDisplay();                                                     //input div to disappear again
}

export default function addProject() {
    let newProjectText = document.getElementById('project-user-input').textContent;         //take text from input when add button is clicked and make it a new button entry in the list
    let projectList = document.getElementById('project-list');
    let newProjectBtn = document.createElement('button');
    let newListElement = document.createElement('li');
    projectList.appendChild(newListElement);
    newProjectBtn.textContent = newProjectText; 
    newListElement.appendChild(newProjectBtn);
    newProjectText.textContent = '';
    changeProjectInputDisplay();

}