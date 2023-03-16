import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findFirst({
    where: { id: 1},
    include: {
      posts: true
    }
  })
  console.dir(user, { depth: null });
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
