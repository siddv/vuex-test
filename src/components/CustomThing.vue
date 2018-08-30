<template>
  <div class="hello">
    <ul
      v-for="(list, label) in computedList"
      :key="label">
      {{label}}
      <li
        v-for="(item, index) in list"
        :key="index">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CustomThing',
  props: {
    value: null,
    label: String,
  },
  computed: {
    computedList() {
      return {
        enabled: this.value.filter(item => item.enabled),
        disabled: this.value.filter(item => !item.enabled),
      };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
