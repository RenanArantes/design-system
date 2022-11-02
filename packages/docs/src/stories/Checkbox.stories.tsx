import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          style={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
          <Text size={'sm'}>Label 1</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
