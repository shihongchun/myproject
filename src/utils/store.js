import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    login: 0
  },
  mutations: {
    changeLogin: (state) => {
      const obj = state
      obj.login = 1
      wx.navigateTo({
        url: '/pages/index/main'
      })
    }
  }
})

export default store
