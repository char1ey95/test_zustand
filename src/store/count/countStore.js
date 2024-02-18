export const createCount = (set) => ({
    count: 0,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  })