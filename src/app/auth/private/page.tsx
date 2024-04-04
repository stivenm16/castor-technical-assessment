'use client'
import { SignOut } from '@/app/components/SignOut'
import { ToDoContainer } from '@/app/components/Todos'
import { useSession } from 'next-auth/react'

const page = () => {
  const { data } = useSession()

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-bold text-center my-8">
        Welcome {data?.user?.email}
      </h1>
      <ToDoContainer />
      <SignOut />
    </div>
  )
}

export default page
