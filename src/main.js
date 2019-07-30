import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

require('@/mock/index')
const app = new Vue(App)
app.$mount()
