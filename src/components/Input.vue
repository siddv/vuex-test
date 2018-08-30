<template>
  <input
    v-bind="$attrs"
    v-model="$attrs.value"
    @input="inputHappened">
</template>

<script>
export default {
  name: 'Input',
  methods: {
    inputHappened(event) {
      this.$emit('update', event.target.value);
    },
  },
};
</script>
