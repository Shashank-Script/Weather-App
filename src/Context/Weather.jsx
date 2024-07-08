import {createContext,useContext,useState} from "react"
import {getWeatherData,getWeatherDataForLocation} from "../api/index"

const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext)
}

export const WeatherProvider = (props) => {
    const [data,setData] = useState(null);
    const [searchCity,setsearchCity] = useState(null);

    const fetchData = async () => {
        const response = await getWeatherData(searchCity);
        setData(response);
    }

    const fetchCurrentUserLocationData = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          getWeatherDataForLocation(
            position.coords.latitude,
            position.coords.longitude
          ).then((data) => setData(data));
        });
      };

    return <weatherContext.Provider value={{searchCity,data,setsearchCity,fetchData,fetchCurrentUserLocationData}}>
        {props.children}
        </weatherContext.Provider>
}