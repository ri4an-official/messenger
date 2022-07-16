import { Router } from 'express'
import MessageController from '../controllers/MessageController.js'

const router = new Router()

router.get('/:id', MessageController.getAll)
router.get('/:id', MessageController.get)

router.post('/', MessageController.create)
router.put('/', MessageController.update)
router.delete('/:id', MessageController.delete)

export default router
