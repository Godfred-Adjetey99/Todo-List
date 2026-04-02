const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

const toDoItems = [];

const deleteTask = (button) => {
  button.parentElement.remove();
};

const addTask = () => {
  const item = todoInput.value;
  toDoItems.push(item);

  console.log(toDoItems);

  todoInput.value = "";
};
