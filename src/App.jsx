import { useEffect } from 'react'
import Card from './Component/Card'
import Input from './Component/Input';
import Button from './Component/Button';
import {useWeather} from "./Context/Weather"

function App() {
  const weather = useWeather();

  useEffect(() => {
    // Get Current Location
    weather.fetchCurrentUserLocationData();
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='bg-lime-500 p-6 rounded shadow-lg flex flex-col items-center justify-center h-70 w-50'>
      <h1 className='text-2xl font-bold mb-4'>Weather Forecast</h1>
      <Input />
      <Button onClick={weather.fetchData} value="search" />
      <Card />
      <Button value="Refresh"/>
      </div>
    </div>
  )
}

export default App
