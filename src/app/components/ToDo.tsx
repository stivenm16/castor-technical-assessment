import React from 'react'
// import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
  text: `ml-2 cursor-pointer`,
  textComplete: `ml-2 cursor-pointer line-through`,
  button: `cursor-pointer flex items-center`,
}

interface TodoProps {
  todo: {
    id: string
    text: string
    completed: boolean
  }
  toggleComplete: any
  deleteTodo: (id: string) => void
}

export const ToDo = ({ todo, toggleComplete, deleteTodo }: TodoProps) => {
  console.log(todo)
  return (
    <li
      className={`flex justify-between p-4 my-2 capitalize rounded-md text-gray-700 bg-slate-${
        todo.completed ? '400' : '200'
      }`}
    >
      <div className={`flex`}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={`ml-2 cursor-pointer ${todo.completed && 'line-through'}`}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Del</button>
    </li>
  )
}
