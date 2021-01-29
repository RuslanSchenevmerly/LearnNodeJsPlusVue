import { Router } from 'express'
import { getAll, create, remove } from '../controllers/servers.js'

const router = Router()
import Server from '../models/server_model.js'

router.get('/', (request, response) => {
  response.render('index', {
    title: "Index page"
  })
})

router.get('/features/', (request, response) => {
  response.render('features', {
    title: 'Features page'
  })
})

router.get('/api/server/', getAll)

router.post('/api/server/', create)

router.delete('/api/server/:id/', remove)

export default router