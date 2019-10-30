import bodyParser from "body-parser"
import express, {NextFunction, Request, Response} from "express"

import routes from "./handlers/rest"

const app = express()

const {PORT = 5000} = process.env

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

app.use(function(_: Request, res: Response, next: NextFunction) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next();
});


app.listen(PORT, () => {
  // tslint:disable-next-line no-console
  console.log(`server started at http://localhost: ${PORT}`)
})
