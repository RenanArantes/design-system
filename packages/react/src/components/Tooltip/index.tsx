import * as TooltipRadix from '@radix-ui/react-tooltip'
import { Text } from '../Text'
import { TooltipContainer } from './styles'

export interface TooltipProps extends TooltipRadix.TooltipProps {
  text: string
  data: string
}

export function Tooltip({ data, text, delayDuration }: TooltipProps) {
  console.log(`delayTimer: ${delayDuration}`)

  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root delayDuration={delayDuration}>
        <TooltipRadix.Trigger style={{ all: 'unset', width: 'fit-content' }}>
          <Text>{text}</Text>
        </TooltipRadix.Trigger>
        <TooltipContainer align="center">
          {data}
          <TooltipRadix.Arrow style={{ fill: '$gray900' }} />
        </TooltipContainer>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  )
}
