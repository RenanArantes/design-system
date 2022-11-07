import type { Meta, StoryObj } from '@storybook/react'
import { Box, Toast, ToastProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Toast',
  component: Toast,
  args: {
    fadeTime: 4000,
    verticalPosition: 'bottom',
  },
  argTypes: {
    fadeTime: {
      control: {
        type: 'number',
        min: 1000,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            margin: 10,
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const OnTop: StoryObj<ToastProps> = {
  args: {
    verticalPosition: 'top',
  },
}

export const NonFade: StoryObj<ToastProps> = {
  args: {
    fadeTime: undefined,
  },
}
