const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

const deleteTask = (button) => {
  button.parentElement.remove();
};

const addTask = () => {
  todoInput.value
    ? (todoList.innerHTML += `<li>${todoInput.value} <button onclick="deleteTask(this)">Delete</button></li>`)
    : alert("Please enter a task.");
  todoInput.value = "";
};
