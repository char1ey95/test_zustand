import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createCount } from './count/countStore'
import { createUser } from './user/userStore'

export const usePersistStore = create(
    persist(
      (set, get) => ({
        isLogin: false,
        setIsLogin: () => set({ isLogin: !get().isLogin }),
      }),
      {
        // 사용할 스토리지 키값
        name: 'store-storage',
        
        // JSON형태로 저장
        // callback 함수에 사용할 스토리지 종류 리턴
        // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        storage: createJSONStorage(() => localStorage ),
      },
    ),
  )

const usePersistStore2 = persist(
  (set, get) => ({
    isLogin: false,
    setIsLogin: () => set({ isLogin: !get().isLogin }),
  }),
  {
    // 사용할 스토리지 키값
    name: 'store-storage',
    
    // JSON형태로 저장
    // callback 함수에 사용할 스토리지 종류 리턴
    // storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    storage: createJSONStorage(() => localStorage ),
  },
)

export const useStore = create((...setFn) => {

    return ({
        ...usePersistStore2(...setFn),
        ...createCount(...setFn),
        ...createUser(...setFn),
    })
})