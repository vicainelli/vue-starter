import { shallowMount } from '@vue/test-utils'
import Button from './'

const buttonText = 'Button Text'

describe('Button.vue', () => {
  const wrapper = shallowMount(Button, {
    slots: {
      default: buttonText
    }
  })

  it('has button component', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('render button text', () => {
    expect(wrapper.text()).toBe(buttonText)
  })
})
