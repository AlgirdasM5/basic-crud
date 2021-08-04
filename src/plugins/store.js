import Vue from 'vue';
import Vuex from 'vuex';

import Client from '../store/client/modules/client';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Client,
  },
  strict: false,
  plugins: [],
});
