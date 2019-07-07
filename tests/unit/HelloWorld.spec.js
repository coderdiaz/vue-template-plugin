import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../packages/HelloWorld/src/main.vue';

// Helper function to create a component
const createComponent = propsData => shallowMount(HelloWorld, { propsData });

// Mounting an instance of HelloWorld component
const vm = shallowMount(HelloWorld);

describe('HelloWorld.vue', () => {
  let cmp;
  it('should match the snapshot', () => {
    expect(vm.$el).toMatchSnapshot();
  });

  it('HelloWorld is a component', () => {
    expect(vm.isVueInstance()).toBeTruthy();
  });

  describe('Properties', () => {
    it('when the component is created without `message` prop, the component shows the message by default', () => {
      cmp = createComponent();
      expect(cmp.vm.message).toBe('Hello World');
    });

    it('when the components is created with a custom message, the component shows the custom message', () => {
      cmp = createComponent({
        message: 'Hello my name is Javier',
      });
      expect(cmp.vm.message).toBe('Hello my name is Javier');
    });
  });
});
