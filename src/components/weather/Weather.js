import React from 'react'

export default function Weather(props) {

  // const {city} = props;
  console.log("Weather  city is ... "+props.city);
  // const ICON_URL = 'http://openweathermap.org/img/w/10d.png';
  const icon_url = 'http://openweathermap.org/img/w/'+props.icon+'.png';
  return (
    <div>
      {props.city && <h1>Your city is {props.city}</h1> }
      {props.icon && <h2>{icon_url}</h2>}
      {props.icon && <img stylename="-webkit-user-select: none" src={icon_url} alt=''/>}
      {props.error && <h1>{props.error}</h1>}
    </div>
  )
}
