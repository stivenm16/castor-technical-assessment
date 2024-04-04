import React from 'react'
import { Button } from '.'
import { signOut } from 'next-auth/react'
import { auth } from '../../../firebase'

export const SignOut = () => {
  const endSession = async () => {
    try {
      await Promise.all([signOut(), auth.signOut()])
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <Button
      onClick={endSession}
      customStyles="w-auto mx-auto my-5"
      label="Sign Out"
    />
  )
}
