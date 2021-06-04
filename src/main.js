import Vue from 'vue';
import dateFormat from '@/filters/date.filter';
import round from '@/filters/round.filter';
import formatNumber from '@/filters/formatNumber.filter';
import formatText from '@/filters/formatText.filter';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import Loader from '@/components/Loader';

Vue.config.productionTip = false;

Vue.filter('date', dateFormat);
Vue.filter('round', round);
Vue.filter('format', formatNumber);
Vue.filter('text', formatText);

Vue.component('Loader', Loader)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
