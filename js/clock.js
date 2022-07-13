const clock = document.querySelector("#clock");
const datepicker = document.querySelector("#datepicker");
const date = new Date();

function getClock(){
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getDate(){
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    datepicker.innerText = `${year}.${month+1}.${day}`;
}

getClock();
setInterval(getClock, 1000);

getDate();