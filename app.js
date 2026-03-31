const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

const todos = [];

const addTodo = () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todo = {
      id: Date.now(),
      text: todoText,
    };
    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  }
};
