import React from 'react'
import {useWeather} from "../Context/Weather"

function Card() {
    const weather = useWeather()
    return (
        <div className="text-center text-xl font-semibold p-3">
            <img className='mx-24'  src={weather?.data?.current?.condition?.icon} alt="weather" />
            <h2>{weather?.data?.current?.temp_c} °C</h2>
            <h5>{weather.data?.location?.name}, {weather.data?.location?.region}{" "}
            {weather.data?.location?.country}</h5>
        </div>
    )
}

export default Card
