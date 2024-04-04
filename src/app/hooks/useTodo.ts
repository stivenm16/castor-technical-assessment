import { useEffect, useState } from 'react'
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../../../firebase'
import { useToggle } from '.'
import { CreateTodo, Todo } from '../models'
import { generateUUID } from '../utils'

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'todos'), orderBy('createdAt'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr: Todo[] | any = []
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id })
      })
      setTodos(todosArr)
    })
    return () => unsubscribe()
  }, [])
  const { isOpen, toggle } = useToggle()

  const toggleComplete = async (todo: Todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      status: !todo.status,
    })
  }

  const createTodo = async ({ title, description }: CreateTodo) => {
    await addDoc(collection(db, 'todos'), {
      id: generateUUID(),
      title,
      description,
      status: false,
      createdAt: serverTimestamp(),
    })
    setNewTodo('')
    toggle()
  }
  const deleteTodo = async (id: string) => {
    await deleteDoc(doc(db, 'todos', id))
  }

  return {
    todos,
    toggleComplete,
    createTodo,
    deleteTodo,
    newTodo,
    setNewTodo,
    isOpen,
    toggle,
  }
}
