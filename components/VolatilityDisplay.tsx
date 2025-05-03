"use client";

import React from "react";
import { useVolatilityEffect } from "@/hooks/useVolatilityEffect";

const VolatilityDisplay = () => {
  const { volatility, loading } = useVolatilityEffect();

  return (
    <div className="mb-2">
      <div className="text-5xl font-bold mb-2">
        Bet on Chaos. <br />
        Hedge Against Calm.
      </div>

      <div className="backdrop-blur-sm p-8">
        {loading ? (
          <div className="h-20 w-full flex items-center justify-center">
            <div className="w-32 h-12 bg-surge-teal/10 rounded-lg animate-pulse"></div>
          </div>
        ) : (
          <div className="relative">
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold tracking-wider text-[#003025] mb-2">
                SOLANA VOLATILITY INDEX
              </div>
              <div className="relative">
                <div className="text-8xl font-bold relative">
                  <span className="text-[#019e8c]">
                    {volatility ? volatility.toFixed(2) : "48.20"} %
                  </span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-[#019e8c]/10 to-[#0AEFFF]/10 blur-lg opacity-50 -z-10 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VolatilityDisplay;
