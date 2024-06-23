import { create } from "zustand";

interface MapState {
  mapCount: number;
  maps: string[];
  selectedMap: string;
  incrementMapCount: () => void;
  resetMapCount: () => void;
  addMap: (newMap: string) => void;
  selectMap: (map: string) => void;
}

export const useMaps = create<MapState>((set) => ({
  mapCount: 0,
  maps: [],
  selectedMap: "",
  incrementMapCount: () => set((state) => ({ mapCount: state.mapCount + 1 })),
  resetMapCount: () => set({ mapCount: 0 }),
  addMap: (newMap) => set((state) => ({ maps: [...state.maps, newMap] })),
  selectMap: (map) => set({ selectedMap: map }),
}));
