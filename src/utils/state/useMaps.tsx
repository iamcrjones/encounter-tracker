import { create } from "zustand";

export const useMaps = create((set) => ({
  mapCount: 0,
  maps: [],
  selectedMap: "",
  incrementMapCount: () => set((state) => ({ mapCount: state.mapCount + 1 })),
  resetMapCount: () => set({ mapCount: 0 }),
  addMap: (newMap) => set((state) => ({ maps: [...state.maps, newMap] })),
  selectMap: (map) => set({ selectedMap: map }),
}));
