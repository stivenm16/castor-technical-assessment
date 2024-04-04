'use client'
import React, { useState } from 'react'
import { useToggle } from '../hooks'
import { Button, Modal, ToDo } from '.'

export const ToDoContainer = () => {
  const [todos, setTodos] = useState([
    { id: '1', text: 'Learn React', completed: true },
    { id: '2', text: 'Learn Firebase', completed: false },
    { id: '3', text: 'Learn GraphQL', completed: false },
  ])

  const { isOpen, toggle } = useToggle()
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">To Do List</h1>
      <Button label="Add To Do" onClick={toggle} />
      <ul>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleComplete={() => console.log('toggle')}
            deleteTodo={() => console.log('delete')}
          />
        ))}
      </ul>
      {isOpen && (
        <>
          <Modal isOpen={isOpen} onClose={toggle}>
            <h2 className="text-xl font-bold mb-4">Add To Do</h2>
            <input
              type="text"
              placeholder="Enter To Do"
              className="w-full px-4 py-2 rounded border text-indigo-950"
            />
            <div className="flex justify-center mt-4">
              <Button label="Add" onClick={toggle} />
            </div>
          </Modal>
        </>
      )}
    </div>
  )
}
