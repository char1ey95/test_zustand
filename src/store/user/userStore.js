export const createUser = (set) => ({
    user: 0,
    addUser: () => set((state) => ({ fishes: state.fishes + 1 })),
  })