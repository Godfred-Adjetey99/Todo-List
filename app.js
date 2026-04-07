const todoInput = document.querySelector("#todoInput");
const dateInput = document.querySelector("#dueDateInput");
const addTodoBtn = document.querySelector("#addTodoButton");

const todoList = [{ name: "wash cloths", dueDate: "22-040-26" }];

const renderHtml = () => {
  let todoHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const addListObject = todoList[i];
    const { name, dueDate } = addListObject;

    const html = `
    <div>${name} </div>
    <div>${dueDate}</div>
    <button onClick="todoList.splice(${i}, 1);
    renderHtml();
    ">Delete</button>
    `;
    todoHTML += html;
  }

  document.querySelector("#todoHTML").innerHTML = todoHTML;
};

renderHtml();

const addTask = () => {
  const name = todoInput.value;
  const dueDate = dateInput.value;
  todoList.push({ name, dueDate });

  todoInput.value = "";

  renderHtml();
};
