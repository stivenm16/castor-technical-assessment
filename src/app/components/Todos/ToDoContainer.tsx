'use client'
import { ModalCreateTodo, ToDo } from '.'
import { Button, Spinner } from '..'
import { useTodo } from '../../hooks'

export const ToDoContainer = () => {
  const {
    toggle,
    todos,
    toggleComplete,
    deleteTodo,
    isOpen,
    setNewTodo,
    newTodo,
    createTodo,
  } = useTodo()
  return (
    <div className="w-1/2 mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">To Do List</h1>
      <Button label="Add To Do" onClick={toggle} customStyles="mx-auto my-4" />
      <ul>
        {!!todos && todos.length ? (
          todos.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
            />
          ))
        ) : (
          <Spinner />
        )}
        <ModalCreateTodo
          isOpen={isOpen}
          setNewTodo={setNewTodo}
          newTodo={newTodo}
          toggle={toggle}
          createTodo={createTodo}
        />
      </ul>
    </div>
  )
}
