import express from 'express'
import auth from './routes/Auth/Auth'
import BodyParser from 'body-parser'
const app = express()

app.use(BodyParser)
app.use(auth)

app.listen(3000, () => {
    console.log('3000很優')
})