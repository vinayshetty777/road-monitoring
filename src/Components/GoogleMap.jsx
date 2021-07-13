import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';


export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    mapCenter:{
      lat: 12.9092,
      lng: 77.5666
    }
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <Map
       google={this.props.google}
       initialCenter={{
         lat: this.state.mapCenter.lat,
         lng: this.state.mapCenter.lng
       }}
       >
        <Marker
        position={{
          lat: this.state.mapCenter.lat,
          lng: this.state.mapCenter.lng
        }}
        />


      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCv7FiVK9ZqyWq5mmUK0sW3IP2rcvSeQGE')
})(MapContainer)
