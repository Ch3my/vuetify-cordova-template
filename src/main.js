import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueCompositionApi from '@vue/composition-api'
import moment from 'moment'

// ==============================
// ==== Lodash
import _ from 'lodash'; 
Object.defineProperty(Vue.prototype, '$_', { value: _ });

// ==============================
// ==== Numeral
import VueNumerals from 'vue-numerals';
// Vue.use(VueNumerals); // default locale is 'en'
// nosotros queremos setearle la Locale
// with options
Vue.use(VueNumerals, {
  locale: 'es'
});
// ==============================
// ==== Moment
Vue.prototype.moment = moment

// ==============================
// ==== Vuex
Vue.use(store)


Vue.config.productionTip = false
Vue.use(VueCompositionApi)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
