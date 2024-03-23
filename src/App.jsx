import React, { useState, useEffect } from "react";
import Hourly from "./Components/Hourly";
import Daily from "./Components/Daily";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [fore, setfore] = useState("daily")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=33.2176&longitude=75.0318&current=temperature_2m,rain&hourly=temperature_2m,rain,wind_speed_10m,soil_temperature_0cm&daily=daylight_duration"
        );
        const data = await response.json();
        setWeatherData(data);
        // console.log(data)
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  const forecast = (e)=>{
    console.log(e.target.value)
    setfore(e.target.value)

  }

  return (
    <>
    <h1>Weather Forecast</h1>
      {weatherData && ( 
          <div>
          <div className="h-[10rem] w-[15rem] rounded-sm bg-slate-500 text-white">
            <h2>Current Weather</h2>
            <p>Date: {weatherData.current.time}</p>
            <p>Temperature: {weatherData.current.temperature_2m} °C</p>
            <p>Rain: {weatherData.current.rain} mm</p>
          </div>
          
          
            <select onChange={forecast} className="m-8">
            <option value="hourly">Hourly Forecast</option>
            <option value="daily">Daily Forecast</option>
           </select>

           {fore==="hourly"?<Hourly weatherData={weatherData}/>:<Daily weatherData={weatherData}/>}
           </div>
        
         ) }
          

            

  </>
  )


}

export default App;
