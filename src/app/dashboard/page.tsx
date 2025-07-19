
'use client'

import { useUser, UserButton } from '@clerk/nextjs'
import { useState } from 'react'
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  CreditCard,
  BarChart3,
  PieChart,
  Calendar,
  Plus,
  Sparkles
} from 'lucide-react'
import { FinancialChart } from '@/components/FinancialChart'
import { RevenueCard } from '@/components/RevenueCard'
import { TransactionsList } from '@/components/TransactionsList'

export default function Dashboard() {
  const { user } = useUser()
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
    <div className="min-h-screen">
      {/* Header */}
      <header className="header-glass sticky top-0 z-40">
        <div className="container">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="stat-icon">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold gradient-text">FinanceiroSaaS</h1>
                  <p className="text-sm text-gray-600 font-medium">Dashboard Executivo</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="input max-w-xs font-medium"
              >
                <option value="7d">Últimos 7 dias</option>
                <option value="30d">Últimos 30 dias</option>
                <option value="90d">Últimos 90 dias</option>
                <option value="1y">Último ano</option>
              </select>
              <button className="btn btn-primary">
                <Calendar className="h-5 w-5 mr-2" />
                Relatório Avançado
              </button>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10 border-2 border-white/20 rounded-full'
                  }
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="container py-8">
        <div className="glass-panel p-6 mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Bem-vindo de volta, {user?.firstName}! 
                <Sparkles className="inline h-6 w-6 ml-2 text-yellow-400" />
              </h2>
              <p className="text-gray-200 text-lg font-medium">
                Seus números estão crescendo {metrics[0].change} este mês
              </p>
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <p className="text-white text-3xl font-bold">
                  {new Date().toLocaleDateString('pt-BR', { 
                    weekday: 'long', 
                    day: 'numeric', 
                    month: 'long' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container pb-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className={`animate-fade-in animate-delay-${index + 1}`}>
              <RevenueCard {...metric} />
            </div>
          ))}
        </div>

        {/* Charts and Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Financial Chart */}
          <div className="lg:col-span-2 animate-fade-in animate-delay-1">
            <div className="card">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Fluxo de Caixa</h2>
                  <p className="text-gray-600 font-medium">Análise de receitas vs despesas</p>
                </div>
                <div className="stat-icon">
                  <PieChart className="h-5 w-5 text-white" />
                </div>
              </div>
              <FinancialChart />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="animate-fade-in animate-delay-2">
            <div className="card h-full">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ações Rápidas</h2>
              <p className="text-gray-600 font-medium mb-8">Acesso direto às funções principais</p>
              <div className="space-y-4">
                <button className="btn btn-primary w-full text-left justify-start">
                  <DollarSign className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-semibold">Nova Receita</div>
                    <div className="text-sm opacity-90">Registrar entrada</div>
                  </div>
                </button>
                <button className="btn btn-secondary w-full text-left justify-start">
                  <TrendingDown className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-semibold">Nova Despesa</div>
                    <div className="text-sm opacity-70">Registrar saída</div>
                  </div>
                </button>
                <button className="btn btn-secondary w-full text-left justify-start">
                  <Users className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-semibold">Gerenciar Clientes</div>
                    <div className="text-sm opacity-70">Base de clientes</div>
                  </div>
                </button>
                <button className="btn btn-secondary w-full text-left justify-start">
                  <BarChart3 className="h-5 w-5 mr-3" />
                  <div>
                    <div className="font-semibold">Relatórios</div>
                    <div className="text-sm opacity-70">Analytics detalhados</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="animate-fade-in animate-delay-3">
          <div className="card">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Transações Recentes</h2>
                <p className="text-gray-600 font-medium">Últimas movimentações financeiras</p>
              </div>
              <button className="btn btn-primary">
                Ver Todas
              </button>
            </div>
            <TransactionsList />
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="floating-action">
        <Plus className="h-6 w-6 text-white" />
      </button>
    </div>
  )
}
