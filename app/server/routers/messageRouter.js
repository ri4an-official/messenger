import { Router } from 'express'
import MessageController from '../controllers/MessageController.js'

const router = new Router()

router.get('/messages', MessageController.getAll)
router.post('/messages', MessageController.create)
router.put('/messages', MessageController.update)

router.get('/messages/:id', MessageController.get)
router.delete('/messages/:id', MessageController.delete)

export default router
