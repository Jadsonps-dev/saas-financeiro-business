
'use client'

import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">FinanceiroSaaS</h1>
          <p className="text-green-200 text-lg">Crie sua conta e comece agora</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 
                  'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg',
                card: 'bg-transparent shadow-none',
                headerTitle: 'text-white text-2xl font-bold',
                headerSubtitle: 'text-green-200',
                socialButtonsBlockButton: 
                  'bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl',
                socialButtonsBlockButtonText: 'text-white font-medium',
                formFieldLabel: 'text-white font-medium',
                formFieldInput: 
                  'bg-white/10 border border-white/20 text-white placeholder:text-green-200 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-transparent',
                footerActionLink: 'text-green-300 hover:text-green-200 font-medium',
                dividerLine: 'bg-white/20',
                dividerText: 'text-green-200',
                formFieldErrorText: 'text-red-300',
                identityPreviewText: 'text-white',
                formResendCodeLink: 'text-green-300 hover:text-green-200'
              },
              layout: {
                socialButtonsPlacement: 'top'
              }
            }}
            redirectUrl="/dashboard"
            signInUrl="/sign-in"
          />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-green-200">
            Já tem uma conta?{' '}
            <a href="/sign-in" className="text-white font-semibold hover:text-green-200 transition-colors">
              Fazer login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
