import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import weatherApi from 'apis/weatherApi';
import WeatherInput from 'components/WeatherInput';
import WeatherResult from 'components/WeatherResult';
import { DEFAULT_CITY }  from 'constants/Constants';

export default class WeatherInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      temp: null
    };
  }

  render() {
    return (
      <div>
        <WeatherInput
          getWeather={this.getWeather}
        />
        <WeatherResult
          city={this.state.city}
          temp={this.state.temp}
        />
      </div>
    );
  }

  componentDidMount() {
    this.getWeather(DEFAULT_CITY);
  }

  getWeather = city => {
    if(city == null || city === '') return;

    weatherApi.getWeather(city, res => {
      this.setState({
        city: res.name,
        temp: res.main.temp
      });
    });
  }
}
