import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
      name: 'user1',
      posts: {
        create: { title: 'hi there' }
      }
    }
  })
  const users = await prisma.user.findMany({
    include: {
      posts: true
    }
  })
  console.dir(users, { depth: null });
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
