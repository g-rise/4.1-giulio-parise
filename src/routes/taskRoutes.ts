import express from 'express'

import TaskController from '../infrastructure/taskController'
import TaskList from '../application/taskService'

const taskService = new TaskList()
const taskController = new TaskController(taskService)

const router = express.Router()

router.get('/', taskController.getTasks)
router.get('/:id', taskController.findTask)
router.post('/', taskController.addTask)
router.put('/:id', taskController.updateTask)
router.delete('/:id', taskController.deleteTask)

export default router
