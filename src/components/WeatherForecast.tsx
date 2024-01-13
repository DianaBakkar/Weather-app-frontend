import React, { useEffect, useState } from "react";
import { WeatherDataForecast } from '../types/types';

const WeatherForecast: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataForecast | null>(null);
  const [city, setCity] = useState("");
  const [showForecast, setShowForecast] = useState(false);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/weatherForecast/${city}`);
        const data: WeatherDataForecast = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    if (showForecast && city) {
      getWeatherData();
    }
  }, [city, showForecast]);

  const handleGetForecast = async (days: number) => {
    try {
      const response = await fetch(`http://localhost:3000/weatherForecast/${city}`);
      const data: WeatherDataForecast = await response.json();
      setWeatherData({
        ...data,
        list: data.list.slice(0, days * 8) 
      });
      setShowForecast(true);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={() => handleGetForecast(5)}>Get Weather Forecast for 5 days</button>
      <button onClick={() => handleGetForecast(3)}>Get Weather Forecast for 3 days</button>

      {showForecast && weatherData && (
        <div>
          <h2>{weatherData.city.name}</h2>
          <ul>
            {weatherData.list.map((forecast) => (
              <li key={forecast.dt}>
                <p>Date and Time: {forecast.dt_txt}</p>
                <p>Temperature: {forecast.main.temp} °C</p>
                <p>Weather: {forecast.weather[0].description}</p>
                <p>Wind Speed: {forecast.wind.speed} m/s</p>
                <p>Humidity: {forecast.main.humidity}%</p>
                {forecast.rain && <p>Rain: {forecast.rain["3h"]} mm</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
