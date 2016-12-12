import React from 'react';

export default class WeatherInput extends React.Component {
  render() {
  	return (
      <div>
        <input ref='cityInput' type='text' placeholder='Type a city name'></input>
        <button onClick={this.onClickGetWeather}>Get Weather</button>
      </div>
    );
  }

  componentDidMount() {
    this.refs.cityInput.addEventListener('keydown', e => {
      if(e.which === 13) {
        this.onClickGetWeather();
      }
    });
  }

  onClickGetWeather = () => {
    const cityInput = this.refs.cityInput;
    this.props.getWeather(cityInput.value);
    cityInput.value = '';
  }
}