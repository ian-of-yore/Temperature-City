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
    // console.log(tempData);

    // collecting elements by id
    const cityName = document.getElementById("city-name");
    const currentTemp = document.getElementById("current-temp");
    const feelLikeTemp = document.getElementById("feels-like-temp");
    const weatherType = document.getElementById("weather-type");

    // Setting innerText of the elements
    cityName.innerText = tempData.name;
    currentTemp.innerText = tempData.main.temp;
    feelLikeTemp.innerText = tempData.main.feels_like;
    weatherType.innerText = tempData.weather[0].description;

}