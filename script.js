const todoForm = document.querySelector(".main form");
const todoInput = document.querySelector(".todo-input");
const todoFilter = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit", addTodo);
todoFilter.addEventListener("change", filterTodo);
todoList.addEventListener("click", checkTodo);

document.addEventListener("DOMContentLoaded", getTodosFromLocalStorage);

function getTodosFromLocalStorage() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => {
        const li = createTodoItem(todo.text, todo.completed);
        todoList.append(li);
    });
}

function saveTodosToLocalStorage() {
    const todos = [...document.querySelectorAll(".todo-item")].map((item) => ({
        text: item.querySelector(".todo-text").innerText,
        completed: item.classList.contains("completed"),
    }));

    localStorage.setItem("todos", JSON.stringify(todos));
}

function createTodoItem(text, completed = false) {
    const li = document.createElement("li");
    li.classList.add("todo-item");
    if (completed) {
        li.classList.add("completed");
    }

    const span1 = document.createElement("span");
    span1.classList.add("todo-text");
    span1.innerText = text;

    const span2 = document.createElement("span");
    span2.innerHTML = "<i class='fa-solid fa-check'></i>";
    span2.innerHTML += "<i class='fa-solid fa-trash'></i>";

    li.append(span1);
    li.append(span2);

    return li;
}

function addTodo(e) {
    e.preventDefault();
    const value = todoInput.value.trim();
    if (value === "") {
        return;
    }

    const li = createTodoItem(value);
    todoInput.value = "";
    todoList.append(li);
    saveTodosToLocalStorage();
}

function checkTodo(e) {
    if (e.target.classList.contains("fa-trash")) {
        const todoItem = e.target.parentElement.parentElement;
        todoItem.remove();
        saveTodosToLocalStorage();
    } else if (e.target.classList.contains("fa-check")) {
        const todoItem = e.target.parentElement.parentElement;
        todoItem.classList.toggle("completed");
        saveTodosToLocalStorage();
    }
}

function filterTodo(e) {
    const todos = document.querySelectorAll(".main ul li");
    todos.forEach(todo => {
        if (e.target.value === "all") {
            todo.style.display = "block";
        } else if (e.target.value === "completed") {
            if (todo.classList.contains("completed")) {
                todo.style.display = "block";
            } else {
                todo.style.display = "none";
            }

        } else if (e.target.value === "active") {
            if (!todo.classList.contains("completed")) {
                todo.style.display = "block";
            } else {
                todo.style.display = "none";
            }
        }
    });

}
