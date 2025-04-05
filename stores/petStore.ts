import { create } from 'zustand';

interface PetState {
  name: string;
  happiness: number;
  hunger: number;
  energy: number;
  setName: (name: string) => void;
  feed: () => void;
  play: () => void;
  sleep: () => void;
  decreaseStats: () => void;
}

export const usePetStore = create<PetState>((set) => ({
  name: 'Buddy',
  happiness: 100,
  hunger: 100,
  energy: 100,
  setName: (name) => set({ name }),
  feed: () =>
    set((state) => ({
      hunger: Math.min(100, state.hunger + 30),
      energy: Math.min(100, state.energy + 10),
    })),
  play: () =>
    set((state) => ({
      happiness: Math.min(100, state.happiness + 30),
      energy: Math.max(0, state.energy - 20),
      hunger: Math.max(0, state.hunger - 20),
    })),
  sleep: () =>
    set((state) => ({
      energy: Math.min(100, state.energy + 50),
      hunger: Math.max(0, state.hunger - 10),
    })),
  decreaseStats: () =>
    set((state) => ({
      happiness: Math.max(0, state.happiness - 1),
      hunger: Math.max(0, state.hunger - 1),
      energy: Math.max(0, state.energy - 1),
    })),
}));