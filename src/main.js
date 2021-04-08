import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuelidate from 'vuelidate'
import Axios from 'axios'
import Store from './store/store.js'

Vue.config.productionTip = false
Vue.use(Vuelidate)
new Vue({
  vuetify,
  router,
  Axios,
  Store,
  render: h => h(App)
}).$mount('#app')
