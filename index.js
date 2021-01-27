import express from 'express'
import path from 'path'
import { requestTime } from './middlewares.js'
import ejs from 'ejs'
import server_routes from './routes/router.js'
import router from './routes/router.js'

const __dirname = path.resolve()

const app = express()

app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(requestTime)
app.use(router)

app.set('view engine', 'ejs')

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})

