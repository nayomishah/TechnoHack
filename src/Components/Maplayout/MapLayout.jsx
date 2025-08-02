import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Maplayout = () => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition([pos.coords.latitude, pos.coords.longitude]);
        },
        () => {
          alert("Location permission denied.");
        }
      );
    }
  }, []);

  const userIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
  });

  return position ? (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "300px", width: "40%", borderRadius: "10px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      <Marker position={position} icon={userIcon}>
        <Popup>You are here!</Popup>
      </Marker>
    </MapContainer>
  ) : (
    <p>Fetching your location...</p>
  );
};

export default Maplayout;
