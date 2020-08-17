import React, { Component } from 'react';

import "./index.css"
class SearchWeather extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        if(!event.target.elements.cityname.value){
           alert("fill the city for weather")
        }else{
            this.props.searchWeatherBycity(event.target.elements.cityname.value)

        }
    }

    render() { 
        return ( 
            <div
               className="card"
            >
                 <form onSubmit={this.handleSubmit}>
                    <div className="search-row">
                        <img src="./images/location.png" alt="locationIcon" className="icon" /> 
                        <input type="text" placeholder="Search for the city ...."  name='cityname' />
                    </div>
                </form>
            </div>
         );
    }
}
export default SearchWeather;