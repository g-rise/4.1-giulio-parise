/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Request, Response } from 'express'
import TaskList from '../application/taskService'

const taskManager: TaskList = new TaskList()

export default class TaskController {
  taskManager: TaskList
  constructor(taskManager: TaskList) {
    this.taskManager = taskManager
  }

  async findTask(req: Request, res: Response): Promise<void> {
    try {
      const id = +req.params.id
      const thisTask = await taskManager.findTask(id)
      // console.log(thisTask)
      if (thisTask === undefined) {
        res.status(404).json('Asquesta tasca no existeix')
      }
      res.status(200).json(thisTask)
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  }

  async updateTask(req: Request, res: Response): Promise<void> {
    try {
      const id = +req.params.id
      const thisTask = await taskManager.completeTask(id)
      if (thisTask == null) {
        res.status(404).json('Asquesta tasca no existeix')
      } else {
        res.status(200).json(thisTask)
      }
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  }

  async addTask(req: Request, res: Response): Promise<void> {
    try {
      const { note }: { note: string } = req.body
      // console.log(note)
      if (note === '') {
        res
          .status(400)
          .json('Falta el camp "note" en el cos de la sol·licitud.')
      } else {
        const newTask = await taskManager.addTask(note)
        res.status(201).json(newTask)
      }
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  }

  async deleteTask(req: Request, res: Response): Promise<void> {
    try {
      const id: number = +req.params.id
      // console.log('ID de tasca a eliminar:', id)
      const taskToDelete = await taskManager.findTask(id)
      if (taskToDelete === undefined) {
        res.status(404).json('Asquesta tasca no existeix')
      } else {
        await taskManager.deleteTask(id)
        res.status(200).json('Tasca eliminada correctament!')
      }
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  }

  async getTasks(_req: Request, res: Response): Promise<void> {
    try {
      if (taskManager.tasks.length < 1) {
        res.status(200).json('No hi ha cap tasca per ensenyar!')
      } else {
        res.status(200).json(taskManager.tasks)
      }
    } catch (error) {
      res.status(500).send('Internal Server Error')
    }
  }
}
