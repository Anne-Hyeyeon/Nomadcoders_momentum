
const loginForm = document.querySelector("#login-form")
//loginForm은 HTML element이다. 이 안의 요소들에 대한 정밀한 조사 (이 안의 element를 찾거나, 값을 바꾸는 게 가능함.)
const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button"); form을 입력하면 필요 없는 것!


const searchForm = document.querySelector("#search-form");

const logout = document.querySelector("#logout")


const link = document.querySelector("a");

const greeting = document.querySelector("#greeting");


const menutodo = document.querySelector("#menu-todo")

const todotitle = document.querySelector("#exampleModalLabel")

const HIDDEN_CLASSNAME = "hidden"
//string만 있는 변수는 대문자로 하는 관습.

const USERNAME_KEY = "username"

/* input과 button을 가져오는 또다른 방법 
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
*/


/*
이전 시간에 작성한 코드
function onLoginBtnClick(){
    console.dir(loginInput);
    //input 안의 object를 찾고, 그 안의 'value'에 주목해보자. 내 input 안의 값을 뜻하는 property이다. 
    console.log(loginInput.value);
    //여기서 값이 없을 때의 처리법을 찾아야한다. (input에 값이 입력되지 않았을 경우.)
    console.log("click");
}
*/


/*
글자 수 체크 기능
function onLoginBtnClick(){
    const username = loginInput.value;
    if(username === ""){
        //이름이 입력되지 않았을 때
        alert("Please write your name.")
    } else if(username.length > 15) {
        //이름 글자수 체크
        alert("Your name is too long.")
    }
}
*/

/*
form으로 submit할 때 필요 없어지는 기능
function onLoginBtnClick(){
    const username = loginInput.value;
    console.log(username)
}
*/

function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    searchForm.classList.remove(HIDDEN_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    menutodo.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText =  `Hello ${username}!`;
    const span = document.createElement("span");
    span.innerText = `🥰 ${username}'s `
    todotitle.prepend(span);
}


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // greeting.innerText = "Hello " + username;
    //username이라는 변수에 value값 저장.
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


/* 4-3 link로 event의 속성 심화 학습
function handleLinkClick(event){
    event.preventDefault();
    console.log(event);
}

link.addEventListener("click", handleLinkClick);
*/



const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit" , onLoginSubmit);
} else {
    // show the greetings
    paintGreetings(savedUsername);
    //localStorage로부터 받아온 이름을 paintGreeting에 전달
}

