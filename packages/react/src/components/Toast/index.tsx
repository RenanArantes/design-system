import * as ToastRadix from '@radix-ui/react-toast'
import { useState } from 'react'
import { Button } from '../Button'
import { DescriptionToast, StyledToast, TitleToast, XButton } from './styles'

export interface ToastProps {
  fadeTime?: number | undefined
  verticalPosition?: 'top' | 'bottom'
}

export function Toast({ fadeTime, verticalPosition }: ToastProps) {
  const [open, setOpen] = useState(false)

  const verticalAlign = verticalPosition === 'top' ? '80%' : 0

  console.log(`fadeTime: ${typeof fadeTime}`)

  return (
    <ToastRadix.Provider>
      <Button
        onClick={() => {
          setOpen(true)
          if (typeof fadeTime === 'number') {
            window.setTimeout(() => {
              setOpen(false)
            }, fadeTime)
          }
        }}
      >
        Abra o Toast
      </Button>

      <StyledToast open={open}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <TitleToast size="lg">Agendamento Realizado</TitleToast>
          <ToastRadix.Action altText="altText" style={{ all: 'unset' }}>
            <XButton onClick={() => setOpen(!open)} size="xl">
              X
            </XButton>
          </ToastRadix.Action>
        </div>
        <DescriptionToast>{String(new Date())}</DescriptionToast>
      </StyledToast>

      <ToastRadix.Viewport
        style={{
          position: 'fixed',
          bottom: verticalAlign,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          padding: 25,
          gap: 10,
          width: 390,
          maxWidth: '100vw',
          margin: 0,
          listStyle: 'none',
          zIndex: 2,
          outline: 'none',
        }}
      />
    </ToastRadix.Provider>
  )
}
