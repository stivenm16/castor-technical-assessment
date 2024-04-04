import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { Button } from '..'
import { CreateTodo } from '@/app/models'

interface FormCreateTodoProps {
  createTodoDispatcher: (data: CreateTodo) => void
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
})

const FormCreateTodo = ({ createTodoDispatcher }: FormCreateTodoProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodo>({ resolver: yupResolver(schema) })
  const onSubmit = async (data: CreateTodo) => {
    if (data) {
      createTodoDispatcher(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 z-10">
      <div className="mb-4">
        <label htmlFor="title" className="block text-white font-bold mb-1">
          title:
        </label>
        <input
          type="title"
          id="title"
          className={'w-full px-4 py-2 rounded border text-indigo-950 '}
          {...register('title', {
            required: {
              value: true,
              message: 'title is required',
            },
          })}
        />
        <span className="text-white text-xs font-bold mt-1">
          {errors.title?.message}
        </span>
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-white font-bold mb-1"
        >
          description:
        </label>
        <input
          type="description"
          id="description"
          {...register('description', {
            required: {
              value: true,
              message: 'description is required',
            },
          })}
          className={'w-full px-4 py-2 rounded border text-indigo-950'}
        />
        <p className="text-white text-xs font-bold mt-1">
          {errors.description?.message}
        </p>
      </div>

      <Button type="submit" customStyles="w-full">
        Add
      </Button>
    </form>
  )
}

export default FormCreateTodo
