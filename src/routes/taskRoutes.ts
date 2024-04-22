/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express'

// import taskController from '../infrastructure/taskController'
import TaskController from '../infrastructure/task-controller'
import TaskList from '../application/task-service'

const taskService = new TaskList()
const taskController = new TaskController(taskService)

const router = express.Router()

router.get('/', taskController.getTasks)
router.get('/:id', taskController.findTask)
router.post('/', taskController.addTask)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

export default router
