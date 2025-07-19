
import { LucideIcon } from 'lucide-react'

interface RevenueCardProps {
  title: string
  value: string
  change: string
  trend: 'up' | 'down'
  icon: LucideIcon
}

export function RevenueCard({ title, value, change, trend, icon: Icon }: RevenueCardProps) {
  return (
    <div className="metric-card group">
      <div className="flex items-center justify-between mb-6">
        <div className="stat-icon group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-bold ${
          trend === 'up' 
            ? 'bg-green-100 text-green-700 trend-up' 
            : 'bg-red-100 text-red-700 trend-down'
        }`}>
          {change}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
          <div 
            className={`h-1 rounded-full ${
              trend === 'up' ? 'bg-green-500' : 'bg-red-500'
            }`} 
            style={{ width: trend === 'up' ? '75%' : '45%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
