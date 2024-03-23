import React from 'react';

const Daily = ({ weatherData }) => {
  return (
    <>
      {/* <h2>Daily Forecast</h2> */}
      <div className='h-[20vh] w-[90vw] flex justify-between items-center gap-2'>
        {weatherData.daily.time.map((day, index) => (
          <div className='h-[10rem] w-[15rem] rounded-sm bg-slate-500 text-white' key={index}>
            <p>Date: {day}</p>
            <p>Daylight Duration: {weatherData.daily.daylight_duration[index]} seconds</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Daily;
