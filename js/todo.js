const todoForm = document.querySelector("#todo-form");
const toDoInput = todoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list");
let toDos = [];
//localStorage에 저장하기 위한 빈 배열 만들기
const TODOS_KEY = "todos";

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);


// 화살표 함수를 쓰면 없어도 되는 부분 function sayHello(item){
//     console.log("This is turn of" , item);
// }

//if(savedToDOs ==! null)
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}