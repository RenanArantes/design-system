import type { Meta, StoryObj } from '@storybook/react'
import { Box, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  args: {
    data: String(new Date()),
    text: 'Tooltip',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            alignItems: 'center',
            margin: 10,
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}

export const Delayed: StoryObj<TooltipProps> = {
  args: {
    delayDuration: 2000,
  },
}
