# Zustand 연습 및 적용

```js
import { create } from 'zustand'

const useStore = create((set) => ({
  initValue: 0,
  setInitValue: () => set((state) => ({ initValue: state.initValue + 1 })),
  initializedValue: () => set({ initValue: 0 }),
}))

export default useStore;
```

## create 함수

- 사용할 상태 및 상태 변경할 함수를 담은 객체를 반환
- 첫번째 인자로 콜백함수를 받음
    - 콜백 함수의 인자로 상태를 변경할 수 있는 set함수가 들어감

```js
import useStore from './store'

function Example(){
    const { initValue, setInitValue, initializedValue } = useStore();

    return(
        <>
            <div>{initValue}</div>
            <button onClick={setInitValue}>초깃값 증가</button>
            <button onClick={initializedValue}>값 초기화</button>
        </>
    )
}
```

## Single Store

## Nested Object(Immer)

## Persist

## TypeScript