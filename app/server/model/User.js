import mongoose from 'mongoose'
import { MessageSchema } from './Message.js'

const User = mongoose.Schema({
    name: { type: String, required: true },
    messages: { type: [MessageSchema] },
})

export default mongoose.model('User', User)
