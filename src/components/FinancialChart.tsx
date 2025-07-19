
'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', receita: 12000, despesas: 8000 },
  { month: 'Fev', receita: 15000, despesas: 9500 },
  { month: 'Mar', receita: 18000, despesas: 11000 },
  { month: 'Abr', receita: 22000, despesas: 12500 },
  { month: 'Mai', receita: 25000, despesas: 14000 },
  { month: 'Jun', receita: 28000, despesas: 15500 },
  { month: 'Jul', receita: 32000, despesas: 18000 },
  { month: 'Ago', receita: 35000, despesas: 19500 },
  { month: 'Set', receita: 38000, despesas: 21000 },
  { month: 'Out', receita: 42000, despesas: 23500 },
  { month: 'Nov', receita: 45000, despesas: 25000 },
  { month: 'Dez', receita: 48000, despesas: 26500 }
]

export function FinancialChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
          <XAxis 
            dataKey="month" 
            stroke="#64748b"
            fontSize={12}
          />
          <YAxis 
            stroke="#64748b"
            fontSize={12}
            tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            formatter={(value: number) => [`R$ ${value.toLocaleString('pt-BR')}`, '']}
            labelStyle={{ color: '#1e293b' }}
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="receita" 
            stroke="#10b981" 
            strokeWidth={3}
            name="Receita"
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="despesas" 
            stroke="#ef4444" 
            strokeWidth={3}
            name="Despesas"
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
