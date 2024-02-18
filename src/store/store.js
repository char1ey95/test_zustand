import { create } from 'zustand'
import { createCount } from './count/countStore'
import { createUser } from './user/userStore'

export const useStore = create((...set) => {
    console.log(set);
    return set
    // return ({
    //     ...createCount(...a),
    //     ...createUser(...a),
    // })
})