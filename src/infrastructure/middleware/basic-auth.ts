import { Request, Response, NextFunction } from 'express'
import auth from 'basic-auth'

const basicAuth = (req: Request, res: Response, next: NextFunction): void => {
  // console.log('Middleware: basic authentication')
  const user: auth.BasicAuthResult | undefined = auth(req)

  const username: string = 'maggio'
  const password: string = '123456'

  if (user !== undefined && user.name === username && user.pass === password) {
    next()
  } else {
    res.status(401).json('UNAUTHORIZED')
  }
}

export default basicAuth
