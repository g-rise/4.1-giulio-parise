import { Request, Response, NextFunction } from 'express'

const hadNoCacheHeader = (
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.setHeader('Cache-Control', 'no-cache')
  next()
}

export default hadNoCacheHeader
