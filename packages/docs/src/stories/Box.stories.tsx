import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
        debiti s porro repellendus assumenda sed eius temporibus, sit quasi est
        magnam ha rum nobis facere explicabo culpa atque odit consectetur autem.
        Quia.
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
