"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const TradePanel = () => {
  const [marginValue, setMarginValue] = useState("100");
  const maxMargin = 400; // Example max value, adjust as needed

  const handleMarginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMarginValue(e.target.value);
  };

  const setMarginPercentage = (percentage: number) => {
    const value = ((maxMargin * percentage) / 100).toString();
    setMarginValue(value);
  };

  return (
    <Card className="bg-[#F5EFE0] border border-[#D9C9A8]/50 shadow-md rounded-xl text-surge-deep-green p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-surge-deep-green">Trade</h3>
        <div className="bg-white/70 rounded-lg px-3 py-1 text-xs text-surge-deep-green border border-[#D9C9A8]/50">
          5x Max Leverage
        </div>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-surge-deep-green font-medium mb-2 text-sm">
            Position Type
          </p>
          <Button
            variant="outline"
            className="w-full justify-between bg-white/70 border-[#D9C9A8]/50 text-surge-deep-green hover:bg-white hover:border-[#019E8C]/50 h-10 group transition-all duration-200"
          >
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-[#019E8C]" />
              <span>Long</span>
            </div>
            <ChevronDown size={16} className="text-surge-deep-green" />
          </Button>
        </div>

        <div>
          <p className="text-surge-deep-green font-medium mb-2 text-sm">
            Margin (USDC)
          </p>
          <div className="relative">
            <Input
              type="text"
              value={marginValue}
              onChange={handleMarginChange}
              className="bg-white/70 border-[#D9C9A8]/50 text-surge-deep-green text-right h-10 pr-16 focus:border-[#019E8C]/50"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <button
                className="text-xs text-[#019E8C] font-medium"
                onClick={() => setMarginValue(maxMargin.toString())}
              >
                MAX
              </button>
              <span className="text-surge-deep-green">USDC</span>
            </div>
          </div>
          <div className="mt-2 flex justify-between gap-2">
            <button
              className="text-xs px-2 py-1 bg-white/70 rounded text-surge-deep-green hover:bg-white hover:text-[#019E8C] border border-[#D9C9A8]/50 flex-1 transition-colors"
              onClick={() => setMarginPercentage(25)}
            >
              25%
            </button>
            <button
              className="text-xs px-2 py-1 bg-white/70 rounded text-surge-deep-green hover:bg-white hover:text-[#019E8C] border border-[#D9C9A8]/50 flex-1 transition-colors"
              onClick={() => setMarginPercentage(50)}
            >
              50%
            </button>
            <button
              className="text-xs px-2 py-1 bg-white/70 rounded text-surge-deep-green hover:bg-white hover:text-[#019E8C] border border-[#D9C9A8]/50 flex-1 transition-colors"
              onClick={() => setMarginPercentage(75)}
            >
              75%
            </button>
            <button
              className="text-xs px-2 py-1 bg-white/70 rounded text-surge-deep-green hover:bg-white hover:text-[#019E8C] border border-[#D9C9A8]/50 flex-1 transition-colors"
              onClick={() => setMarginPercentage(100)}
            >
              100%
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
            <p className="text-surge-deep-green font-medium mb-1 text-sm">
              Entry Price
            </p>
            <p className="text-lg text-surge-deep-green font-semibold">34.2%</p>
          </div>
          <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
            <p className="text-surge-deep-green font-medium mb-1 text-sm">
              Est. Liquidation
            </p>
            <p className="text-lg text-surge-deep-green font-semibold">25.6%</p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
          <p className="text-surge-deep-green font-medium mb-1 text-sm">
            Funding Rate
          </p>
          <p className="text-lg text-[#019E8C] font-semibold">+0.023%/h</p>
        </div>

        <Button className="w-full bg-[#019E8C] hover:bg-[#018E7C] text-white h-10 text-base font-medium">
          Open Long Position
        </Button>
      </div>
    </Card>
  );
};

export default TradePanel;
