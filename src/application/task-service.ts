/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Task } from '../domain/task'

export default class TaskList {
  tasks: Task[]

  constructor() {
    this.tasks = []
  }

  async findTask(id: number): Promise<Task | undefined> {
    const task: Task | undefined = this.tasks.find(tsk => tsk.id === id)
    return task
  }

  async addTask(description: string): Promise<Task> {
    const ids: number[] = this.tasks.map(task => task.id)
    const maxId: number = ids.length !== 0 ? Math.max(...ids) : 0

    const newTask: Task = {
      id: maxId + 1,
      task: description,
      completed: false
    }

    this.tasks.push(newTask)
    return newTask // Aquí resolem la promesa amb la nova tasca
  }

  // async addTask(description: string): Promise<Task> {
  //   const ids: number[] = this.tasks.map(task => task.id)
  //   const maxId: number = ids.length !== 0 ? Math.max(...ids) : 0

  //   const newTask: Task = {
  //     id: maxId + 1,
  //     task: description,
  //     completed: false
  //   }
  //   this.tasks.push(newTask)
  //   return newTask
  // }

  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  async deleteTask(id: number): Promise<void | undefined> {
    const task: Task | undefined = await this.findTask(id)
    if (task !== undefined) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    } else {
      return undefined
    }

    // try {
    //   const task: Task | undefined = await this.findTask(id)

    //   if (task !== undefined) { // Comprova si s'ha trobat la tasca
    //     this.tasks = this.tasks.filter(t => t.id !== id) // Inverteix l'estat de la tasca
    //   }
    // } catch (error) {
    //   console.error(error);
    //   // En cas d'error, retorna null
    // }
  }

  async completeTask(id: number): Promise<Task | null> {
    const task: Task | undefined = await this.findTask(id)
    if (task !== undefined) {
      task.completed = !task.completed
      return task
    }
    return null

    // try {
    //   const task: Task | undefined = await this.findTask(id) // Espera a la resolució de la promesa

    //   if (task !== undefined) { // Comprova si s'ha trobat la tasca
    //     task.completed = !task.completed // Inverteix l'estat de la tasca
    //     return task // Retorna la tasca modificada
    //   } else {
    //     return null // Retorna null si la tasca no es troba
    //   }
    // } catch (error) {
    //   console.error('Error al completar la tasca:', error)
    //   return null // En cas d'error, retorna null
    // }
  }
}
