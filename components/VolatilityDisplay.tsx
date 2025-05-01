"use client";

import React from "react";
import { useVolatilityEffect } from "@/hooks/useVolatilityEffect";
import Image from "next/image";

const VolatilityDisplay: React.FC = () => {
  // Get volatility data
  const { volatility, lastPrice, loading, error } = useVolatilityEffect();

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div className="flex flex-col items-center">
        {/* Header Title */}
        <div className="mb-10">
          <p className="text-2xl tracking-widest font-bold text-[#008080] drop-shadow-[0_0_8px_rgba(94,234,212,0.7)]">
            <span className="bg-teal-400/10 px-8 py-3 rounded-2xl backdrop-blur-md shadow-md">
              VOLATILITY INDEX
            </span>
          </p>
        </div>

        {/* Stylish Volatility Display */}
        <div className="relative mb-10">
          {/* Main Number Container */}
          <div className="relative bg-gradient-to-b from-teal-300/10 to-transparent p-10 rounded-3xl border border-teal-400/20 shadow-2xl backdrop-blur-md">
            {loading ? (
              <div className="flex items-center justify-center h-20">
                <div className="animate-pulse h-8 w-32 bg-teal-300/20 rounded"></div>
              </div>
            ) : error ? (
              <div className="text-red-500 font-medium">Data unavailable</div>
            ) : (
              <h1 className="text-6xl md:text-8xl font-extrabold text-[#008080] tracking-tight drop-shadow-[0_0_12px_rgba(94,234,212,0.6)]">
                {volatility ? volatility.toFixed(1) : "0.0"}%
              </h1>
            )}
          </div>
        </div>

        {/* SOL Price Display */}
        <div className="mb-8 bg-teal-400/5 px-6 py-3 rounded-xl backdrop-blur-sm">
          <p className="text-lg text-[#006060] font-medium">
            Last SOL Price: ${lastPrice ? lastPrice.toFixed(2) : "0.00"} USD
          </p>
        </div>

        {/* Image */}
        <div className="relative w-72 h-72">
          <div className="absolute inset-0 rounded-full bg-surge-deep-green/5 blur-xl"></div>
          <Image
            src="/SurgeLogo.png"
            alt="Surge Rabbit"
            width={1500}
            height={1500}
            className="w-full h-full object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default VolatilityDisplay;
