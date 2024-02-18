import useStore from "../../store/store"

function Tester (){
    const { count } = useStore()

    return(
        <div>
            Global State Test : {count}
        </div>
    )
}

export default Tester;