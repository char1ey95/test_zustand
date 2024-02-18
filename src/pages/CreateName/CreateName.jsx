import { usePersonStore } from "../../store"

export function CreateName(){
    const firstName = usePersonStore((state) => state.firstName) // '': string
    const updateFirstName = usePersonStore((state) => state.updateFirstName) // () => {}: function

    return (
      <main>
        <label>
          First name
          <input onChange={(e) => updateFirstName(e.currentTarget.value)} value={firstName} />
        </label>
        <p>
          Hello, <strong>{firstName}!</strong>
        </p>
      </main>
    )
}