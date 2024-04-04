'use client'
import { useState } from 'react'

export function useToggle() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return {
    isOpen,
    toggle,
  }
}
