
const apiKey = "e846c6b25564271f86ffb608ef02967d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-box input");
const searchBtn = document.querySelector(".search-box button");
const weatherIcon = document.querySelector(".weather-box img");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".weather-box").style.display = "none";
        document.querySelector(".weather-details").style.display = "none";
        alert("City not found");
    } else {
        const data = await response.json();

        document.querySelector(".weather").innerHTML = data.weather[0].main;
        document.querySelector(".temprature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".description").innerHTML = data.weather[0].description;
        document.querySelector(".info-humidity span").innerHTML = data.main.humidity + "%";
        document.querySelector(".info-wind span").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather-box").style.display = "block";
        document.querySelector(".weather-details").style.display = "flex";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchBox.value);
    }
});


