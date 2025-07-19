
'use client'

import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">FinanceiroSaaS</h1>
          <p className="text-blue-200 text-lg">Acesse sua conta para continuar</p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 
                  'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg',
                card: 'bg-transparent shadow-none',
                headerTitle: 'text-white text-2xl font-bold',
                headerSubtitle: 'text-blue-200',
                socialButtonsBlockButton: 
                  'bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 rounded-xl',
                socialButtonsBlockButtonText: 'text-white font-medium',
                formFieldLabel: 'text-white font-medium',
                formFieldInput: 
                  'bg-white/10 border border-white/20 text-white placeholder:text-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent',
                footerActionLink: 'text-blue-300 hover:text-blue-200 font-medium',
                dividerLine: 'bg-white/20',
                dividerText: 'text-blue-200',
                formFieldErrorText: 'text-red-300',
                identityPreviewText: 'text-white',
                formResendCodeLink: 'text-blue-300 hover:text-blue-200'
              },
              layout: {
                socialButtonsPlacement: 'top'
              }
            }}
            redirectUrl="/dashboard"
            signUpUrl="/sign-up"
          />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-blue-200">
            Não tem uma conta?{' '}
            <a href="/sign-up" className="text-white font-semibold hover:text-blue-200 transition-colors">
              Criar conta
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
