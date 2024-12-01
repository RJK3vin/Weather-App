import { Link } from 'react-router-dom';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { removeFavorityCity } from './weatherSlice';

export default function Favorite() {

    const favoriteCites = useSelector((state : RootState) => state.weather.favoriteCities)
    const dispatch = useDispatch();
    const removeCity = (city : string) => {
        dispatch(removeFavorityCity(city))
    }

    return (
        <>
        <div className = "app-container">
            <h1>Favorites Cities</h1>
            {favoriteCites.length > 0 ? (
                <ul>
                    {favoriteCites.map((city, index) => (
                        <>
                            <div className="favorite-city-container" key={index}>
                                <li className="favorite-city-name">{city}</li>
                                <button className="remove-button" onClick={() => removeCity(city)}>Remove from favorite cities</button>
                            </div>
                        </>
                    ))}
                </ul>
            ) : (
                <p>No favorite cities added yet, go back and add some</p>
            )}
            <Link to = "/">
                <button className="search-button">Back to weather app</button>
            </Link>
        </div>
        </>
    )
}