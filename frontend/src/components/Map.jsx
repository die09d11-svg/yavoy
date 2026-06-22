import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents
} from "react-leaflet";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function RecenterMap({ position }) {
  const map = useMap();

  useEffect(() => {
    map.setView(position, 16);
  }, [position, map]);

  return null;
}

// 👇 NUEVO: seleccionar destino con click
function SelectDestination({ setDestination }) {
  useMapEvents({
    click(e) {
      setDestination([e.latlng.lat, e.latlng.lng]);
    },
  });

  return null;
}

function Map() {
  const [position, setPosition] = useState([18.5795, -97.9258]);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      },
      (err) => console.error(err),
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <RecenterMap position={position} />

      {/* tu ubicación */}
      <Marker position={position}>
        <Popup>Tu ubicación actual</Popup>
      </Marker>

      {/* 👇 habilita clicks */}
      <SelectDestination setDestination={setDestination} />

      {/* destino */}
      {destination && (
        <Marker position={destination}>
          <Popup>Destino seleccionado</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}

export default Map;