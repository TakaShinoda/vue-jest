import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// mountでは子コンポーネントを持っている場合に子コンポーネントも一緒に表示
// shallowMountでは子コンポーネントは一緒に表示されない

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  const App = {
    template:`
    <div>Hello World</div>
    `
  }
  
  test("test App Component",function(){
    const wrapper = mount(App)
    expect(wrapper.text()).toBe('Hello World')
  })

})
