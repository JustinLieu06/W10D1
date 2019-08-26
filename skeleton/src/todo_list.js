const todos = [];
let form1 = document.getElementsByClassName("add-todo-form");
let ulTodos = document.getElementsByClassName("todos");

form1[0].addEventListener("submit", (e) => {
  e.preventDefault();
  let newTodo = document.getElementsByName("add-todo");
  let listEl = document.createElement("li");
  let labelTag = document.createElement("label");
  labelTag.innerHTML = newTodo[0].value;
  listEl.appendChild(labelTag);
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listEl.appendChild(checkbox);
  // todos.push(listEl);
  ulTodos[0].appendChild(listEl);
  newTodo[0].value = "";
});