import Message from '../model/Message.js'
import UserService from './UserService.js'

class MessageService {
    create = async (body) => {
        const message = await Message.create(body)

        const user = UserService.addMessage(body.userId, message)

        return user
    }

    getAll = async (userId) => {
        const messages = await Message.find({ userId })
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
