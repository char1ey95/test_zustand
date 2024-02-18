import { create } from 'zustand'
import { createCount } from './count/countStore'
import { createUser } from './user/userStore'

export const useStore = create((...setFn) => {

    return ({
        ...createCount(...setFn),
        ...createUser(...setFn),
    })
})