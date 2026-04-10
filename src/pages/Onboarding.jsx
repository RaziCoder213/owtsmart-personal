import React from 'react';
import { MapPin } from 'lucide-react';

export default function Onboarding() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#F0FBFC] flex flex-col pt-12">
      {/* Progress Bar Area */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#8C52FF] text-white flex items-center justify-center text-xs font-medium">!</div>
            <span className="text-[#8C52FF] text-sm font-medium">Property Address</span>
          </div>
          <div className="w-16 h-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs font-medium">!</div>
            <span className="text-gray-500 text-sm font-medium">System Operation</span>
          </div>
          <div className="w-16 h-[1px] bg-gray-200"></div>
          <div className="flex items-center gap-2 opacity-40">
            <div className="w-6 h-6 rounded-full bg-gray-300 text-white flex items-center justify-center text-xs font-medium">!</div>
            <span className="text-gray-500 text-sm font-medium">Preferred Service Provider</span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <div className="flex-1 flex flex-col items-center px-4">
        <div className="bg-white rounded-xl shadow-sm w-full max-w-[600px] p-8 mb-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-[#E6F4F1] rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#065F46]" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Property Details</h2>
            <p className="text-gray-500 text-sm text-center">Tell us about your property location and system</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Address</label>
              <input
                type="text"
                placeholder="Your Address"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-[#7A40F2] focus:outline-none focus:ring-1 focus:ring-[#7A40F2]"
              />
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden relative border border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center bg-[#E5E3DF]">
                <div className="text-center">
                  <div className="w-full h-full min-w-[600px] min-h-[200px]" style={{
                    backgroundImage: 'url("https://maps.googleapis.com/maps/api/staticmap?center=Auckland,NZ&zoom=10&size=600x200&maptype=roadmap&markers=color:red%7CAuckland,NZ&key=YOUR_API_KEY")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>
                    {/* Fallback pattern if image fails */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  <MapPin className="w-8 h-8 text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-1">You must enter to select location</p>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Regional Council<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Council will be automatically detected based on address"
                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm bg-gray-50 text-gray-500"
                disabled
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Mobile Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center px-3 border-r border-gray-200 bg-gray-50 rounded-l-lg">
                  <span className="text-sm mr-1">🇳🇿</span>
                  <span className="text-sm text-gray-600">+64</span>
                </div>
                <input
                  type="tel"
                  placeholder="21 123 4567"
                  className="w-full rounded-lg border border-[#7A40F2] pl-20 pr-10 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#7A40F2]"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="w-full max-w-[600px] flex justify-end pb-12">
          <button className="bg-[#D1C0FB] text-white px-8 py-2 rounded-lg font-medium hover:bg-[#8C52FF] transition-colors flex items-center gap-2">
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
