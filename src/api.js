const API_KEY = '191745d24105ea2dd720cc01f95873dd';

export const fetchWeatherData = async (latitude, longitude) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  );
  const data = await response.json();
  return data;
};
