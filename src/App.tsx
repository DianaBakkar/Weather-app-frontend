import React from 'react';
import Weather from './components/Weather';
import WeatherGeo from './components/WeatherGeo';
import WeatherForecast from './components/WeatherForecast';


function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <WeatherGeo/>
      <WeatherForecast/>
    </div>
  );
}

export default App;
