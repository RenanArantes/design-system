import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typografy/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti debiti' +
      's porro repellendus assumenda sed eius temporibus, sit quasi est magnam ha' +
      'rum nobis facere explicabo culpa atque odit consectetur autem. Quia.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Secundary: StoryObj<TextProps> = {
  args: {
    children:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti debiti' +
      's porro repellendus assumenda sed eius temporibus, sit quasi est magnam ha' +
      'rum nobis facere explicabo culpa atque odit consectetur autem. Quia.',
    as: 'strong',
  },
}
