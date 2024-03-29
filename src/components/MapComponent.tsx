import { ImageOverlay, MapContainer } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";
import { useMaps } from "../utils/state/useMaps";
const MapComponent = () => {
  const maps = useMaps((state) => state.maps);
  const selectedMap = useMaps((state) => state.selectedMap);
  console.log({ maps, selectedMap });

  return (
    <>
      <MapContainer
        center={[500, 500]}
        zoom={1}
        scrollWheelZoom={true}
        className="h-screen w-screen"
        crs={L.CRS.Simple}
        zoomControl={false}
      >
        <ImageOverlay
          // url="https://i.pinimg.com/736x/a6/3c/c9/a63cc9d1458f3ad77d4160d21bd06640.jpg"
          url={selectedMap}
          bounds={[
            [100, 100],
            [900, 900],
          ]}
          className="z-[9990]"
        />
      </MapContainer>
    </>
  );
};
export default MapComponent;
