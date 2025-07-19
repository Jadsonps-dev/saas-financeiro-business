
export interface Transaction {
  id: string
  description: string
  amount: number
  type: 'receita' | 'despesa'
  date: string
  category: string
  clientId?: string
}

export interface Client {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  createdAt: string
}

export interface FinancialMetric {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  period: string
}

export interface ChartData {
  month: string
  receita: number
  despesas: number
  lucro?: number
}

export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user'
  companyId: string
}

export interface Company {
  id: string
  name: string
  cnpj: string
  address: string
  plan: 'basic' | 'pro' | 'enterprise'
  createdAt: string
}
