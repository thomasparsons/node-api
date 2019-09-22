import express, {NextFunction, Request, Response} from "express"

import service from "../services/slack"

const router = express.Router()

router.get("/", async(req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await service.genericResponse(req.body)
    return res.json(response)
  } catch(err) {
    return next(err)
  }
})

export default router
