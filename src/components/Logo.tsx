import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "w-10 h-10", showText = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${showText ? "group" : ""}`}>
      {/* Icon frame with beautiful custom glow matches the "Sleek Interface" design */}
      <div className={`${className} bg-gradient-to-tr from-[#6d28d9] via-[#4f46e5] to-[#3b82f6] rounded-xl flex items-center justify-center shadow-lg shadow-purple-900/30 overflow-hidden relative border border-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0`}>
        {/* Ambient background light flare inside icon */}
        <div className="absolute inset-0 bg-radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 80%)" />
        
        {/* Dynamic Cw Monogram Logo */}
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-[65%] h-[65%] text-white"
        >
          {/* Modern Bold 'C' Path */}
          <path 
            d="M 45 25 C 31.19 25 20 36.19 20 50 C 20 63.81 31.19 75 45 75 C 56.25 75 65.72 67.57 68.8 57.38 L 56.8 57.38 C 54.45 61.19 50.05 63.81 45 63.81 C 37.37 63.81 31.19 57.63 31.19 50 C 31.19 42.37 37.37 36.19 45 36.19 C 50.05 36.19 54.45 38.81 57.8 42.62 L 69.8 42.62 C 65.72 32.43 56.25 25 45 25 Z" 
            fill="currentColor"
          />
          {/* Connected Bold 'w' with custom stroke */}
          <path
            d="M 46 48 L 55.5 73.5 L 65 48 L 74.5 73.5 L 84 48"
            stroke="currentColor"
            strokeWidth="11.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Diamond accent spark on top right */}
          <path
            d="M 84 26 L 90.5 32.5 L 84 39 L 77.5 32.5 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {showText && (
        <div>
          <span className="font-display font-extrabold text-lg md:text-xl tracking-tight text-white block leading-none uppercase group-hover:text-brand-purple transition-colors">
            CYBER<span className="text-brand-accent">WISE</span>
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-purple-400 block mt-0.5">
            Skillversity
          </span>
        </div>
      )}
    </div>
  );
}
