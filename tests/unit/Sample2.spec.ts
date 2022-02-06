import { mount } from '@vue/test-utils'
import Sample2 from '../../src/components/Sample2.vue'
import { ref } from 'vue'


describe('Sample2.vue', () => {
  test('My Profile の値が表示されていること', () => {
    const wrapper = mount(Sample2)
    // getメソッドを利用して特定の要素のDOMWrapperオブジェクトを取得
    const profile = wrapper.get('#profile')
    console.log(profile)

    // findメソッドも同じように引数に指定した要素のコンテンツを取得
    const profile2 = wrapper.find('#profile')
    console.log(profile2)

    // どちらも同じDOMWrapperを戻しますがgetメソッドの場合は要素が存在しない場合にエラー
  })

  test('admin が false の場合 "Admin" が表示されていないこと', () => {
    const wrapper = mount(Sample2)
    // const admin = wrapper.find('#admin')
    // expect(admin.exists()).toBe(false)

    expect(wrapper.find('#admin').exists()).toBe(false)
  })

  test('admin が true の場合 "Admin" が表示されること', () => {
    const wrapper = mount(Sample2, {
      setup() {
        const admin = ref(true)
        return {
          admin
        }
      }
    })
    expect(wrapper.find('#admin').exists()).toBe(true)
  })

  test('newbie が false の場合 "newbie" が表示されていないこと', () => {
    const wrapper = mount(Sample2)
    // isVisibleメソッドでは要素の存在ではなくブラウザ上に表示されているかどうかを確認
    expect(wrapper.find('#newbie').isVisible()).toBe(false)
  })

  test('newbie が true の場合 "newbie" が表示されること', () => {
    const wrapper = mount(Sample2, {
      setup() {
        const newbie = ref(true)
        return {
          newbie
        }
      }
    })
    expect(wrapper.find('#newbie').isVisible()).toBe(true)
  })
})