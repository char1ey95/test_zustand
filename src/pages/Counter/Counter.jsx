import useStore from "../../store/store"

export default function Counter(){
    const { count, increase, decrease } = useStore()
    
    return(
        <>
            <div>Counter State : { count }</div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    )
}