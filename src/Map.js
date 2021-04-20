import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div><i class="fas fa-map-marker-alt tooltip Pointer"><span className = "tooltiptext" >{text}</span></i></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 38.26462223,
      lng: 140.32342111,
    },
    zoom: 16,
  };

  render() {
      const render = this.props.data.map(el =>{
          return( <AnyReactComponent
            lat= {el.coordinates[0]}
            lng={el.coordinates[1]}
            text={el.address}
          /> )
      })
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyChvpjMnMTaxuXGWNSrW962RU7Y-cnv5Hc" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {render}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
