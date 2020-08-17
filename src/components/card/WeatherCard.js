import React from 'react';
import Moment from 'react-moment';

import "./index.css"

export default function WeatherDetails({ weatherData,city }) { 
  return (
      <div className="row">
      {weatherData?.list?.map((weather,i)=>{
              return (
                  <div className="col-sm-4 mb-3" key={i}>
                     <div className="weather-card">
                      <div className={Math.round(weather.main.temp - 273.15) > 23 ? "w-c-child-warm":"w-c-child-cold"}>
                        <div className="space-between">
                          <span className="temp">{Math.round(weather.main.temp - 273.15)}<span>&#176;</span></span>
                          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} className="w-icone" alt="weathericon"/>
                        </div>
                        <span className="city-time">{city}, <Moment format="D MMM YYYY hh:mm a">{weather.dt_txt}</Moment></span><br/>
                        <span className="weather">{weather.weather[0].description}</span>
                      </div>
                      <br/>
                      <div className="space-around">
                        <div className="textsecondary col-6 text-left ">humidity</div>
                        <div className="textsecondary col-6 text-left">{weather.main.humidity}%</div>
                      </div>
                      <div className="space-around">
                        <div className="textsecondary col-6 text-left">wind spaeed</div>
                        <div className="textsecondary col-6 text-left">{weather.wind.speed} km/h</div>
                      </div>
                    </div>
                  </div>
              )
          })}
      </div>
  );
}