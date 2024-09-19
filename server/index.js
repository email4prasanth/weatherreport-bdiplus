const express = require('express');
const app = express();
const port = 5000; 
require('dotenv').config();
const axios = require('axios'); 
const bodyParser = require ('body-parser'); 
const cors = require('cors');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.listen(port, hostname, ()=>{
//     console.log(`The Server is running on ${hostname}${port}`)
// })

// Change the hostname to 0.0.0.0 to bind to all interfaces
app.listen(port, '0.0.0.0', () => {
    console.log(`The Server is running on port ${port}`);
});

// app.post('/',async(req,res)=>{
//     // console.log(req.body)
//     const {zipcode} = req.body
//     const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.api_key}`)
//     res.send(weather.data)
//     console.log(weather.data)
// })
app.post('/', async(req, res)=>{
    const {zipcode} = req.body
    try {
        if (zipcode.length < 5 || zipcode.length > 5){
            return res.status(400).json({message: 'Zipcode provided is incorrect!'})
        }
        else{
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.api_key}&units=imperial`)
            res.send(weather.data)
           
        }
    } catch (error) {
        console.log(error)
        res.status(400).json({message: "Zipcode is Incorrect"})
    }
    
    }
    )