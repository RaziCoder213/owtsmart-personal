import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 lg:px-24 flex items-center shadow-sm relative z-10">
      <div className="flex items-center gap-3">
        {/* SVG representation of the OwtSmart logo */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#065F46]"
        >
          {/* Outer circle / letter O */}
          <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="7" strokeDasharray="180 50" strokeDashoffset="-20" strokeLinecap="round" />
          {/* Inner circle */}
          <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="7" strokeDasharray="90 30" strokeDashoffset="45" strokeLinecap="round" />
          {/* Center core */}
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="5" fill="none" />

          {/* Added detail path to mimic the intricate OWT lockup */}
          <path d="M50 12 A 38 38 0 0 1 88 50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M50 88 A 38 38 0 0 1 12 50" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M26 50 A 24 24 0 0 1 50 26" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none"/>
          <path d="M74 50 A 24 24 0 0 1 50 74" stroke="currentColor" strokeWidth="7" strokeLinecap="round" fill="none"/>
        </svg>
        <span className="text-[28px] font-bold text-[#065F46] tracking-tight">OwtSmart</span>
      </div>
    </header>
  );
}
