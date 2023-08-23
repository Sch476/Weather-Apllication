import React, { useState, useEffect } from 'react';
import WeatherCard from './Components/WeatherCard';
import { fetchWeatherData } from './api';
import background from "./images/default.jpg";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [locationPermission, setLocationPermission] = useState(false);

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherData(latitude, longitude)
            .then((data) => setWeatherData(data))
            .catch((error) => console.error('Error fetching weather data:', error));
          setLocationPermission(true);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.log('Geolocation is not available');
    }
  };

  const handleSearch = (cityName) => {
    fetchWeatherDataByCity(cityName);
  };

  const fetchWeatherDataByCity = (cityName) => {
    const API_KEY = '191745d24105ea2dd720cc01f95873dd';
    
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error('Error fetching weather data:', error));
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {locationPermission && weatherData && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <WeatherCard weatherData={weatherData} onSearch={handleSearch} />
        </div>
      )}
    </div>
  );
};

export default App;
