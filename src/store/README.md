# create

## create의 인자

### 첫번째 인자(함수)

```js
// setState 함수
const first = (partial, replace) => {
  const nextState = typeof partial === "function" ? partial(state) : partial;
  // 콜백함수의 첫번째 인자가 함수일 경우 --> 함수 실행
  // 콜백함수의 첫번째 인자가 함수가 아닐 경우 --> 인자 반환
  // 실행 결과 nextState에 할당

  // Object.is(a, b) --> a, b가 같으면 true

  // nextState와 현재 state가 다를 경우 실행되는 로직
  if (!Object.is(nextState, state)) {
    const previousState = state;

    /**
     * replace 값이 있으면, replace 없으면 nextState가 비어있는지 객체아닌지 판별
     * 
     * 위의 값의 결과로 nextState 그대로 할당 혹은 state와 nextState 합친 객체 할당
     */ 
    state = (
      replace != null
        ? replace
        : typeof nextState !== "object" || nextState === null
    )
      ? nextState
      : Object.assign({}, state, nextState);

    // 구독 컴포넌트로 추정, state와 previousState 를 인자로 넘김
    listeners.forEach((listener) => listener(state, previousState));
  }
};
```

### 두번째 인자(함수)

- state 반환하는 getter

```js
const second = () => state;
```

### 세번째 인자(객체)

- 상태관리, 구독 등을 담고 있는 메서드 객체

```js
const thrid = {
    setState: (partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            const previousState = state;
            state = (
                replace != null
                    ? replace
                    : typeof nextState !== "object" || nextState === null)
                        ? nextState
                        : Object.assign({}, state, nextState);
            listeners.forEach(listener => listener(state, previousState));
            }
        },
    getState: () => state,
    getInitialState: () => initialState,
    subscribe: listener => {
                listeners.add(listener);
                return () => listeners.delete(listener);
            },
    destroy: () => {
            if (( false ? 0 : void 0) !== "production") {
                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.");
                }
                
                listeners.clear();
            }
}
```
