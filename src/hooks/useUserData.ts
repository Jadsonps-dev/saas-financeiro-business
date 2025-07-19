
'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

interface UserData {
  id: string
  clerkId: string
  email: string
  name: string | null
  imageUrl: string | null
  createdAt: string
  updatedAt: string
}

export function useUserData() {
  const { user, isLoaded } = useUser()
  const [userData, setUserData] = useState<UserData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const saveUserData = async () => {
    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user.primaryEmailAddress?.emailAddress,
          name: user.fullName,
          imageUrl: user.imageUrl
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao salvar dados do usuário')
      }

      const data = await response.json()
      setUserData(data.user)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
      console.error('Erro ao salvar usuário:', err)
    } finally {
      setLoading(false)
    }
  }

  const fetchUserData = async () => {
    if (!user) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/users')

      if (!response.ok) {
        if (response.status === 404) {
          // Se usuário não existe, salva os dados
          await saveUserData()
          return
        }
        throw new Error('Erro ao buscar dados do usuário')
      }

      const data = await response.json()
      setUserData(data.user)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido')
      console.error('Erro ao buscar usuário:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isLoaded && user) {
      fetchUserData()
    }
  }, [isLoaded, user])

  return {
    userData,
    loading,
    error,
    saveUserData,
    fetchUserData
  }
}
