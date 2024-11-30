import axios from 'axios';

const API_KEY = '2fa0740b5ebb4f87a2735010243011';
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

export const fetchWeather = async (city: string) => {
    try {
      const response = await axios.get(BASE_URL, {
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