import _ from 'lodash';
import changeTaskInputDisplay() from './print.js';

function createTask() {
    
    
}




function changeProjectInputDisplay() {
    let projectInput = document.getElementById('project-container');
    if (projectInput.style.display === 'none') {
        projectInput.style.display === 'block'
    } else {
        projectInput.style.display === 'none'
    };
}

function addTask() {
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

function addProject() {
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

function cancelAddTask(){
    //make task input div or form disappear
    //get element by Id and change display to none
    //clear input text field
}

function cancelAddProject(){
    //make input div disappear again
    //get element by Id and change display to none
    //clear input text field
}

function deleteTask() {
    //remove li element from the ul
}

function deleteProject() {
    //remove li element from the ul
}