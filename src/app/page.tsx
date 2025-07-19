
'use client'

import { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  CreditCard,
  BarChart3,
  PieChart,
  Calendar
} from 'lucide-react'
import { FinancialChart } from '@/components/FinancialChart'
import { RevenueCard } from '@/components/RevenueCard'
import { TransactionsList } from '@/components/TransactionsList'

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('30d')

  const metrics = [
    {
      title: 'Receita Total',
      value: 'R$ 45.231,89',
      change: '+20.1%',
      trend: 'up' as const,
      icon: DollarSign
    },
    {
      title: 'Despesas',
      value: 'R$ 12.426,37',
      change: '-3.2%',
      trend: 'down' as const,
      icon: TrendingDown
    },
    {
      title: 'Clientes Ativos',
      value: '1.429',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Users
    },
    {
      title: 'Transações',
      value: '892',
      change: '+8.3%',
      trend: 'up' as const,
      icon: CreditCard
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">FinanceiroSaaS</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="input max-w-xs"
              >
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
                <option value="1y">Último ano</option>
              </select>
              <button className="btn btn-primary">
                <Calendar className="h-4 w-4 mr-2" />
                Relatório
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <RevenueCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Financial Chart */}
          <div className="lg:col-span-2">
            <div className="card">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Fluxo de Caixa</h2>
                <div className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-gray-500" />
                </div>
              </div>
              <FinancialChart />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-6">Ações Rápidas</h2>
            <div className="space-y-4">
              <button className="btn btn-primary w-full">
                <DollarSign className="h-4 w-4 mr-2" />
                Nova Receita
              </button>
              <button className="btn btn-secondary w-full">
                <TrendingDown className="h-4 w-4 mr-2" />
                Nova Despesa
              </button>
              <button className="btn btn-secondary w-full">
                <Users className="h-4 w-4 mr-2" />
                Gerenciar Clientes
              </button>
              <button className="btn btn-secondary w-full">
                <BarChart3 className="h-4 w-4 mr-2" />
                Relatórios
              </button>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card">
          <h2 className="text-xl font-semibold mb-6">Transações Recentes</h2>
          <TransactionsList />
        </div>
      </main>
    </div>
  )
}
