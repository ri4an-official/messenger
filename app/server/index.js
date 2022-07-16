import express from 'express'
import mongoose from 'mongoose'
import messageRouter from './routers/messageRouter.js'
import userRouter from './routers/userRouter.js'
import { DB_URI, PORT, BASE_URL } from './config.js'

const app = express()
    .use(express.json()) // for json requests
    .use(`${BASE_URL}/messages`, messageRouter)
    .use(`${BASE_URL}/users`, userRouter)

const startApp = async () => {
    try {
        await mongoose.connect(DB_URI)
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}
startApp()
