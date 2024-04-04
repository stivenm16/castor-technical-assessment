import React from 'react'
import { Modal } from '..'
import FormCreateTodo from './FormCreateTodo'
import { CreateTodo } from '@/app/models'

interface ModalCreateTodoProps {
  isOpen: boolean
  newTodo: string
  setNewTodo: (text: string) => void
  toggle: () => void
  createTodo: (data: CreateTodo) => void
}

export const ModalCreateTodo = ({
  isOpen,
  toggle,
  createTodo,
}: ModalCreateTodoProps) => {
  return (
    <Modal isOpen={isOpen} onClose={toggle}>
      <FormCreateTodo createTodoDispatcher={createTodo} />
    </Modal>
  )
}
