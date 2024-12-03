const apiKey = "1d82329610e79731bf50634829919036";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".city");
const temperature = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const weather = document.querySelector(".weather");

const error = document.querySelector(".error");


async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";
    }
    else{
    var data = await response.json();
    console.log(data);

    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main=="Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if (data.weather[0].main=="Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    weather.style.display = "block";
    error.style.display = "none";
    }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

