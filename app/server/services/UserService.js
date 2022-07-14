import User from '../model/User.js'

class UserService {
    create = async (body) => {
        const user = await User.create(body)
        return user
    }
    getAll = async () => {
        const users = await User.find()
        return users
    }
    get = async (id) => {
        if (!id) throw new Error('Id is not defined')

        const user = await User.findById(id)
        return user
    }
    delete = async (id) => {
        if (!id) throw new Error('Id is not defined')

        const deleteduser = await User.findByIdAndDelete(id)
        return deleteduser
    }
    addMessage = async ({ id, message }) => {
        if (!id) throw new Error('Id is not defined')

        const user = await User.findById(id)
        const newUser = {
            ...user,
            messages: [...user.messages, message],
        }
        const updatedUser = await User.findByIdAndUpdate(user._id, newUser)
        return updatedUser
    }
}
export default new UserService()
