import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const { cities } = useCities();

  const [mapPosition, setMapPosition] = useState([40, 0]);

  const [searchParams, setSearchParams] = useSearchParams();
  const mapLat = searchParams.get("lat");
  const mapLng = searchParams.get("lng");

  useEffect(
    function () {
      if (mapLat && mapLng) setMapPosition(mapLat, mapLng);
    },
    [mapLat, mapLng]
  );

  // const flagemojiToPNG = (flag) => {
  //   var countryCode = Array.from(flag, (codeUnit) => codeUnit.codePointAt())
  //     .map((char) => String.fromCharCode(char - 127397).toLowerCase())
  //     .join("");
  //   return (
  //     <img src={`https://flagcdn.com/24x18/${countryCode}.png`} alt="flag" />
  //   );
  // };

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        {/* ini eror anjir */}
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);

  return null;
};

export default Map;
