
import { LucideIcon } from 'lucide-react'

interface RevenueCardProps {
  title: string
  value: string
  change: number
  icon: LucideIcon
  color: string
}

export function RevenueCard({ title, value, change, icon: Icon, color }: RevenueCardProps) {
  const trend = change >= 0 ? 'up' : 'down'
  const colorClasses = {
    green: 'bg-green-500',
    red: 'bg-red-500',
    blue: 'bg-blue-500'
  }
  
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-3 rounded-2xl ${colorClasses[color as keyof typeof colorClasses] || 'bg-gray-500'} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          trend === 'up' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-red-100 text-red-700'
        }`}>
          {change > 0 ? '+' : ''}{change}%
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
          <div 
            className={`h-1 rounded-full ${colorClasses[color as keyof typeof colorClasses] || 'bg-gray-500'}`} 
            style={{ width: Math.abs(change) > 50 ? '75%' : '45%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
