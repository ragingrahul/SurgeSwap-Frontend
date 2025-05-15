import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { VolatilityChart } from "./VolatilityChart";

const TradingTabs = () => {
  return (
    <Card className="bg-[#14232C] border-none rounded-xl text-white p-6">
      <Tabs defaultValue="trade" className="w-full">
        <TabsList className="bg-[#14232C] border-b border-[#2A3A42] w-full justify-start mb-6 rounded-none p-0">
          <TabsTrigger
            value="trade"
            className="text-white data-[state=active]:text-[#E6D6BA] data-[state=active]:border-b-2 data-[state=active]:border-[#E6D6BA] rounded-none px-8 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Trade
          </TabsTrigger>
          <TabsTrigger
            value="positions"
            className="text-white data-[state=active]:text-[#E6D6BA] data-[state=active]:border-b-2 data-[state=active]:border-[#E6D6BA] rounded-none px-8 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Positions
          </TabsTrigger>
          <TabsTrigger
            value="funding"
            className="text-white data-[state=active]:text-[#E6D6BA] data-[state=active]:border-b-2 data-[state=active]:border-[#E6D6BA] rounded-none px-8 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            Funding
          </TabsTrigger>
          <TabsTrigger
            value="history"
            className="text-white data-[state=active]:text-[#E6D6BA] data-[state=active]:border-b-2 data-[state=active]:border-[#E6D6BA] rounded-none px-8 py-4 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trade" className="mt-0">
          <h3 className="text-lg font-medium mb-6">Volatility Index Chart</h3>
          <hr className="border-[#2A3A42] mb-6" />
          <div className="h-72">
            <VolatilityChart />
          </div>
        </TabsContent>

        <TabsContent value="positions" className="mt-0">
          <div className="h-72 flex items-center justify-center text-[#AAA]">
            No active positions
          </div>
        </TabsContent>

        <TabsContent value="funding" className="mt-0">
          <div className="h-72 flex items-center justify-center text-[#AAA]">
            Funding information will appear here
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-0">
          <div className="h-72 flex items-center justify-center text-[#AAA]">
            Transaction history will appear here
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default TradingTabs;
