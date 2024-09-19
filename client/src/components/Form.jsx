import React from 'react'
import {useState} from 'react'
import axios from 'axios'   
import { useNavigate } from 'react-router-dom'
// import WeatherData from './WeatherData'

const Form = () => {

    const [zipcode,setZipCode] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) => { 
        e.preventDefault();
        setZipCode('')
        try {
            const weatherData = await axios.post('/',{zipcode})
            // console.log(weatherData.data)
            // navigate('/weather')
            navigate('/weather' ,{state: {data: weatherData.data}})
        } catch (error) {
            if(error){
                alert('Zipcode is incorrect!')
            }
        }
        
        // const weatherData = await axios.post('/',{zipcode})
        // console.log(weatherData.data)
        // // navigate('/weather')
        // navigate('/weather' ,{state: {data: weatherData.data}})
    }
  return (
    <div class="bg-white p-10 rounded-lg shadow-lg flex flex-col items-center">
        <form onSubmit={handleSubmit}>
    <input 
      type="text" 
      placeholder="Search..." 
      class="border border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={zipcode}
      onChange = {e=>setZipCode(e.target.value)}
    />
    <button 
      class="bg-green-500 text-white px-4 py-2 mt-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Search
    </button>
    </form>
  </div>
  )
}

export default Form
