import './config/db.js'
import db from  './config/db.js'

async function getAll() {
  const users = await db.user.findMany()
  return users
}

const result = await getAll()
console.log(result);
