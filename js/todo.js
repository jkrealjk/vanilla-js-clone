const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDolists = document.querySelector("#todo-list");
let toDoArray = [];

function savedToDos() {
  localStorage.setItem("todos", JSON.stringify(toDoArray));
}

function paintToDo(toDo) {
  const li = document.createElement("li");
  li.id = toDo.id;
  const span = document.createElement("span");
  span.innerText = toDo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", removeList);
  li.appendChild(span);
  li.appendChild(button);
  toDolists.appendChild(li);
}

function removeList(event) {
  const parentLi = event.target.parentElement;
  parentLi.remove();
  toDoArray = toDoArray.filter((item) => item.id !== parseInt(parentLi.id));
  savedToDos();
}

function handleTodo(event) {
  event.preventDefault();
  const toDo = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    text: toDo,
    id: Date.now(),
  };
  toDoArray.push(toDoObj);
  paintToDo(toDoObj);
  savedToDos();
}

toDoForm.addEventListener("submit", handleTodo);

const savedDos = JSON.parse(localStorage.getItem("todos"));

if (savedDos !== null) {
  toDoArray = savedDos;
  savedDos.forEach(paintToDo);
}
