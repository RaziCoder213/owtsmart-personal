import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VerifyEmail() {
  const navigate = useNavigate();

  const handleResend = () => {
    // Add toast or alert for resent email
    alert("Verification email sent!");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-[#F8F9FB] px-4 py-12">
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1D2B36] mb-2 font-['Inter']">Verify your email</h2>
          <p className="text-[15px] text-[#64748B] font-['Inter']">We've sent a link to your email address</p>
        </div>

        <div className="bg-white py-8 px-6 sm:px-10 rounded-[20px] shadow-[0_2px_20px_rgb(0,0,0,0.04)] text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-[#F0FDF4] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#065F46]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <h3 className="text-[18px] font-semibold text-gray-900 mb-2">Check your inbox</h3>
          <p className="text-[14px] text-gray-500 mb-8">
            Click the link in the email we sent to verify your account and continue setting up your profile.
          </p>

          <button
            onClick={() => navigate('/onboarding')}
            className="w-full mb-4 flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-[15px] font-medium text-white bg-[#8C52FF] hover:bg-[#7A40F2] transition-colors"
          >
            Continue
          </button>

          <div className="text-sm">
            <span className="text-gray-500">Didn't receive an email? </span>
            <button
              onClick={handleResend}
              className="font-medium text-[#7A40F2] hover:text-[#6A30E2]"
            >
              Resend Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
