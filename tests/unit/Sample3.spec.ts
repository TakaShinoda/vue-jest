import { mount } from '@vue/test-utils'
import Sample3 from '../../src/components/Sample3.vue'

describe('Sample3.vue', () => {
    it('click', async () => {
        const wrapper = mount(Sample3)
        await wrapper.get('button').trigger('click')
        expect(wrapper.text()).toContain('Count is: 1')
    })
})