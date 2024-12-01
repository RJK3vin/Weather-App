import { useState } from "react"
import { fetchWeather, fetchWeatherForecast } from "./api"
import { addFavoriteCity, setForeCast, setWeather } from "./weatherSlice"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import './App.css'
import { Link } from 'react-router-dom';
import { ForecastDay } from './weatherSlice';
import Toast from './toast';

  export default function App() {
    const [textboxvalue, setTextBoxValue] = useState("")
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();

    const Search = async (city: string) => {
      const data1 = await fetchWeather(city)

      dispatch(
        setWeather({
          city: data1.location.name,
          temperature: data1.current.temp_f,
          condition : data1.current.condition.text,
          icon : data1.current.condition.icon,
        })
      )

      const data2 = await fetchWeatherForecast(city, 5)

      const forecast = data2.forecast.forecastday.map((day: ForecastDay) => ({
        date : day.date,
        high : day.day.maxtemp_f,
        low : day.day.mintemp_f,
        condition : day.day.condition.text,
        icon : day.day.condition.icon,
      }))

      dispatch(setForeCast(forecast))
    }

    const addToFavorityCity = () => {
      dispatch(addFavoriteCity(city));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }

    const { city, temperature, condition, icon, forecast } = useSelector((state : RootState) => state.weather)

    return (
      <>
      <div className="app-container">
        <h1>Weather App</h1>
        <input placeholder = "Type" value = {textboxvalue} onChange={(event) => setTextBoxValue(event.target.value)} className="input-box"></input> 
        <button onClick={() => Search(textboxvalue)} className="search-button">Search</button>
        <div className="weather-display">
          {city ? (
            <>
              <h2>Weather in {city}</h2>
              <div className="weather-info">
                <p>Temperature: {temperature}°C</p>
                <p>Condition: {condition}</p>
                {icon && condition && <img src={icon} alt={condition} />}
              </div>
              <button onClick={addToFavorityCity}className="search-button">Add to favorite city</button>
              <h3>5-Day Forecast</h3>
              <div className="forecast-list">
                {forecast.map((day, index) => (
                  <div key={index} className="forecast-card">
                    <p>{day.date}</p>
                    <p>High: {day.high}°F</p>
                    <p>Low: {day.low}°F</p>
                    <p>{day.condition}</p>
                    <img src={day.icon} alt={day.condition} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p>Search for a city to see the weather.</p>
          )}
          <br></br>
          <Link to = "/favorites">
            <button className="search-button">Go to favorite cities</button>
          </Link>
        </div>
        <Toast message = "City added to favorites!" show={showToast}/>
      </div>
      </>
    )
  }