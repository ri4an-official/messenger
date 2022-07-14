import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = new Router()

router.get('/', UserController.getAll)
router.get('/:id', UserController.get)

router.post('/', UserController.create)
router.delete('/:id', UserController.delete)

router.put('/:id', UserController.update)

export default router
