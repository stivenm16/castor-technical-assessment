'use client'
import { LoginForm } from './components'
import getUser from './services/axios'

export default function Home() {
  return (
    <>
      <LoginForm />
    </>
  )
}
