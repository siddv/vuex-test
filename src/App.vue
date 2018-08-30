<template>
  <div id="app">
    <FormSection
      :fields="fields"
      :values="form"
      @update="updateValue" />

  </div>
</template>

<script>
import { mapState } from 'vuex';
import fields from './fields';
import FormSection from './components/FormSection.vue';

export default {
  name: 'app',
  data() {
    return {
      fields,
    };
  },
  components: {
    FormSection,
  },
  computed: {
    ...mapState([
      'form',
    ]),
  },
  methods: {
    updateValue(payload) {
      this.$store.commit('UPDATE_VALUE', payload);
    },
  },
  mounted() {
    this.$store.dispatch('setState');
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
