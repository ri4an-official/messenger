import MessageService from '../services/MessageService.js'

class MessageController {
    create = async (req, resp) => {
        try {
            const body = req.body
            const message = await MessageService.create(body)
            return resp.json(message)
        } catch (e) {
            resp.status(500).json(e)
        }
    }
    getAll = async (req, resp) => {
        try {
            const messages = await MessageService.getAll()
            return resp.json(messages)
        } catch (e) {
            resp.status(500).json(e)
        }
    }
    get = async (req, resp) => {
        try {
            const { id } = req.params
            const message = await MessageService.get(id)
            return resp.json(message)
        } catch (e) {
            resp.status(500).json(e.message)
        }
    }
    delete = async (req, resp) => {
        try {
            const { id } = req.params
            const message = await MessageService.delete(id)
            return resp.json(message)
        } catch (e) {
            resp.status(500).json(e.message)
        }
    }
    update = async (req, resp) => {
        try {
            const body = req.body
            const message = await MessageService.update(body)
            return resp.json(message)
        } catch (e) {
            resp.status(500).json(e)
        }
    }
}
export default new MessageController()
