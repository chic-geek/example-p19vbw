import React from 'react'

export default function ThemedBackgroundimage({ imageUrl }) {
  return (
    <div
      className="absolute top-0 left-0 z-0 w-full h-full bg-cover"
      style={{
        backgroundImage: imageUrl !== '' ? `url(${imageUrl})` : '#fff',
      }}
    />
  )
}
