import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    count: 0
  }),

  getters: {
    doubleCount(): number {
      return this.count * 2
    }
  },

  actions: {
    increment () {
      this.count++
    }
  }
})
