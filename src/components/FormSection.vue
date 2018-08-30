<template>
  <section class="form">
    <template
      v-for="(field, key) in fields">

      <h4
        v-if="field.heading"
        :key="field.heading">
        {{field.heading}}
      </h4>

      <component
        :key="key"
        :is="field.component"
        v-bind="field.bind"
        :value="values[key]"
        @update="emitUpdate(key, $event)"/>
    </template>
  </section>
</template>
<script>
import CustomThing from './CustomThing.vue';
import Input from './Input.vue';

export default {
  name: 'FormSection',
  props: {
    values: Object,
    fields: Object,
  },
  components: {
    CustomThing,
    Input,
  },
  methods: {
    emitUpdate(field, value) {
      this.$emit('update', { field, value });
    },
  },
};
</script>

