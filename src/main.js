import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './state'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
