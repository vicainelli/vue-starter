import { shallowMount } from '@vue/test-utils'
import GenericButton from './'

const buttonText = 'Button Text'

describe('GenericButton.vue', () => {
  const wrapper = shallowMount(GenericButton, {
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
