import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../types/types';

const WeatherGeo: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const getWeatherData = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const city = await getCityName(latitude, longitude);
          await fetchWeatherData(city);
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  };

  const getCityName = async (latitude: number, longitude: number): Promise<string> => {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    return response.data.address.city || response.data.address.town || response.data.address.village;
  };

  const fetchWeatherData = async (city: string) => {
    try {
      const response = await axios.get<WeatherData>(`http://localhost:3000/weather/${city}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <button onClick={getWeatherData}>Get Weather by GeoLocation</button>
      {weatherData ? (
        <div>
          <h2>Weather for current Location </h2>
          <p>Temperature: {weatherData.temperature} °F</p>
          <p>Humidity: {weatherData.humidity} %</p>
          <p>Wind Speed: {weatherData.wind_speed} mph</p>
          <p>Cloudiness: {weatherData.cloudiness} %</p>
        </div>
      ) : (
        <p>Click the button to get weather data</p>
      )}
    </div>
  );
};

export default WeatherGeo;
