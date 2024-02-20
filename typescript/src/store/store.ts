import { create } from "zustand";

type State = {
    count: number
}

type Actions = {
    increment: (amount: number) => void
    decrement: (amount: number) => void
}

type Action = {
    type: keyof Actions
    amount: number
}

const countReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.amount }
        case 'decrement':
            return { count: state.count + action.amount }
        default:
            return state
    }
}

// const useCountStore = create<State & Actions>((set) => ({
//     count: 0,
//     dispatch: (action: Action) => set((state) => countReducer(state, action))
// }))

const useStore = create<State & Actions>((set) => ({
    count: 0,
    increment: (amount: number) => set((state) => {
        console.log(state.count)
        return ({ count: state.count++})
    }),
    decrement: (amount: number) => set((state) => ({ count: state.count + amount}))
}))

export default  useStore;