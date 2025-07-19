
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

const transactions = [
  {
    id: 1,
    description: 'Pagamento - Cliente ABC Ltda',
    amount: 15000,
    type: 'receita' as const,
    date: '2024-01-15',
    category: 'Vendas'
  },
  {
    id: 2,
    description: 'Aluguel do Escritório',
    amount: -3500,
    type: 'despesa' as const,
    date: '2024-01-14',
    category: 'Infraestrutura'
  },
  {
    id: 3,
    description: 'Serviços de Consultoria',
    amount: 8500,
    type: 'receita' as const,
    date: '2024-01-13',
    category: 'Serviços'
  },
  {
    id: 4,
    description: 'Compra de Equipamentos',
    amount: -2800,
    type: 'despesa' as const,
    date: '2024-01-12',
    category: 'Equipamentos'
  },
  {
    id: 5,
    description: 'Pagamento - Cliente XYZ S/A',
    amount: 22000,
    type: 'receita' as const,
    date: '2024-01-11',
    category: 'Vendas'
  }
]

export function TransactionsList() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full ${
              transaction.type === 'receita' 
                ? 'bg-green-100 text-green-600' 
                : 'bg-red-100 text-red-600'
            }`}>
              {transaction.type === 'receita' ? (
                <ArrowUpRight className="h-4 w-4" />
              ) : (
                <ArrowDownLeft className="h-4 w-4" />
              )}
            </div>
            <div>
              <p className="font-medium text-gray-900">{transaction.description}</p>
              <p className="text-sm text-gray-500">
                {transaction.category} • {new Date(transaction.date).toLocaleDateString('pt-BR')}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-semibold ${
              transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
