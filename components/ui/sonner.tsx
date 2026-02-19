'use client'

import React from "react"

import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group"
      style={
        {
          '--normal-bg': '#FFFFFF',
          '--normal-text': '#2D2D2D',
          '--normal-border': '#D4A69A',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
