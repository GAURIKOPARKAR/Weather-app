import React from 'react';

const Hourly = ({ weatherData }) => {
  return (
    <>
      {weatherData && weatherData.hourly && ( // Check if weatherData and weatherData.hourly exist
        <div className='h-[20vh] w-[90vw] flex justify-center items-center flex-wrap gap-2'>
          {weatherData.hourly.time.map((time, index) => (
            <div className='h-[10rem] w-[15rem] rounded-sm bg-slate-500 text-white' key={index}>
              <p>Time: {time}</p>
              <p>Temperature: {weatherData.hourly.temperature_2m[index]} °C</p>
              <p>Rain: {weatherData.hourly.rain[index]} mm</p>
              <p>Wind Speed: {weatherData.hourly.wind_speed_10m[index]} km/h</p>
              <p>Soil Temperature: {weatherData.hourly.soil_temperature_0cm[index]} °C</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Hourly;
