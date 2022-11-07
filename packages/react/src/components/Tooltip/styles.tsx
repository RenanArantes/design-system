import { styled } from '../../styles'
import * as TooltipRadix from '@radix-ui/react-tooltip'

export const TooltipContainer = styled(TooltipRadix.Content, {
  backgroundColor: '$gray900',
  borderRadius: '$sm',

  color: '$gray100',
  fontSize: '$sm',
  fontFamily: '$default',

  padding: '$3 $4',
})
