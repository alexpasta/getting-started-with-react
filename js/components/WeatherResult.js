import React from 'react';

const WeatherResult = props => {
  if (props.city == null || props.temp == null) {
    return null;
  }

  return (
    <div>
      <span>{`${props.city}: `}</span>
      <span>{`${props.temp} °C`}</span>
    </div>
  );
}

export default WeatherResult;