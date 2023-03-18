import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const users = await anyOp()
  console.dir(users, { depth: null });
}

async function anyOp() {
  return await prisma.user.findMany({
    where: {
      OR: [
        { name: { startsWith: 'userx' }},
        { AND: [{ name: { endsWith: '2' }}, { id: 2}]}
      ]
    }
  })
}

async function createUser(userData) {
  const response = await prisma.user.create({
    data: userData
  })
  return response
}

async function fetchUsers() {
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  return users
}

async function findUserById(id) {
  const user = await prisma.user.findFirst({
    where: { id },
    include: {
      posts: true
    }
  })
  return user
}

async function deleteUser(id){
  const response = await prisma.user.delete({
    where: { id }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
  })
