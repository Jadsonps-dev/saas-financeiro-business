
import { ArrowUpRight, ArrowDownLeft, Building2, Wrench, Briefcase, Package } from 'lucide-react'

const transactions = [
  {
    id: 1,
    description: 'Pagamento - Cliente ABC Ltda',
    amount: 15000,
    type: 'receita' as const,
    date: '2024-01-15',
    category: 'Vendas',
    icon: Building2
  },
  {
    id: 2,
    description: 'Aluguel do Escritório',
    amount: -3500,
    type: 'despesa' as const,
    date: '2024-01-14',
    category: 'Infraestrutura',
    icon: Building2
  },
  {
    id: 3,
    description: 'Serviços de Consultoria',
    amount: 8500,
    type: 'receita' as const,
    date: '2024-01-13',
    category: 'Serviços',
    icon: Briefcase
  },
  {
    id: 4,
    description: 'Compra de Equipamentos',
    amount: -2800,
    type: 'despesa' as const,
    date: '2024-01-12',
    category: 'Equipamentos',
    icon: Package
  },
  {
    id: 5,
    description: 'Pagamento - Cliente XYZ S/A',
    amount: 22000,
    type: 'receita' as const,
    date: '2024-01-11',
    category: 'Vendas',
    icon: Building2
  }
]

export function TransactionsList() {
  return (
    <div className="space-y-3">
      {transactions.map((transaction, index) => (
        <div 
          key={transaction.id} 
          className="flex items-center justify-between p-5 bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center space-x-5">
            <div className="flex-shrink-0">
              <div className={`p-3 rounded-2xl shadow-sm ${
                transaction.type === 'receita' 
                  ? 'bg-gradient-to-br from-green-400 to-green-600 text-white' 
                  : 'bg-gradient-to-br from-red-400 to-red-600 text-white'
              }`}>
                {transaction.type === 'receita' ? (
                  <ArrowUpRight className="h-5 w-5" />
                ) : (
                  <ArrowDownLeft className="h-5 w-5" />
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-100 rounded-xl group-hover:bg-gray-200 transition-colors">
                <transaction.icon className="h-4 w-4 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-lg">{transaction.description}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                    transaction.type === 'receita'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {transaction.category}
                  </span>
                  <span className="text-sm text-gray-500 font-medium">
                    {new Date(transaction.date).toLocaleDateString('pt-BR', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className={`font-bold text-xl ${
              transaction.type === 'receita' ? 'text-green-600' : 'text-red-600'
            }`}>
              {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
            </p>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {transaction.type === 'receita' ? 'Entrada' : 'Saída'}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
