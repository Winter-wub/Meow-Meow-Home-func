import { https } from 'firebase-functions';
import express from 'express'
import bodyParser from 'body-parser'
import outSideLamp from './routes/outside_lamp'

const app: express.Express = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/v1/outside-lamp', outSideLamp)


export const main = https.onRequest(app);
