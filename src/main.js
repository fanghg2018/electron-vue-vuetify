import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { remote } from 'electron'
// const remote = require('electron').remote

Vue.config.productionTip = false

Vue.prototype.$win = remote.getCurrentWindow()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
