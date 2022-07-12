const logoutbtn = document.querySelector("#logout");

logoutbtn.addEventListener("click", logoutFunc)

function logoutFunc() {
    localStorage.removeItem("username");
    location.reload();
}