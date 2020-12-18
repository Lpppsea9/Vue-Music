import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import router from './router'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
