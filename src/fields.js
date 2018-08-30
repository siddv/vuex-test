export default {

  name: {
    heading: 'A Heading',
    component: 'Input',
    label: 'Name',
    bind: {
      type: 'text',
      foo: 'bar',
    },
  },
  number: {
    component: 'Input',
    label: 'Number',
    bind: {
      type: 'number',
    },
  },
  list: {
    heading: 'Some Heading',
    component: 'CustomThing',
    bind: {
      label: 'List',
    },
  },
};
