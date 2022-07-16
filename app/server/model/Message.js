import mongoose from 'mongoose'

export const MessageSchema = mongoose.Schema({
    text: { type: String, required: true },
    userId: { type: String, required: true },
})
export default mongoose.model('Message', MessageSchema)
