/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Request, Response } from 'express'
import TaskList from '../application/task-service'

const taskManager: TaskList = new TaskList()

export default class TaskController {
  taskManager: TaskList
  constructor(taskManager: TaskList) {
    this.taskManager = taskManager
  }

  async findTask(req: Request, res: Response): Promise<void> {
    const id = +req.params.id
    const thisTask = await taskManager.findTask(id)
    // console.log(thisTask)
    if (thisTask === undefined) {
      res.status(404).json('Asquesta tasca no existeix')
    }
    res.status(200).json(thisTask)
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    const id = +(req.params.id)
    const thisTask = await taskManager.completeTask(id)
    if (thisTask == null) {
      res.status(404).json('Asquesta tasca no existeix')
    } else {
      res.status(200).json(thisTask)
    }
  }

  async addTask(req: Request, res: Response): Promise<void> {
    // console.log('Request Body:', request.body)
    const { note }: { note: string } = req.body
    // console.log(note)
    if (note === '') {
      res.status(400).json('Falta el camp "note" en el cos de la sol·licitud.')
    } else {
      // console.log('Note:', note)
      // console.log(note)
      const newTask = await taskManager.addTask(note)
      res.status(201).json(newTask)
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    const id: number = +(req.params.id)
    // console.log('ID de tasca a eliminar:', id)
    const taskToDelete = await taskManager.findTask(id)
    if (taskToDelete === undefined) {
      res.status(404).json('Asquesta tasca no existeix')
    } else {
      await taskManager.deleteTask(id)
      res.status(200).json('Tasca eliminada correctament!')
    }
  }

  /*
  async deleteTask1(req: Request, res: Response) {
    const id: number = +(req.params.id);
    console.log('ID de tasca a eliminar:', id)

    try {
      const task = await taskManager.findTask(id)
      console.log('Tasca trobada:', task)

      if (!task) {
        return res.status(404).json("Aquesta tasca no existeix")
      }

      await taskManager.deleteTask(id);
      return res.status(200).json('Tasca eliminada correctament!')

    } catch (error) {
      console.error("Error al eliminar la tasca:", error);
      return res.status(500).json("Error al eliminar la tasca");
    }
  }

*/

  async getTasks(_req: Request, res: Response): Promise<void> {
    // res.json(taskManager.tasks)
    if (taskManager.tasks.length < 1) {
      res.status(200).json('No hi ha cap tasca per ensenyar!')
    } else {
      res.status(200).json(taskManager.tasks)
    }
  }
}
