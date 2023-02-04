import _ from "lodash";
import "./style.css";
import { todos, Todo, rightCol } from "./modules/class.js";

const add = document.querySelector(".p-add");
const popup = document.querySelector(".popup");
const popup2 = document.querySelector(".popup2");
const cancel = document.querySelector(".cancel");
const more = document.querySelectorAll(".more");

add.addEventListener("click", () => {
  popup.classList.toggle("active");
});
cancel.addEventListener("click", () => {
  popup.classList.remove("active");
});

more.forEach((e) => {
  e.addEventListener("click", () => {
    popup2.classList.toggle("active");
  });
});

const addBtn = document.querySelector('.add-btn');
const newTitle = document.querySelector('.pop-input');
const newDescription = document.querySelector('#description');

const workFilter = document.querySelector('.work-filter');
workFilter.addEventListener('click', () =>{
  workFilter.classList.toggle('active');
  const newTodo = new Todo();
  newTodo.toggleWorkStatus();
});

addBtn.addEventListener('click', () => {
  const newTodo = new Todo(newTitle.value, newDescription.value);
  todos.push(newTodo);
  newTodo.toggleWorkStatus();
  Todo.addTodo();
  console.log(todos);
});

