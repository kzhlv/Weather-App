import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    const API_KEY = "48cf2fecd86b2920828a6a74409d5ee4";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather`;

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(API_URL, {
                params: {
                    q: city,
                    appid: API_KEY,
                    units: 'metric',
                },
            });
            setWeatherData(response.data);
            setError(null);
        } catch (error) {
            setWeatherData(null);
            setError('City not found');
        }
    };

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData();
    };

    return (
        <div className="weather-app">
            <div className='weather'>وكل شيء حسب مشيئة الله</div>
            <form className="forma" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={handleChange}
                />
                <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.name}</h2>
                    <p>{weatherData.weather[0].description}</p>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Humidity: {weatherData.main.humidity}%</p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
            <div id="fabrizio"></div>
            <a href="http://fabrizio.co">fabrizio.co</a>

            <div class="container">
                <div class="sunny"></div>
                <div class="cloudy"></div>
                <div class="rainy"></div>
                <div class="snowy"></div>
                <div class="rainbow"></div>
                <div class="starry"></div>
                <div class="stormy"></div>
            </div>
        </div>
    );
};

export default WeatherApp;
