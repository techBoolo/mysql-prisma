import express from 'express'
import { getDB } from './config/db.js'
// import db from './config/db.js'

const app = express()

app.use(async (req, res) => {
  const db = getDB()
  const users = await db.user.findMany()
  res.status(200).json(users)
})

export default app
