import { useEffect, useState } from 'react'
import { useStore } from './store'

function App (){
    const { userList, addUser } = useStore()
    const [ user, setUser ] = useState('');
    
    const renderUserList = userList.map((v, idx) => (
        <ul key={idx}>
            <li> userid: {v} </li>
        </ul>
    ))

    return(
        <div>
            <div>
                <input type="text" onChange={(e) => setUser(e.currentTarget.value)} value={user}/>
                <button onClick={() => { setUser(''); addUser(user) }}>추가하기</button>
            </div>
            {renderUserList}
        </div>
    )
}

export default App;