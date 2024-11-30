import { useState } from "react"
import { fetchWeather } from "./api"


  
  export default function App() {
    const [textboxvalue, setTextBoxValue] = useState('')

    function Search() {
      fetchWeather(textboxvalue)
    }

    return (
      <>
        <p>Search for cities</p>
        <input placeholder = "Type" value = {textboxvalue} onChange={(event) => setTextBoxValue(event.target.value)}></input> 
        <button onClick={Search}>Search</button>
      </>
    )
  }