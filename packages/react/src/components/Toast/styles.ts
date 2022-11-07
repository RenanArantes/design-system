import * as ToastRadix from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'
import { Text } from '../Text'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const StyledToast = styled(ToastRadix.Root, {
  backgroundColor: '$gray800',
  borderRadius: 6,
  border: '2px solid $gray600',
  padding: '12px 20px',

  display: 'flex',
  flexDirection: 'column',

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

export const TitleToast = styled(Text, {
  fontWeight: 'bold',
  color: '$white',
})

export const XButton = styled(Text, {
  background: 'transparent',
  fontWeight: '$regular',
  color: '$gray200',
})

export const DescriptionToast = styled(Text, { color: '$gray200' })
