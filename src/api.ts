import axios from 'axios';

const API_KEY = '2fa0740b5ebb4f87a2735010243011';
const BASE_URL1 = 'https://api.weatherapi.com/v1/current.json';
const BASE_URL2 = 'https://api.weatherapi.com/v1/forecast.json';


export const fetchWeather = async (city: string) => {
    try {
      const response = await axios.get(BASE_URL1, {
        params: {
          key: API_KEY,
          q: city,
        },
      });
      console.log('WeatherAPI Response:', response.data);
      return response.data;
    } catch (error) {
      alert("Invalid")
      console.error('Error fetching weather:', error);
      throw error;
    }
};

export const fetchWeatherForecast = async (city: string, days = 5) => {
  try {
    const response = await axios.get(BASE_URL2, {
      params: {
        key: API_KEY,
        q: city,
        days,
      }
    })
    console.log('WeatherAPI Response:', response.data);
    return response.data;
  } catch (error) {
    alert("Invalid")
    console.error('Error fetching weather:', error);
    throw error;
  }
}