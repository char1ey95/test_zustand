import useStore from "../../store/store"

export const Counter = () => {
    const {count, increment, decrement} = useStore()

    return(
        <div>
            <div>Count : {count}</div>
            <button onClick={() =>increment(count)}>up</button>
            <button onClick={() =>decrement(count)}>down</button>
        </div>
    )
}