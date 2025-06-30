import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"
import prisma from "@/lib/prisma"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  if (!session) return res.status(401).json({ error: "Unauthorized" })

  const userEmail = session.user?.email
  if (!userEmail) return res.status(400).json({ error: "Missing user email" })

  const user = await prisma.user.findUnique({ where: { email: userEmail } })
  if (!user) return res.status(404).json({ error: "User not found" })

  if (req.method === "GET") {
    const books = await prisma.book.findMany({ where: { userId: user.id } })
    return res.json(books)
  }

  if (req.method === "POST") {
    const { title, author, rating } = req.body
    const book = await prisma.book.create({
      data: { title, author, rating, userId: user.id }
    })
    return res.status(201).json(book)
  }

  res.status(405).end()
}