export const createCount = (setState) => ({
    count: 0,
    // state는 현재 상태 state 객체 전부를 반환
    // 여기서는 { count, increase } 반환
    increase: () => setState((state) => {
        console.log(state)

        return ({ count: state.count + 1 })
    }),
})



// setState: (partial, replace) => {
//   const nextState = typeof partial === "function" ? partial(state) : partial;
//
//   if (!Object.is(nextState, state)) {
//       const previousState = state;
//       state = ( replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
//       listeners.forEach(listener => listener(state, previousState));
//       }
//   }