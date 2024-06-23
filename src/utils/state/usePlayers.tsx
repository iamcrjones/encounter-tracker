import { LatLngExpression } from "leaflet";
import { create } from "zustand";

type Player = {
  id: string;
  name: string;
  location: LatLngExpression;
  status: string;
};

interface PlayerState {
  playerCount: number;
  players: Player[];
  selectedPlayer: Player | string;
  incrementPlayerCount: () => void;
  resetPlayers: () => void;
  addPlayer: (newPlayer: Player) => void;
  selectPlayer: (player: Player) => void;
  updatePlayer: (index: number, newData: Player) => void;
}

export const usePlayers = create<PlayerState>((set) => ({
  playerCount: 0,
  players: [],
  selectedPlayer: "",
  incrementPlayerCount: () =>
    set((state) => ({ playerCount: state.playerCount + 1 })),
  resetPlayers: () => set({ playerCount: 0 }),
  addPlayer: (newPlayer) =>
    set((state) => ({ players: [...state.players, newPlayer] })),
  selectPlayer: (player) => set({ selectedPlayer: player }),
  updatePlayer: (index, newData) =>
    set((state) => {
      const updatedData = [...state.players]; // Create a copy of the array
      updatedData[index] = newData; // Update the specific index with new data
      return { players: updatedData }; // Update the state with the modified array
    }),
}));
