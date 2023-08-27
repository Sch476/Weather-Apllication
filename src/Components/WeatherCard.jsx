import React, { useState } from 'react';
import image from "../cloudy-day.png";

const WeatherCard = ({ weatherData, onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchInput);
  };

  const { name, main, weather, wind, visibility } = weatherData;
  const temperature = main.temp;
  const weatherDescription = weather[0].description;
  const humidity = main.humidity;
  const windSpeed = wind.speed;
  const visibilityMeters = visibility;

  return (
    <div>
      <form className="max-w-sm px-4 pb-10" onSubmit={handleSearchSubmit}>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchChange}
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
          />
        </div>
      </form>
      <div className="flex p-8 bg-gray-700 text-white rounded shadow-xl text-center">
        <div className="flex flex-col pr-6">
          <img src={image} alt='Symbol' style={{width:250, height: 250}}/>
          <h1 className=' text-5xl'>Weather Report</h1>
          <h2 className="text-2xl font-semibold mb-4">{name}</h2>
          <div className="text-4xl mb-2">{Math.round(temperature)}°C</div>
          <div className="text-lg">{weatherDescription}</div>

          <div className="flex flex-col">
            <p className="mb-1">Humidity: {humidity}%</p>
            <p className="mb-1">Wind Speed: {windSpeed} m/s</p>
            <p className="mb-4">Visibility: {visibilityMeters / 1000} km</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;