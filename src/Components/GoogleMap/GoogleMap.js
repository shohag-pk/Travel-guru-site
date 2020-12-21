import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
  static defaultProps = {
    center: {
      lat: 23.777176,
      lng: 90.399452,
    },
    zoom: 11,
  };

  render() {
    return (
      <div
        style={{
          height: "500px",
          width: "90%",
          margin: "auto",
          marginTop: "40px",
        }}
      >
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={23.777176} lng={90.399452} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;