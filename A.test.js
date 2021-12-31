import { shallowMount } from '@vue/test-utils';
import A from './A.vue';
import B from './B.vue';

it('should work', async () => {
  const wrapper = shallowMount(A, { stubs: { B }});
  await wrapper.vm.$nextTick()
  wrapper.getComponent(B);
});
