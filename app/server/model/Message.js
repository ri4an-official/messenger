import mongoose from 'mongoose'

export const MessageSchema = mongoose.Schema({
    text: { type: String, required: true },
    userId: { type: Number, required: true },
    chatId: { type: Number, required: true },
})
export default mongoose.model('Message', MessageSchema)
