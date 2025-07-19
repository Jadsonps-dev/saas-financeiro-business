
'use client'

import { useUser } from '@clerk/nextjs'
import { useUserData } from '@/hooks/useUserData'
import { RevenueCard } from '@/components/RevenueCard'
import { TransactionsList } from '@/components/TransactionsList'
import { User, CreditCard, TrendingUp, DollarSign, Loader2 } from 'lucide-react'

export default function Dashboard() {
  const { user } = useUser()
  const { userData, loading, error } = useUserData()

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 text-blue-600 animate-spin" />
          <p className="text-blue-600">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Dashboard Financeiro
              </h1>
              <p className="text-gray-600">
                Bem-vindo de volta, {user?.firstName}!
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <img
                src={user?.imageUrl}
                alt="Avatar"
                className="w-12 h-12 rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* User Data Card */}
        {userData && (
          <div className="mb-8 bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
            <div className="flex items-center mb-4">
              <User className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">
                Informações do Usuário
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                <p className="font-medium text-gray-900">{userData.name || 'Não informado'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{userData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">ID do Usuário</p>
                <p className="font-medium text-gray-900">{userData.clerkId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Data de Cadastro</p>
                <p className="font-medium text-gray-900">
                  {new Date(userData.createdAt).toLocaleDateString('pt-BR')}
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-red-600">Erro ao carregar dados: {error}</p>
          </div>
        )}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <RevenueCard
            title="Receita Total"
            value="R$ 12.450"
            change={12}
            icon={DollarSign}
            color="green"
          />
          <RevenueCard
            title="Despesas"
            value="R$ 8.230"
            change={-8}
            icon={CreditCard}
            color="red"
          />
          <RevenueCard
            title="Lucro Líquido"
            value="R$ 4.220"
            change={25}
            icon={TrendingUp}
            color="blue"
          />
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Transações Recentes
            </h2>
          </div>
          <TransactionsList />
        </div>
      </div>
    </div>
  )
}
