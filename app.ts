import express, { Request, Response } from 'express';
import jwt  from 'jsonwebtoken';
import createError from "http-errors";
import { requireAuth } from './src/middleware/authMiddleware';
import { UserPayload } from './src/model/user';
import userRoute from "./src/routes/userRoute";
import dotenv from 'dotenv';
dotenv.config();

const bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
userRoute(app)
// const secretKey = process.env.JWT_SECRET!
// app.post('/login', (req:Request, res:Response) => {

//     const payload: UserPayload = {id:'1', username: 'john.doe', email: 'john@gmail.com'}
//     const token = jwt.sign(payload, secretKey, {
//         expiresIn: '1h'
//     })

//     res.json({ token })
// })

// app.get('/protected', requireAuth, (req:Request, res:Response) => {
//     res.json({ message: `Hello World ${req.user?.username}`  })
// })
// app.use((req: Request, res: Response, next: Function) => {
//     next(createError(404))
// })
let w = Date()
app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port} ${w}`)
})
