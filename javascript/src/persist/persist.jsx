import { useEffect } from "react";
import { usePersistStore, useStore } from "../store"


export default function Persist(){
    // const { isLogin, addABear } = usePersistStore();
    // const isLogin = usePersistStore((state) => state.isLogin);
    // const setIsLogin = usePersistStore((state) => state.setIsLogin);
    
    const isLogin = useStore((state) => state.isLogin);
    const setIsLogin = useStore((state) => state.setIsLogin);

    useEffect(() => {
        console.log(isLogin);
        console.log(setIsLogin);
    }, []) 

    return(
        <>
            <div>persist test</div>
            
            <br />

            <br />
            
            {
                !isLogin ? <button onClick={setIsLogin}>login</button> : <button onClick={setIsLogin}>logout</button>
            }
            
            
        </>
    )
}