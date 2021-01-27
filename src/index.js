import React from "react";
import { render } from "react-dom";
import GoogleMap from "google-map-react";

const GOOGLE_API_KEY = "AIzaSyDOe_Bg4qQnGGTXUGeBCiVP2JfFxqrartw";

class GMapReact extends React.Component {
  render() {
    const { center, zoom } = this.props;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <GoogleMap
          bootstrapURLKeys={{ key: [GOOGLE_API_KEY] }}
          center={center}
          zoom={zoom}
        />
      </div>
    );
  }
}

class MapUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: 37.7824134,
        lng: -122.4088472
      },
      form: {
        lat: 37.7824134,
        lng: -122.4088472
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange() {
    this.setState({
      form: {
        lat: Number(this.refs.lat.value),
        lng: Number(this.refs.lng.value)
      }
    });
  }

  handleClick() {
    this.setState({
      center: this.state.form
    });
  }

  render() {
    const center = this.state.center;
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div>
          <input
            ref="lat"
            type="text"
            value={this.state.form.lat}
            onChange={this.handleChange}
          />
          <input
            ref="lng"
            type="text"
            value={this.state.form.lng}
            onChange={this.handleChange}
          />
          <input onClick={this.handleClick} type="button" value="update" />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <GMapReact center={center} zoom={15} />
        </div>
      </div>
    );
  }
}

if (GOOGLE_API_KEY === "ENTER_API_KEY_HERE") {
  render(
    <div>
      <h1>Enter Google API Key in GOOGLE_API_KEY const</h1>
    </div>,
    document.getElementById("root")
  );
} else {
  render(
    <div style={{ width: "100%", height: "500px" }}>
      <MapUpdate />
    </div>,
    document.getElementById("root")
  );
}
