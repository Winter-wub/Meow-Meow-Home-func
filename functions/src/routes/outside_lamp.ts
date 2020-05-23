import express, { response } from 'express'
import { config } from 'firebase-functions'
import mqtt from 'async-mqtt'
const router: express.Router = express.Router()



router.get('/on', async (req: express.Request, res: express.Response): Promise<void> => {
  console.info('on lamp outside')
  const env = config().mqtt
  try {
    const client = await mqtt.connectAsync(`${env.address}`, {
      username: `${env.username}`,
      password: `${env.pass}`,
      port: env.port,
    })
    await client.publish('cmnd/sonoff1/power', 'on')
    await client.end()
    console.info('on lamp outside success')
    res.send('ok')
  } catch (err) {
    console.error(err)
    response.status(500).send('error')
  }
 
})

router.get('/off', async (req: express.Request, res: express.Response): Promise<void> => {
  console.info('off lamp outside')
  const env = config().mqtt
  try {
    const client = await mqtt.connectAsync(`${env.address}`, {
      username: `${env.username}`,
      password: `${env.pass}`,
      port: env.port,
    })
    await client.publish('cmnd/sonoff1/power', 'off')
    await client.end()
    console.info('off lamp outside success')
    res.send('ok')
  } catch (err) {
    console.error(err)
    response.status(500).send('error')
  }
})

export default router