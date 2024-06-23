import { ImageOverlay, MapContainer, Marker } from "react-leaflet";
import L from "leaflet";
import { useMaps } from "../utils/state/useMaps";
import { usePlayers } from "../utils/state/usePlayers";
import { useEnemies } from "../utils/state/useEnemies";
import { useShallow } from "zustand/react/shallow";
const MapComponent = () => {
  const selectedMap = useMaps(useShallow((state) => state.selectedMap));
  const players = usePlayers(useShallow((state) => state.players));
  const updatePlayer = usePlayers(useShallow((state) => state.updatePlayer));

  const enemies = useEnemies(useShallow((state) => state.enemies));
  const updateEnemy = useEnemies(useShallow((state) => state.updateEnemy));

  return (
    <>
      <MapContainer
        center={[1000, 1000]}
        zoom={1}
        scrollWheelZoom={true}
        className="h-screen w-screen"
        crs={L.CRS.Simple}
        doubleClickZoom={false}
        zoomControl={false}
        zoomSnap={0.1}
        zoomDelta={0.1}
        maxBounds={[
          [0, 0],
          [2000, 2000],
        ]}
        attributionControl={false}
      >
        <ImageOverlay
          url={selectedMap}
          bounds={[
            [500, 500],
            [1500, 1500],
          ]}
          className="z-[9990]"
        />
        {!!players.length &&
          players.map((player, ix) => {
            return (
              <Marker
                position={player.location}
                key={player.id}
                draggable
                icon={
                  new L.DivIcon({
                    html: `<svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#000" 
                                viewBox="0 0 16 16" 
                                stroke-width="1" 
                                stroke="#FFF" 
                            >
                                <circle cx="8" cy="8" r="8" />

                            </svg>`,
                    iconSize: [50, 50],
                    className: "",
                  })
                }
                eventHandlers={{
                  dragend: (event) => {
                    const { lat, lng } = event.target.getLatLng();
                    updatePlayer(ix, { ...player, location: [lat, lng] });
                  },
                }}
              />
            );
          })}
        {!!enemies.length &&
          enemies.map((enemy, ix) => {
            return (
              <Marker
                position={enemy.location}
                key={enemy.id}
                draggable
                icon={
                  new L.DivIcon({
                    html: `<svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#ff0000" 
                                viewBox="0 0 16 16" 
                                stroke-width="1" 
                                stroke="#FFF" 
                            >
                                <circle cx="8" cy="8" r="8" />

                            </svg>`,
                    iconSize: [50, 50],
                    className: "",
                  })
                }
                eventHandlers={{
                  dragend: (event) => {
                    const { lat, lng } = event.target.getLatLng();
                    updateEnemy(ix, { ...enemy, location: [lat, lng] });
                  },
                }}
              />
            );
          })}
      </MapContainer>
    </>
  );
};
export default MapComponent;
