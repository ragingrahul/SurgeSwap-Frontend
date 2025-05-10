import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowUpRight } from "lucide-react";

const ActivePositionPanel = () => {
  return (
    <Card className="bg-[#F5EFE0] border border-[#D9C9A8]/50 shadow-md rounded-xl text-surge-deep-green p-6 relative overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-xl font-bold text-surge-deep-green">
          Active Position
        </h3>
        <div className="bg-[#019E8C]/10 rounded-lg px-3 py-1 text-xs font-medium text-[#019E8C] border border-[#019E8C]/30">
          Open
        </div>
      </div>

      <div className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
            <p className="text-surge-deep-green font-medium mb-1 text-sm">
              Entry
            </p>
            <div className="flex items-center">
              <TrendingUp className="mr-2 h-4 w-4 text-[#019E8C]" />
              <p className="text-lg text-surge-deep-green font-semibold">
                LONG
              </p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
            <p className="text-surge-deep-green font-medium mb-1 text-sm">
              Current Volatility
            </p>
            <p className="text-lg text-surge-deep-green font-semibold">34.2%</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
            <p className="text-surge-deep-green font-medium mb-1 text-sm">
              Position Size
            </p>
            <p className="text-lg text-surge-deep-green font-semibold">
              500 USDC
            </p>
          </div>
          <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
            <p className="text-surge-deep-green font-medium mb-1 text-sm">
              Leverage
            </p>
            <p className="text-lg text-surge-deep-green font-semibold">5x</p>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
          <p className="text-surge-deep-green font-medium mb-1 text-sm">PnL</p>
          <div className="flex items-center">
            <p className="text-lg font-semibold">
              <span className="text-[#019E8C]">+31.5 USDC</span>
              <span className="text-[#019E8C]/80 text-sm ml-2">(+6.2%)</span>
            </p>
            <ArrowUpRight className="text-[#019E8C] ml-1" size={16} />
          </div>
        </div>

        <Button className="w-full bg-white/70 hover:bg-white text-surge-deep-green h-10 text-base font-medium border border-[#D9C9A8]/50">
          Close Position
        </Button>
      </div>
    </Card>
  );
};

export default ActivePositionPanel;
