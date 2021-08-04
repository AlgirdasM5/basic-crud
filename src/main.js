import Vue from 'vue';
import App from './App.vue';
import Vuetify from './plugins/vuetify';
import EventBus from './plugins/event-bus';
import store from './plugins/store';

Vue.config.productionTip = false;

Vue.use(EventBus);

new Vue({
  store,
  vuetify: Vuetify,
  render: (h) => h(App),
}).$mount('#app');
