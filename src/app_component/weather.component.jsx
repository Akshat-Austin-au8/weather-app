import React from 'react'
import './weather.style.css'

const Weather = (props) => {
  return (
    <div className='container text-light'>
      <div className='Card'>
        <h1 className='text-white py-3'>{props.cityname}</h1>
        <h5 className='py-4'>
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className='py-2'>{props.temp_celsius}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}
        {/* show pressure */}
        {pressure(props.pressure, props.humidity)}
        {/* show visibility */}
        {visibility(props.visibility, props.speed)}

        {/* Weather description */}
        <h4 className='py-3'>
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h4>
      </div>
    </div>
  )
}

export default Weather

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className='px-4'>{min}&deg;</span>
        <span className='px-4'>{max}&deg;</span>
      </h3>
    )
  }
}

function pressure(pressure, humidity) {
  if (pressure && humidity) {
    return (
      <h3>
        <span className='px-4'>Pressure: {pressure} hPa</span>
        <span className='px-4'>Humidity: {humidity} %</span>
      </h3>
    )
  }
}

function visibility(visibility, speed) {
  if (visibility && speed) {
    return (
      <h3>
        <span className='px-4'>visibility: {visibility}</span>
        <span className='px-4'> Wind Speed: {speed} km/h</span>
      </h3>
    )
  }
}
