/*
const toDoInput = document.querySelector('.item');
const toDoButton = document.querySelector('.toDoButton');
const add = document.querySelector('.add');



function addTodo (event){

//prevent from refreshing
event.preventDefault();
}

//add new item and save to the list
  //submit button

//delete item already on the list
  //trash can or red x

//edit item (text) already on the list
  //tap on text or specific edit button

*/

//Selectors
const  todoInput = document.querySelector(".item");
const  todoButton = document.querySelector(".todo-button");
const  todoList = document.querySelector(".each-items");

//Event Listeners
todoButton.addEventListener('click', addTodo);
//trash button
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){

  console.log('hello');
  //Prevent form from submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  //Create LI
  const newTodo = document.createElement('li' );
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //Check Trash Button
  //Creating Element
  const trashButton = document.createElement('button');
  //Set HTML content 
  trashButton.innerHTML = '<i class="fa fa-minus-square"></i>'; 
  //Add an identifier
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  
  //Append to Listeners
  todoList.appendChild(todoDiv);

  //Clear Todo Input value
  todoInput.value = "";
}

function deleteCheck(e){
  //retrieve a reference to the parent node (list item)
  const item = e.target.parentNode;
  if(item.classList[0] === "trash-btn"){
    const todo = item.parentElement;
    todo.remove();
  }
}