import { shallowMount } from '@vue/test-utils';
import A from './A.vue';
import B from './B.vue';

it('should work', () => {
  const wrapper = shallowMount(A, { stubs: { B }});
  wrapper.getComponent(B);
});
