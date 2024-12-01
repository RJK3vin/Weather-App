import { Link } from 'react-router-dom';
import './App.css'
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function Favorite() {

    const favoriteCites = useSelector((state : RootState) => state.weather.favoriteCities)

    return (
        <>
        <div className = "app-container">
            <h1>Favorites Cities</h1>
            {favoriteCites.length > 0 ? (
                <ul>
                    {favoriteCites.map((city, index) => (
                        <li key = {index}>{city}</li>
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