let todos = [];
const rightCol = document.querySelector(".right-col");

class Todo {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.id = todos.length;
    this.isWork = false;
    this.isStudy = false;
    this.isEntertainment = false;
    this.isFamily = false;
    this.isCompleted = false;
  }

  static addTodo() {
    rightCol.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
      `
            <div class="task">
            <div class="task-head">
              <p class="title">${todos[i].title}</p>
              <p class="more">...</p>
            </div>
            <div class="popup2">
              <p class="popup-edit2">Edit</p>
              <p class="popup-delete2">Delete</p>
            </div>
            <article>${todos[i].description}</article>
            <div class="task-footer">
              <div class="task-type">
                <div class="work"></div>
                <div class="family"></div>
              </div>
              <label for="" class="label"> <input type="checkbox" />Done </label>
            </div>
          </div>
            `;
    }
  }

}

export {todos, Todo, rightCol};