
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { email, name, imageUrl } = await req.json()

    // Verifica se o usuário já existe
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (existingUser) {
      // Atualiza os dados do usuário se já existe
      const updatedUser = await prisma.user.update({
        where: { clerkId: userId },
        data: {
          email,
          name,
          imageUrl
        }
      })
      return NextResponse.json({ user: updatedUser })
    }

    // Cria um novo usuário se não existe
    const newUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email,
        name,
        imageUrl
      }
    })

    return NextResponse.json({ user: newUser })
  } catch (error) {
    console.error('Erro ao salvar usuário:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  try {
    const { userId } = auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const user = await prisma.user.findUnique({
      where: { clerkId: userId }
    })

    if (!user) {
      return NextResponse.json({ error: 'Usuário não encontrado' }, { status: 404 })
    }

    return NextResponse.json({ user })
  } catch (error) {
    console.error('Erro ao buscar usuário:', error)
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}
