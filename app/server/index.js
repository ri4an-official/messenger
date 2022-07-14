import express from 'express'
import mongoose from 'mongoose'
import { DB_URL, PORT, mongodbOptions } from './config.js'
import messageRouter from './routers/messageRouter.js'

const app = express()

app.use(express.json()) // for json requests
app.use('/api', messageRouter)

const startApp = async () => {
    try {
        mongoose.connect(DB_URL, mongodbOptions)
        app.listen(PORT, () =>
            console.log('Server started on http://localhost:' + PORT)
        )
    } catch (e) {
        console.log(e)
    }
}
startApp()
