import React from 'react'

export default function Form(props) {
  // const props_ = {props};
  console.log(props);
  return (
    <div>
      {/* console.log({this.props_}); */}
      <form onSubmit={props.getWeather}>
          <input type='text' name='city' placeholder='Enter city...'/>
          <input type='text' name='country' placeholder='Enter country...'/>
          <button>Get Weather</button>
      </form>
    </div>
  )
}
