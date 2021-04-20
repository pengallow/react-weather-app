import React, { useState } from "react";
import axios from "axios";

export default function Search() {
    let [city, setCity] = useState("");
    let [temperature, setTemperature] = useState(null);
    let [condition, setCondition] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [windspeed, setWindspeed] = useState(null);
    let [icon, setIcon] = useState(null);

    function showWeather() {
        if (temperature) {
            return (
                <div>
                    <ul>
                        <li>Temperature: {Math.round(temperature)}ºC</li>
                        <li id="description">Description: {condition}</li>
                        <li>Humidity: {humidity}%</li>
                        <li>Wind: {windspeed} km/h</li>
                        <li>
                            <img src={icon} alt={condition} />
                        </li>
                    </ul>
                </div>
            );
        }
    }

    function updateCity(event) {
        setCity(event.target.value);
    }

    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setCondition(response.data.weather[0].description);
        setHumidity(response.data.main.humidity);
        setWindspeed(response.data.wind.speed);
        setIcon(`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    }

    function handleSubmit(event) {
        event.preventDefault();
        let apiKey = `3b69d9e884899e81040ee4e357f33f8b`;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleResponse);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="search" placeholder="Enter a city" onChange={updateCity} />
                <input type="submit" value="Search" />
            </form>
            <div>{showWeather()}</div>
        </div>
    );
}