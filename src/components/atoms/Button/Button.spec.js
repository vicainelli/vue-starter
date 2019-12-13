import { shallowMount } from '@vue/test-utils'
import Button from './'

describe('Button.vue', () => {
  const wrapper = shallowMount(Button)
  it('has button component', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
