import { useState } from "react"
import { fetchWeather } from "./api"
import { setWeather } from "./weatherSlice"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
  
  export default function App() {
    const [textboxvalue, setTextBoxValue] = useState("")
    const dispatch = useDispatch();

    const Search = async (city: string) => {
      const data = await fetchWeather(city)

      dispatch(
        setWeather({
          city: data.location.name,
          temperature: data.current.temp_f,
          condition : data.current.condition.text,
          icon : data.current.condition.icon,
        })
      )
    }

    const { city, temperature, condition, icon } = useSelector((state : RootState) => state.weather)

    return (
      <>
        <h1>Weather App</h1>
        <input placeholder = "Type" value = {textboxvalue} onChange={(event) => setTextBoxValue(event.target.value)}></input> 
        <button onClick={() => Search(textboxvalue)}>Search</button>
        <div>
          {city ? (
            <>
              <h2>Weather in {city}</h2>
              <p>Temperature: {temperature}°C</p>
              <p>Condition: {condition}</p>
              {icon && condition && <img src={icon} alt={condition} />}
            </>
          ) : (
            <p>Please search for a city to see the weather.</p>
          )}
    </div>
      </>
    )
  }