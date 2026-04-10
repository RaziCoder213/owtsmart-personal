import React from 'react';
import { MapPin } from 'lucide-react';

export default function Onboarding() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F8F9FB] flex flex-col pt-12">
      {/* Progress Bar Area */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#8C52FF] text-white flex items-center justify-center text-xs font-bold">!</div>
            <span className="text-[#8C52FF] text-[15px] font-medium">Property Address</span>
          </div>
          <div className="w-16 h-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 rounded-full bg-[#E2E8F0] text-white flex items-center justify-center text-xs font-bold">!</div>
            <span className="text-gray-500 text-[15px] font-medium">System Operation</span>
          </div>
          <div className="w-16 h-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 rounded-full bg-[#E2E8F0] text-white flex items-center justify-center text-xs font-bold">!</div>
            <span className="text-gray-500 text-[15px] font-medium">Preferred Service Provider</span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="flex-1 flex flex-col items-center px-4">
        <div className="bg-white rounded-xl shadow-[0_2px_20px_rgb(0,0,0,0.04)] w-full max-w-[600px] p-8 mb-8 border border-gray-100">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-[#E1F3EE] rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5 text-[#065F46]" />
            </div>
            <h2 className="text-[22px] font-bold text-gray-900 mb-2">Property Details</h2>
            <p className="text-gray-500 text-[15px] text-center">Tell us about your property location and system</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-[13px] font-bold text-gray-900 mb-2">Address</label>
              <input
                type="text"
                placeholder="Your Address"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[15px] placeholder-gray-400 focus:border-[#8C52FF] focus:outline-none focus:ring-1 focus:ring-[#8C52FF]"
              />
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200">
              <iframe
                src="https://maps.google.com/maps?q=Auckland,NZ&t=&z=10&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
            <p className="text-[13px] text-gray-500 mt-1">You must enter to select location</p>

            <div>
              <label className="block text-[13px] font-bold text-gray-900 mb-2">
                Regional Council<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Council will be automatically detected based on address"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-[15px] bg-gray-50 text-gray-500 placeholder-gray-400"
                disabled
              />
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-900 mb-2">
                Mobile Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center px-3 border-r border-[#6D2FD1] bg-white rounded-l-lg z-10">
                  <span className="text-sm mr-1">🇳🇿</span>
                  <span className="text-[15px] text-gray-600">+64</span>
                </div>
                <input
                  type="tel"
                  placeholder="21 123 4567"
                  className="w-full rounded-lg border border-[#6D2FD1] pl-20 pr-10 py-3 text-[15px] placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6D2FD1]"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="w-full max-w-[600px] flex justify-end pb-12 pr-4">
          <button className="bg-[#8C52FF] opacity-30 text-white px-8 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2 text-[15px]">
            Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
