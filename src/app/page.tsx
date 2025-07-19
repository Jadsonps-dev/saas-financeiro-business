
'use client'

import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2, BarChart3 } from 'lucide-react'

export default function HomePage() {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push('/dashboard')
      } else {
        router.push('/sign-in')
      }
    }
  }, [isLoaded, isSignedIn, router])

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 bg-white/10 rounded-3xl backdrop-blur-lg border border-white/20">
              <BarChart3 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">FinanceiroSaaS</h1>
          <div className="flex items-center justify-center space-x-2">
            <Loader2 className="h-6 w-6 text-white animate-spin" />
            <p className="text-white text-lg">Carregando...</p>
          </div>
        </div>
      </div>
    )
  }

  return null
}
