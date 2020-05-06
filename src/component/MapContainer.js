import React from "react";
import { Map, TileLayer } from "react-leaflet";

const MapContainer = () => {
  const state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 4,
  };
  const position = [state.lat, state.lng];
  return (
    <Map
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        zIndex: 1,
      }}
      center={position}
      zoom={state.zoom}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  );
};

export default MapContainer;
