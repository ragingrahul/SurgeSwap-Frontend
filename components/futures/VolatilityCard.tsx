import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const VolatilityCard = () => {
  return (
    <Card className="bg-[#F5EFE0] border border-[#D9C9A8]/50 shadow-md rounded-xl text-surge-deep-green p-6 overflow-hidden relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-surge-deep-green">
            Volatility Perp
          </h2>
        </div>
        <span className="text-lg text-surge-deep-purple mt-2 md:mt-0 font-medium">
          VOL/USDC
        </span>
      </div>

      <hr className="border-[#D9C9A8]/50 mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 relative z-10">
        <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
          <p className="text-surge-deep-green font-medium mb-1 text-sm">
            Realized Volatility
          </p>
          <p className="text-2xl text-surge-deep-green font-semibold">34.2%</p>
        </div>

        <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
          <p className="text-surge-deep-green font-medium mb-1 text-sm">
            Mark Price
          </p>
          <p className="text-2xl text-surge-deep-green font-semibold">34.1%</p>
        </div>

        <div className="p-3 rounded-lg bg-white/70 border border-[#D9C9A8]/50">
          <p className="text-surge-deep-green font-medium mb-1 text-sm">
            24h Change
          </p>
          <div className="flex items-center">
            <p className="text-2xl text-[#019E8C] font-semibold">+2.3%</p>
            <ArrowUpRight className="text-[#019E8C] ml-1" size={18} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VolatilityCard;
