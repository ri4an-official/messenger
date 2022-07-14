import UserService from '../services/UserService.js'

class UserController {
    create = async (req, resp) => {
        try {
            const body = req.body
            const user = await UserService.create(body)
            return resp.json(user)
        } catch (e) {
            resp.status(500).json(e)
        }
    }
    getAll = async (req, resp) => {
        try {
            const users = await UserService.getAll()
            return resp.json(users)
        } catch (e) {
            resp.status(500).json(e)
        }
    }
    get = async (req, resp) => {
        try {
            const { id } = req.params
            const user = await UserService.get(id)
            return resp.json(user)
        } catch (e) {
            resp.status(500).json(e.message)
        }
    }
    delete = async (req, resp) => {
        try {
            const { id } = req.params
            const user = await UserService.delete(id)
            return resp.json(user)
        } catch (e) {
            resp.status(500).json(e.message)
        }
    }
    update = async (req, resp) => {
        try {
            const { id, message } = req.body
            const user = await UserService.addMessage({ id, message })
            return resp.json(user)
        } catch (e) {
            resp.status(500).json(e.message)
        }
    }
}
export default new UserController()
