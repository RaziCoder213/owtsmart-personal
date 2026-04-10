import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle2, Home } from 'lucide-react';

export default function Auth() {
  const [searchParams] = useSearchParams();
  const view = searchParams.get('view') || 'login';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">
            {view === 'register' ? 'Register to Continue' : 'Login to Continue'}
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#E5F7ED] px-4 py-1.5 text-sm font-medium text-[#1E8A55]">
            <CheckCircle2 className="h-4 w-4" />
            {view === 'register' ? 'Free to register and book a service' : 'Free to login and book a service'}
          </div>
        </div>

        <div className="mt-8 bg-white py-8 px-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] sm:rounded-[20px] border border-gray-100">
          {view === 'login' && (
            <div className="space-y-6">
              <div>
                <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded-full border-gray-300 text-[#7A40F2] focus:ring-[#7A40F2]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-[#7A40F2] hover:text-[#6A30E2]">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-[15px] font-medium text-white bg-[#E0D4FC] hover:bg-[#D1C0FB] transition-colors">
                Sign In & Continue
              </button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-400">OR</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-[15px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/auth?view=register" className="font-medium text-[#7A40F2] hover:text-[#6A30E2]">
                  Register
                </Link>
              </p>
            </div>
          )}
          {view === 'register' && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-[15px] font-semibold text-gray-900">How would you like to join?</h3>
                <p className="text-sm text-gray-500 mt-1">Select the option that best describes you.</p>
              </div>

              <div className="relative rounded-lg border border-[#A7F3D0] bg-[#F0FDF4] p-4 flex gap-4 cursor-pointer">
                 <div className="flex-shrink-0 mt-0.5">
                    <div className="w-8 h-8 rounded-full bg-[#065F46] flex items-center justify-center">
                      <Home className="h-4 w-4 text-white" />
                    </div>
                 </div>
                 <div>
                    <h4 className="text-[14px] font-semibold text-[#065F46]">I'm a Homeowner</h4>
                    <p className="text-sm text-[#065F46] opacity-80 mt-0.5 leading-snug">Register to manage your onsite wastewater treatment system.</p>
                 </div>
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-gray-900 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>

              <div className="flex items-center">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-[#7A40F2] focus:ring-[#7A40F2]"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-[#7A40F2] hover:text-[#6A30E2]">Terms of Use</a>
                  {' '}and{' '}
                  <a href="#" className="text-[#7A40F2] hover:text-[#6A30E2]">Privacy Policy</a>
                </label>
              </div>

              <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-[15px] font-medium text-white bg-[#E0D4FC] hover:bg-[#D1C0FB] transition-colors">
                Create Account
              </button>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-400">OR</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-[15px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853"
                      />
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335"
                      />
                    </svg>
                    Continue with Google
                  </button>
                </div>
              </div>

              <p className="mt-8 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/auth?view=login" className="font-medium text-[#7A40F2] hover:text-[#6A30E2]">
                  Sign In
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
