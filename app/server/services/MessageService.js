import Message from '../model/Message.js'

class MessageService {
    create = async (body) => {
        const message = await Message.create(body)
        return message
    }
    getAll = async () => {
        const messages = await Message.find()
        return messages
    }
    get = async (id) => {
        if (!id) throw new Error('Id is not defined')

        const message = await Message.findById(id)
        return message
    }
    delete = async (id) => {
        if (!id) throw new Error('Id is not defined')

        const deletedMessage = await Message.findByIdAndDelete(id)
        return deletedMessage
    }
    update = async (message) => {
        const updatedMessage = await Message.findByIdAndUpdate(
            message._id,
            message,
            { new: true }
        )
        return updatedMessage
    }
}
export default new MessageService()
