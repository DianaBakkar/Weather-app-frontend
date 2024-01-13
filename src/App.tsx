import React, { useState } from 'react';
import Weather from './components/Weather';
import WeatherGeo from './components/WeatherGeo';
import WeatherForecast from './components/WeatherForecast';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/SignUp';
/*import SavedLocations from './components/SavedLocations';*/

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      {isAuthenticated ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
      <Weather />
      <WeatherGeo />
      <WeatherForecast />
      <Signup />
    </div>
  );
}

export default App;
