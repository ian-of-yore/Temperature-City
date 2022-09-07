const apiKey = `cc2594b281a9856fb1d416f0c67efa74`;

const loadTemperature = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

document.getElementById("btn-city-search").addEventListener("click", function () {
    // getting city data by the user input
    const citySearch = document.getElementById("city-search").value;
    loadTemperature(citySearch);

})

function displayTemperature(tempData) {
    setInnerTextbyID("city-name", tempData.name);
    setInnerTextbyID("current-temp", tempData.main.temp);
    setInnerTextbyID("feels-like-temp", tempData.main.feels_like);
    setInnerTextbyID("weather-type", tempData.weather[0].description);
}

function setInnerTextbyID(id, text) {
    const city = document.getElementById(id);
    return city.innerText = text;
}