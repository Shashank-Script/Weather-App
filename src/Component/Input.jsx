import React from 'react'
import {useWeather} from "../Context/Weather"

function Input() {
    const weather = useWeather();
    return (
        <input className="mb-2 p-1 rounded-xl shadow-md"
        type="text"
        placeholder='Search City'
        value={weather.searchCity}
        onChange={(e) => weather.setsearchCity(e.target.value)}
        />
    )
}

export default Input
