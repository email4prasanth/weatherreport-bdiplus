import React from 'react'
import { useLocation } from 'react-router-dom'

const WeatherData = () => {
    const {state} =  useLocation();
    const {data} = state;
    const icon = data.weather[0].icon
    const icon_url = ` https://openweathermap.org/img/wn/${icon}@2x.png`

    // console.log(data)
  
  return (
    <div className='w-full h-[100vh]'>
        <h1 className=' text-[10vmin] font-bold text-center'>{data.name}</h1>
        
        <div className='flex justify-center'>
          <img src={icon_url} alt="Weather icon" className='border-2 border-blue-100    ' />
        </div>
        <div className=' text-center bg-slate-200'>{data.weather[0].description}</div>
        <div className='flex justify-between text-[24px]'>
        <div className='text-left'>
          Min Temp: <span className='font-semibold'>{data.main.temp_min}°F</span>
        </div>
        <div className='text-right'>
          Max Temp: <span className='font-semibold'>{data.main.temp_max}°F</span>
        </div>
    </div>

    </div>
  )
}

export default WeatherData
