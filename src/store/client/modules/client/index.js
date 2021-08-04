const TYPES = {
  SET_LIST: 'SET_LIST',
};

export default {
  namespaced: true,

  state: {
    list: [],
  },

  getters: {
    getList: (state) => state.list,
  },

  actions: {
    setList({ commit }, item) {
      commit(TYPES.SET_LIST, { item });
    },
  },

  mutations: {
    [TYPES.SET_LIST](state, { item }) {
      state.list = item;

      localStorage.setItem('list', JSON.stringify(item));
    },
  },
};
