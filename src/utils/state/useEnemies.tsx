import { LatLngExpression } from "leaflet";
import { create } from "zustand";

type Enemy = {
  id: string;
  name: string;
  status: string;
  location: LatLngExpression;
};

interface EnemyState {
  enemyCount: number;
  enemies: Enemy[];
  selectedEnemy: Enemy | string;
  incrementEnemyCount: () => void;
  resetEnemyCount: () => void;
  addEnemy: (newEnemy: Enemy) => void;
  selectEnemy: (enemy: Enemy) => void;
  updateEnemy: (index: number, newData: Enemy) => void;
}

export const useEnemies = create<EnemyState>((set) => ({
  enemyCount: 0,
  enemies: [],
  selectedEnemy: "",
  incrementEnemyCount: () =>
    set((state) => ({ enemyCount: state.enemyCount + 1 })),
  resetEnemyCount: () => set({ enemyCount: 0 }),
  addEnemy: (newEnemy) =>
    set((state) => ({ enemies: [...state.enemies, newEnemy] })),
  selectEnemy: (enemy) => set({ selectedEnemy: enemy }),
  updateEnemy: (index, newData) =>
    set((state) => {
      const updatedData = [...state.enemies]; // Create a copy of the array
      updatedData[index] = newData; // Update the specific index with new data
      return { enemies: updatedData }; // Update the state with the modified array
    }),
}));
