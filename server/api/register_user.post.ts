import { prisma } from "~/utils/prisma"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, password } = body

  try {
    const userExistOrNot = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (userExistOrNot) {
      return {
        ok: false,
        message: "User already exist"
      }
    }
    
    const creatUser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password
      }
    })
    // console.log("creatUser", creatUser)
    return {
      ok: true,
      message: "User created successfully"
    }

  } catch (error) {
    // console.log("trycatch errror", error)
    return {
      ok: false,
      message: error
    }
  }
})
