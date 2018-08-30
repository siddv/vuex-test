import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      name: '',
      number: null,
      list: [],
    },
  },
  mutations: {
    UPDATE_VALUE(state, { field, value }) {
      console.log(field, value);
      state.form[field] = value; // eslint-disable-line no-param-reassign
    },
    SET_STATE(state, newState) {
      state.form = newState; // eslint-disable-line no-param-reassign
    },
  },
  actions: {
    setState({ commit }) {
      commit('SET_STATE', {
        name: 'Foo',
        number: 12,
        list: [
          {
            name: 'Baz',
            enabled: true,
          },
          {
            name: 'Qux',
            enabled: false,
          },
          {
            name: 'Quux',
            enabled: true,
          },
        ],
      });
    },
  },
});
