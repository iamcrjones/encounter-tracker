import { ImageOverlay, MapContainer, Marker } from "react-leaflet";
import L from "leaflet";
import { useMaps } from "../utils/state/useMaps";
import { usePlayers } from "../utils/state/usePlayers";
import { useEnemies } from "../utils/state/useEnemies";
const MapComponent = () => {
  const selectedMap = useMaps((state) => state.selectedMap);
  const players = usePlayers((state) => state.players);
  const updatePlayer = usePlayers((state) => state.updatePlayer);

  const enemies = useEnemies((state) => state.enemies);
  const updateEnemy = useEnemies((state) => state.updateEnemy);
  console.log({ selectedMap, players });

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
          // url="https://i.pinimg.com/736x/a6/3c/c9/a63cc9d1458f3ad77d4160d21bd06640.jpg"
          url={selectedMap}
          bounds={[
            [500, 500],
            [1500, 1500],
          ]}
          className="z-[9990]"
        />
        {!!players.length &&
          players.map((player: Record<any, any>, ix) => {
            return (
              <Marker
                position={player.location}
                key={`player-${player.name}-${ix}`}
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
                    console.log({ lat, lng });
                    updatePlayer(ix, { ...player, location: [lat, lng] });
                    // const newCoords = [lat, lng];
                    // setPoint((prevPoint) => {
                    //   const newPoint = [...prevPoint];
                    //   newPoint[index] = newCoords;
                    //   return newPoint;
                    // });
                  },
                }}
              />
            );
          })}
        {!!enemies.length &&
          enemies.map((enemy: Record<any, any>, ix) => {
            return (
              <Marker
                position={enemy.location}
                key={`enemy-${enemy.name}-${ix}`}
                draggable
                icon={
                  new L.DivIcon({
                    html: `<svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="#00ff00" 
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
                    console.log({ lat, lng });
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
