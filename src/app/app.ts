import express, { Request, Response } from 'express'
import { PathArgs } from '../types/path-args'
import cors from 'cors'
const server = express()

server.use(cors())

const app = {
  get<P extends string>(
    path: P,
    handler: (req: Request<PathArgs<P>>, res: Response) => void
  ): void {
    server.get(path, handler)
  },

  post<P extends string, B>(
    path: P,
    handler: (req: Request<PathArgs<P>, B>, res: Response<B>) => void
  ): void {
    server.post(path, handler)
  },

  put<P extends string>(
    path: P,
    handler: <B = any>(req: Request<PathArgs<P>, B>, res: Response<B>) => void
  ): void {
    server.put(path, handler)
  },

  patch<P extends string>(
    path: P,
    handler: <B = any>(req: Request<PathArgs<P>, B>, res: Response) => void
  ): void {
    server.patch(path, handler)
  },

  delete<P extends string>(
    path: P,
    handler: (req: Request<PathArgs<P>>, res: Response) => void
  ): void {
    server.delete(path, handler)
  },

  options<P extends string>(
    path: P,
    handler: <B = any>(req: Request<PathArgs<P>, B>, res: Response<B>) => void
  ): void {
    server.options(path, handler)
  },
}

export { server, app }
