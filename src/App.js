import React, { Component } from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <header className="App=header">
          
          <h1 className="App-title">Google map with React</h1>

        </header>
        <Map google={this.props.google} 
        initialCenter={{
          lat:17.4834,
          lng:78.3871
        }}
        zoom={10}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>

      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCClP-kCenVri3Po9zYVtsGN9nux3ruy6g")
})(App)