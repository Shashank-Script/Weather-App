const baseURL = "https://api.weatherapi.com/v1/current.json?key= 5318fe47b10142d2b3b151351240507"

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
    return await response.json();
};

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
    return await response.json();
  };