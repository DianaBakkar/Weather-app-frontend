import React, { useState } from 'react';
import axios from 'axios';
import { WeatherData } from '../types/types';

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('');

  const getWeatherData = async () => {
    try {
      const response = await axios.get<WeatherData>(`http://localhost:3000/weather/${city}`);
      console.log('Weather Data Response:', response.data);
      setWeatherData(response.data);

    } catch (error) {
      console.error('Error fetching weather data:', error);
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
      <button onClick={getWeatherData}>Get Weather</button>

      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherData.temperature} °F</p>
          <p>Humidity: {weatherData.humidity} %</p>
          <p>Wind Speed: {weatherData.wind_speed} mph</p>
          <p>Cloudiness: {weatherData.cloudiness} %</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
