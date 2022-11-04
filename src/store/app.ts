import { defineStore } from 'pinia'
import { useUserStore } from './user'

export const useAppStore = defineStore('app', {
  state: () => ({

  }),

  getters: {
    appCount(): number{
      return useUserStore().doubleCount
    }
  },

  actions: {
    getDoubleCount () {
      const userStore = useUserStore()
      console.log(userStore.doubleCount)
    }
  }
})
