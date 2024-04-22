import { Task } from '../domain/task'

export default class TaskList {
  tasks: Task[]

  constructor() {
    this.tasks = []
  }

  async findTask(id: number): Promise<Task | undefined> {
    const task: Task | undefined = this.tasks.find((tsk) => tsk.id === id)
    return task
  }

  async addTask(description: string): Promise<Task> {
    const ids: number[] = this.tasks.map((task) => task.id)
    const maxId: number = ids.length !== 0 ? Math.max(...ids) : 0

    const newTask: Task = {
      id: maxId + 1,
      task: description,
      completed: false
    }

    this.tasks.push(newTask)
    return newTask
  }

  async deleteTask(id: number): Promise<void | undefined> {
    const task: Task | undefined = await this.findTask(id)
    if (task !== undefined) {
      this.tasks = this.tasks.filter((t) => t.id !== id)
    } else {
      return undefined
    }
  }

  async completeTask(id: number): Promise<Task | null> {
    const task: Task | undefined = await this.findTask(id)
    if (task !== undefined) {
      task.completed = !task.completed
      return task
    }
    return null
  }
}
