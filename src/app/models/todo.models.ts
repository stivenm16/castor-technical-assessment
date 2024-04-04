export interface Todo {
  id: string
  title: string
  description: string
  status: boolean
  createdAt: any
}

export interface CreateTodo {
  title: string
  description: string
}
