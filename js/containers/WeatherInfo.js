import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import weatherApi from 'apis/weatherApi';
import WeatherResult from 'components/WeatherResult';
import { CITIES, DEFAULT_CITY }  from 'constants/Constants';

export default class WeatherInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      temp: null
    };

    this.getWeather(DEFAULT_CITY);
  }

  render(){
    return (
      <div>
		    <AutoComplete
  	      floatingLabelText="Type a city name"
  	      filter={AutoComplete.fuzzyFilter}
  	      dataSource={CITIES}
  	      maxSearchResults={5}
          onNewRequest={this.getWeather}
  	    />
        <WeatherResult
          city={this.state.city}
          temp={this.state.temp}
        />
      </div>
    );
  }

  getWeather = city => {
    weatherApi.getWeather(city, res => {
      this.setState({
        city: res.name,
        temp: res.main.temp
      });
    });
  }
}
