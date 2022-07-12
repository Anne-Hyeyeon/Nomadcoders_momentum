const btnTodoOpen = document.querySelector("#btnTodoList");

const toDoBox = document.querySelector("#todo-box");

btnTodoOpen.addEventListener("click", toggleFunc);

function toggleFunc(){
    if(btnTodoOpen.className === "opened"){
        toDoBox.classList.add("hidden");
        btnTodoOpen.classList.remove("opened")
    } else {
    btnTodoOpen.classList.add("opened");
    toDoBox.classList.remove("hidden"); 
}
}

