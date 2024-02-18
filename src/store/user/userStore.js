export const createUser = (set) => ({
    userList: ["admin"],
    addUser: (user) => set((state) => ({ userList: [...state.userList, user] }))
  })