const API_KEY = "79dacb4d014ef5eb65d9cb190c66799c";

function onGeoOk(position){
    //user의 위치를 전달받은 후 위도, 경도 불러오기
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather .weather-first");
        const city = document.querySelector("#weather .weather-second");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}, ${data.main.temp}`;

        const weathericon = document.createElement('img');
        weathericon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        weathericon.classList.add('bigicon');
        document.querySelector('#weather .weather-icon').appendChild(weathericon);
    });


}

function onGeoErr(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
//브라우저에서 위치 좌표를 준다.

