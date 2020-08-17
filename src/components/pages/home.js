import React, { Component, Fragment } from 'react';
import Appbar from '../appbar/Appbar';
import SearchWeather from '../form/SearchWeather';
import WeatherCard from '../card/WeatherCard';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            weatherData : [],
            cityName:'Delhi'
        }
    }
    async weatherByCity(city){
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=85fce8b8faa0016f798cb529a0427f7d`
        let response = await fetch(url);
        let data = await response.json();
        if (data.cod === "200"){
            this.setState({ weatherData:data,cityName:data.city.name })
        }
    }
    componentDidMount(){
        this.weatherByCity(this.state.cityName)
    }
    render() {
        return ( 
            <Fragment >
                <Appbar />
                <br/>
                <br/>
                <div className="container">
                    <SearchWeather searchWeatherBycity={
                        this.weatherByCity.bind(this)} />
                    <br/>
                    <br/>
                    <WeatherCard  weatherData={this.state.weatherData} city={this.state.cityName} />
                </div>
            </Fragment>
         );
    }
}

 
export default Home;