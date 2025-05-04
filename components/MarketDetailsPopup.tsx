import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  Calendar,
  Check,
  ChevronDown,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  TrendingUp,
  ArrowRight,
  CircleDollarSign,
  LayoutGrid,
} from "lucide-react";

export interface MarketDetailsProps {
  id: string;
  name: string;
  address: string;
  symbol: string;
  protocol: string;
  strategy: string;
  strike?: number;
  epoch?: string;
  isExpired?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const MarketDetailsPopup: React.FC<MarketDetailsProps> = ({
  name,
  address,
  strategy,
  strike = 0,
  epoch,
  isExpired = false,
  isOpen,
  onClose,
}) => {
  const [amount, setAmount] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("mint");
  const [mintType, setMintType] = useState<string>("long");

  // Mock data for user positions
  const mockPositions = [
    {
      type: "LONG",
      amount: "2.5",
      value: "$125.00",
      profit: "+12.3%",
      isProfit: true,
      mintDate: "2023-09-15",
    },
    {
      type: "SHORT",
      amount: "1.8",
      value: "$89.50",
      profit: "-4.2%",
      isProfit: false,
      mintDate: "2023-10-22",
    },
  ];

  // Badge classes for position types
  const longBadgeClass =
    "bg-gradient-to-r from-[#019E8C]/20 to-[#019E8C]/10 text-[#019E8C] border-0 px-3 py-1 rounded-full font-medium shadow-sm";
  const shortBadgeClass =
    "bg-gradient-to-r from-[#B079B5]/20 to-[#B079B5]/10 text-[#B079B5] border-0 px-3 py-1 rounded-full font-medium shadow-sm";

  // Format epoch as date
  const formatExpiry = (epoch?: string) => {
    if (!epoch) return "Unknown";
    try {
      const epochNum = parseInt(epoch, 10);
      const expiryDate = new Date(epochNum * 1000);
      return expiryDate.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch {
      return "Invalid date";
    }
  };

  // Handle mint action
  const handleMint = () => {
    console.log(
      `Minting ${amount} ${
        mintType === "long" ? "VAR LONG" : "VAR SHORT"
      } tokens`
    );
    // Here you would integrate with Solana wallet and make the actual transaction
  };

  // Status badge
  const StatusBadge = ({ isExpired }: { isExpired: boolean }) => {
    return isExpired ? (
      <Badge className="bg-gradient-to-r from-red-100/20 to-red-50/10 text-red-400 border-0 px-3 py-1 rounded-full font-medium shadow-sm">
        <AlertTriangle className="w-3 h-3 mr-1" /> Expired
      </Badge>
    ) : (
      <Badge className="bg-gradient-to-r from-[#019E8C]/20 to-[#019E8C]/5 text-[#019E8C] border-0 px-3 py-1 rounded-full font-medium shadow-sm">
        <Check className="w-3 h-3 mr-1" /> Active
      </Badge>
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[550px] bg-gradient-to-b from-[#0a1525] to-[#0f1b35] text-white border border-[#2d3a59] shadow-2xl p-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-[#019E8C]/5 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full bg-[#B079B5]/5 blur-3xl"></div>
        </div>

        <DialogHeader className="p-6 border-b border-[#2d3a59] relative z-10">
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Market Details
            </DialogTitle>
            <StatusBadge isExpired={isExpired} />
          </div>
        </DialogHeader>

        <div className="relative z-10">
          <div className="px-6 pt-4 pb-0">
            <h2 className="text-2xl font-bold text-white mb-1">{name}</h2>
            <div className="text-sm text-gray-400 mb-6 flex items-center">
              <span className="mr-2">Market ID:</span>
              <Badge
                variant="outline"
                className="bg-[#1a253b]/80 text-gray-300 border-[#2d3a59] px-2 py-0.5 font-mono text-xs hover:bg-[#1a253b]"
              >
                {address.slice(0, 8)}...{address.slice(-4)}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gradient-to-br from-[#192337] to-[#1a253b] rounded-xl p-4 shadow-md border border-[#2d3a59]/50">
                <div className="text-sm text-gray-400 mb-1">Strike</div>
                <div className="text-xl font-bold text-white flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#019E8C]/20 mr-2">
                    <TrendingUp className="w-3 h-3 text-[#019E8C]" />
                  </div>
                  {(strike * 100).toFixed(2)}%
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#192337] to-[#1a253b] rounded-xl p-4 shadow-md border border-[#2d3a59]/50">
                <div className="text-sm text-gray-400 mb-1">Expiry</div>
                <div className="text-xl font-bold text-white flex items-center">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#B079B5]/20 mr-2">
                    <Calendar className="w-3 h-3 text-[#B079B5]" />
                  </div>
                  {formatExpiry(epoch)}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#192337] to-[#1a253b] rounded-xl p-4 mb-6 shadow-md border border-[#2d3a59]/50">
              <div className="text-sm text-gray-400 mb-1">Strategy</div>
              <div className="flex items-center">
                <Badge
                  variant="outline"
                  className="bg-gradient-to-r from-[#019E8C]/20 to-[#019E8C]/10 text-[#019E8C] border-0 px-3 py-1 rounded-full font-medium shadow-sm"
                >
                  <Activity className="w-3 h-3 mr-1" />
                  {strategy}
                </Badge>
              </div>
            </div>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="px-6">
              <TabsList className="grid w-full grid-cols-2 bg-[#192337] p-1 rounded-lg mb-4 shadow-inner">
                <TabsTrigger
                  value="mint"
                  className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#019E8C] data-[state=active]:to-[#018b7c] data-[state=active]:text-white"
                >
                  <CircleDollarSign className="w-4 h-4 mr-2" />
                  Mint Tokens
                </TabsTrigger>
                <TabsTrigger
                  value="positions"
                  className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#B079B5] data-[state=active]:to-[#9d6aaa] data-[state=active]:text-white"
                >
                  <LayoutGrid className="w-4 h-4 mr-2" />
                  My Positions
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value="mint"
              className="px-6 pb-6 pt-2 animate-in fade-in-50 slide-in-from-left-5 duration-300"
            >
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                  <Wallet className="w-4 h-4 mr-2 text-[#019E8C]" />
                  Select Position Type
                </h3>
                <Tabs
                  value={mintType}
                  onValueChange={setMintType}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 bg-[#192337] p-1 rounded-lg shadow-inner">
                    <TabsTrigger
                      value="long"
                      className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#019E8C] data-[state=active]:to-[#018b7c] data-[state=active]:text-white"
                    >
                      <ArrowUpRight className="w-4 h-4 mr-2" />
                      VAR LONG
                    </TabsTrigger>
                    <TabsTrigger
                      value="short"
                      className="rounded-md data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#B079B5] data-[state=active]:to-[#9d6aaa] data-[state=active]:text-white"
                    >
                      <ArrowDownRight className="w-4 h-4 mr-2" />
                      VAR SHORT
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="long" className="mt-4">
                    <div className="bg-[#192337]/80 rounded-xl p-4 mb-4 border border-[#2d3a59]/50">
                      <div className="text-sm text-gray-400 mb-1">
                        Description
                      </div>
                      <div className="text-white">
                        VAR LONG tokens gain value when realized volatility
                        exceeds the strike of {(strike * 100).toFixed(2)}%.
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="short" className="mt-4">
                    <div className="bg-[#192337]/80 rounded-xl p-4 mb-4 border border-[#2d3a59]/50">
                      <div className="text-sm text-gray-400 mb-1">
                        Description
                      </div>
                      <div className="text-white">
                        VAR SHORT tokens gain value when realized volatility
                        stays below the strike of {(strike * 100).toFixed(2)}%.
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-sm text-gray-400">Amount</div>
                  <div className="text-sm text-gray-400">
                    Available: <span className="text-white">0.08866 SOL</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative flex-1">
                    <Input
                      type="text"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-[#192337] border-[#2d3a59] focus:border-[#019E8C] focus:ring-[#019E8C]/20 text-white px-4 py-3 h-12 rounded-lg shadow-inner"
                    />
                  </div>
                  <div className="bg-[#192337] border border-[#2d3a59] rounded-lg h-12 px-3 flex items-center shadow-md">
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]"></div>
                      <span className="text-white">SOL</span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-400">
                  <div>Transaction Settings</div>
                  <div>
                    Slippage: <span className="text-white">0.50%</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-[#2d3a59] hover:bg-[#192337] text-white rounded-lg h-12"
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  className={`rounded-lg h-12 group relative overflow-hidden ${
                    mintType === "long"
                      ? "bg-gradient-to-r from-[#019E8C] to-[#018b7c] hover:from-[#018b7c] hover:to-[#017a6d]"
                      : "bg-gradient-to-r from-[#B079B5] to-[#9d6aaa] hover:from-[#9d6aaa] hover:to-[#8a5994]"
                  }`}
                  onClick={handleMint}
                  disabled={!amount || isExpired}
                >
                  <span
                    className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 
                    group-hover:translate-x-full bg-gradient-to-r from-white/5 to-transparent"
                  ></span>
                  <span className="relative flex items-center justify-center">
                    {mintType === "long" ? "Mint VAR LONG" : "Mint VAR SHORT"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </TabsContent>

            <TabsContent
              value="positions"
              className="px-6 pb-6 pt-2 animate-in fade-in-50 slide-in-from-right-5 duration-300"
            >
              <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                <LayoutGrid className="w-4 h-4 mr-2 text-[#B079B5]" />
                Your Positions
              </h3>

              {mockPositions.length > 0 ? (
                <div className="space-y-4">
                  {mockPositions.map((position, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-[#192337] to-[#1a253b] rounded-xl p-4 border border-[#2d3a59]/50 shadow-md"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <Badge
                          className={
                            position.type === "LONG"
                              ? longBadgeClass
                              : shortBadgeClass
                          }
                        >
                          {position.type === "LONG" ? (
                            <ArrowUpRight className="w-3 h-3 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-3 h-3 mr-1" />
                          )}
                          VAR {position.type}
                        </Badge>
                        <div
                          className={`text-sm font-medium ${
                            position.isProfit
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {position.profit}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="text-gray-400">Amount</div>
                          <div className="text-white font-medium">
                            {position.amount} tokens
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400">Value</div>
                          <div className="text-white font-medium">
                            {position.value}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400">Minted</div>
                          <div className="text-white">{position.mintDate}</div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-[#2d3a59]">
                        <Button
                          className="w-full bg-gradient-to-r from-[#192337] to-[#1a253b] text-white hover:from-[#1a253b] hover:to-[#1f2e45] border border-[#2d3a59]"
                          variant="outline"
                        >
                          Redeem Position
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#192337]/80 rounded-xl p-6 text-center border border-[#2d3a59]/50">
                  <div className="w-12 h-12 rounded-full bg-[#192337] border border-[#2d3a59] flex items-center justify-center mx-auto mb-3">
                    <Wallet className="w-6 h-6 text-gray-400" />
                  </div>
                  <h4 className="text-white font-medium mb-1">
                    No positions found
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    You dont have any minted tokens for this market yet.
                  </p>
                  <Button
                    className="bg-gradient-to-r from-[#B079B5] to-[#9d6aaa] hover:from-[#9d6aaa] hover:to-[#8a5994] text-white"
                    onClick={() => setActiveTab("mint")}
                  >
                    Mint New Tokens
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MarketDetailsPopup;
