import express, {NextFunction, Request, Response} from "express"

import {airtable, slack} from "../services"

const router = express.Router()

const routerHandler = async (req: Request, res: Response, next: NextFunction, func: any) => {
  try {
    const response = await func(req.body)
    return res.json(response)
  } catch (err) {
    return next(err)
  }
}

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  return routerHandler(req, res, next, slack.genericResponse)
})

router.get("/data", async (req: Request, res: Response, next: NextFunction) => {
  return routerHandler(req, res, next, airtable.genericResponse)
})

export default router
