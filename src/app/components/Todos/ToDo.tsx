import React from 'react'
import { Todo } from '../../models'

interface TodoProps {
  todo: Todo
  toggleComplete: any
  deleteTodo: (id: string) => void
}

export const ToDo = ({ todo, toggleComplete, deleteTodo }: TodoProps) => {
  const timestamp = todo?.createdAt
  const createdAtDate = timestamp?.toDate().toString().slice(0, 15)
  return (
    <li
      className={`flex justify-between p-4 my-2 capitalize rounded-md text-gray-700 ${
        todo.status ? 'line-through  bg-gray-400' : 'bg-gray-200'
      }`}
    >
      <div className={`flex gap-5`}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.status}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={`ml-2 cursor-pointer`}
        >
          {todo.title}
        </p>
        <p
          onClick={() => toggleComplete(todo)}
          className={`ml-2 cursor-pointer`}
        >
          {todo.description}
        </p>
        <p>{createdAtDate}</p>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-gray-300 rounded px-2"
      >
        X
      </button>
    </li>
  )
}
