import React from 'react'
import { useTheme } from '../../contexts/themeContext'
import ThemedBackgroundimage from '../ThemedBackgroundimage'

export default function ThemedContainer({ children, containerFooter }) {
  const { state: { theme } } = useTheme()

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-full z-10">
        {children}
      </div>
      {containerFooter}
      {theme.active && <ThemedBackgroundimage imageUrl={theme.background_image} />}
    </React.Fragment>
  )
}
