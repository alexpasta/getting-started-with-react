import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';

const cities = [
  'Taipei',
  'Hong Kong',
  'Fukuoka',
  'London',
  'New York',
  'Paris',
  'Seattle',
  'Seoul',
  'Shanghai',
  'Silicon Valley',
  'Singapore',
  'Tokyo',
  'Venice'
];


export default class WeatherInfo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      city: null,
      temp: null
    };

    this.getWeather('Taipei');
  }

  render(){
    return (
      <div>
		    <AutoComplete
  	      floatingLabelText="Type a city name"
  	      filter={AutoComplete.fuzzyFilter}
  	      dataSource={cities}
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
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+ city +'&APPID=65335b960c1bdddd90043ed649672fdd&units=metric')
      .then(response => response.json())
      .then(json => {
        this.setState({
          city: json.name,
          temp: json.main.temp
        });
      });
  }
}

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
