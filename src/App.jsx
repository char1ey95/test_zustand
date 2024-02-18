import { useStore } from './store'

function App (){
    const { increase } = useStore()
    
    return(
        <div onClick={increase}>
            onClick
        </div>
    )
}

export default App;