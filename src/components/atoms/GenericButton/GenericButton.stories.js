/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import GenericButton from './'

storiesOf('GenericButton', module).add('Default', () => ({
  components: { GenericButton },
  template: '<generic-button>Call To Action</generic-button>'
}))
