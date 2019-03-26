import React, { Component } from 'react'
import Form from './Form';
import Weather from './Weather'

const API_KEY = 'e22d1c07fa47b19cb8d862add6c876d5';

export class WeatherSummary extends Component {

  state = {
    city: undefined,
    country: undefined,
    description: undefined,
    icon: undefined,
    error: undefined
  };
  
  getWeather = async (e) => {
    // console.log ("getWeather data before " , this.state);

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (data.name && data.sys.country){
      this.setState({
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        description: undefined,
        icon: undefined,
        error: 'Error: with choice of City or Country'
      });
    }

    // console log all API call data
    // console.log ("getWeather data raw " , data);
    // console log state
    console.log ("getWeather data state " , this.state);


  }

  render() {
    return (
      <div>
        <h1>The Weather Summary</h1>
        <Form getWeather={this.getWeather}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          description={this.state.description}
          icon={this.state.icon}
          error={this.state.error}
        />
      </div>
    )
  }
}

export default WeatherSummary
