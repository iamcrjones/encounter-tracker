import { create } from "zustand";

export const useEnemies = create((set) => ({
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
