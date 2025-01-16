import express from 'express';
import { PORT } from "./config.js";
import userRouters from "./routes/user.routes.js";
import morgan from 'morgan'

const app = express()


app.use(morgan('dev'))
app.use(express.json())
app.use(userRouters)

app.listen(PORT)
console.log('server on port', PORT);