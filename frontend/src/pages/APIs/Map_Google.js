import { useMemo } from "react";
import '../APIs/Mapa.css';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Map(lat, lng) {

  const coordenadas = useMemo(() => ({ lat: lat, lng: lng }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBQ1l7ysMKwT7-sszDO76V2IDiNxvRdrSU",
  });
  if (!isLoaded) return <div>Loading..</div>;

  return (
    <GoogleMap zoom={15} center={coordenadas} mapContainerClassName='map-container'>
      <Marker position={coordenadas} />
      <div id="map"></div>
    </GoogleMap>
  );
}

