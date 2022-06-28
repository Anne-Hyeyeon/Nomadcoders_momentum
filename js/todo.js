const todoForm = document.querySelector("#todo-form");
const toDoInput = todoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");
const toDos = [];
//localStorage에 저장하기 위한 빈 배열 만들기

function saveToDos(){
    localStorage.setItem("todos", toDos)
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //submit 할 때 새로고침 방지
    const newTodo = toDoInput.value;
    //input의 value 변수에 저장
    toDoInput.value = "";
    //value 값 초기화
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);