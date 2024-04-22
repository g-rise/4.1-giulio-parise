import express from 'express' // middleware que transforma req body en json

import taskRouter from './routes/taskRoutes'
import hadNoCacheHeader from './infrastructure/middleware/http-middleware'
import cors from 'cors'
import basicAuth from './infrastructure/middleware/basic-auth'

const app = express()

app.use(express.json())

const PORT = process.env.PORT ?? 3003

app.use('/tasks', hadNoCacheHeader)
app.use(cors())
app.use(basicAuth)
app.use('/tasks', taskRouter)

app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`)
})
