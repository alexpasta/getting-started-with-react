import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherInfo from 'containers/WeatherInfo';

export default class App extends React.PureComponent {
  render(){
    return (
      <div>
        <div>A Material React Weather App Sample</div>
      	<MuiThemeProvider>
          <WeatherInfo />
	    </MuiThemeProvider>
	  </div>
    );
  }
}