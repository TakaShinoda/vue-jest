import { mount } from '@vue/test-utils'
import Sample from '../../src/components/Sample.vue'

describe('Sample.vue', () => {
  // test('Hello と表示されること', () => {
  //   const wrapper = mount(Sample)
  //   expect(wrapper.text()).toBe('Hello')
  // })
  test('props の値が表示されていること', () => {
    const msg = 'Hello'
    const wrapper = mount(Sample, {
      props: { msg }
    })
    console.log(wrapper)
    console.log(wrapper.text())
    console.log(wrapper.props())

    expect(wrapper.text()).toContain(msg)
    expect(wrapper.text()).toMatch(msg)

    console.log(wrapper.vm)
  })
})

