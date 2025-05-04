"use client";

import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Coins,
  FileText,
  ExternalLink,
  Activity,
  TrendingUp,
  Zap,
} from "lucide-react";

// Market type definition
interface Market {
  id: string;
  name: string;
  symbol: string;
  tvl: string;
  tvlValue: number;
  protocol: string;
  protocolLogo?: string;
  category: string;
  strategy: string;
  hasBoost?: boolean;
  icons: string[];
}

const Markets = () => {
  // Sample market data
  const markets: Market[] = [
    {
      id: "1",
      name: "BTC Volatility",
      symbol: "BTC-VOL",
      tvl: "$64.1M",
      tvlValue: 64100000,
      protocol: "Surge",
      category: "Variance Swap",
      strategy: "Variance Swap",
      icons: ["🟢"],
    },
    {
      id: "2",
      name: "ETH / BTC Volatility",
      symbol: "ETH/BTC-VOL",
      tvl: "$14.6M",
      tvlValue: 14600000,
      protocol: "Surge",
      category: "Variance Swap",
      strategy: "Variance Swap",
      hasBoost: true,
      icons: ["🟢", "⚫"],
    },
    {
      id: "3",
      name: "SOL Perpetual",
      symbol: "SOL-PERP",
      tvl: "$13.4M",
      tvlValue: 13400000,
      protocol: "Surge",
      category: "Perpetual",
      strategy: "Perpetual",
      hasBoost: true,
      icons: ["🟢"],
    },
    {
      id: "4",
      name: "ETH Volatility Index",
      symbol: "ETH-VOL-IDX",
      tvl: "$18.2M",
      tvlValue: 18200000,
      protocol: "Surge",
      category: "Volatility Index",
      strategy: "Volatility Index",
      icons: ["🟢", "⚫"],
    },
  ];

  // Table data for bottom section
  const tableData = [
    {
      id: "1",
      asset: "BTC Volatility",
      icons: ["🟢", "⚫"],
      tvl: "US$28,777,782",
      tvlValue: 28777782,
      protocol: "Surge",
      strategy: "Variance Swap",
      hasBoost: true,
    },
    {
      id: "2",
      asset: "SOL / ETH Volatility",
      icons: ["🟢", "⚫"],
      tvl: "US$4,441,173",
      tvlValue: 4441173,
      protocol: "Surge",
      strategy: "Variance Swap",
      hasBoost: true,
    },
  ];

  // Custom badge component to match the design
  const StrategyBadge = ({ strategy }: { strategy: string }) => {
    const getBgColor = () => {
      switch (strategy.toLowerCase()) {
        case "variance swap":
          return "bg-gradient-to-r from-[#019E8C]/20 to-[#019E8C]/10 text-[#019E8C] border-[#019E8C]/20";
        case "perpetual":
          return "bg-gradient-to-r from-[#B079B5]/20 to-[#B079B5]/10 text-[#B079B5] border-[#B079B5]/20";
        case "volatility index":
          return "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-200";
        case "options":
          return "bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 border-orange-200";
        default:
          return "bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 border-gray-200";
      }
    };

    return (
      <Badge
        variant="outline"
        className={`${getBgColor()} rounded-full font-medium border-0 px-3 py-1 shadow-sm`}
      >
        {strategy === "Variance Swap" && <Activity className="w-3 h-3 mr-1" />}
        {strategy === "Perpetual" && <TrendingUp className="w-3 h-3 mr-1" />}
        {strategy === "Volatility Index" && <Zap className="w-3 h-3 mr-1" />}
        {strategy}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-surge-beige/90 via-white to-surge-beige/80 overflow-hidden">
      <Header />

      <main className="relative pt-6">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute left-0 right-0 -bottom-8 text-[30vw] font-bold text-[#019e8c]/10 text-center whitespace-nowrap leading-none">
            Surge
          </div>
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#019e8c]/10 to-transparent blur-3xl"></div>
          <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#B079B5]/10 to-transparent blur-3xl"></div>
          <div className="absolute bottom-20 right-40 w-[400px] h-[400px] rounded-full bg-gradient-to-tl from-[#019e8c]/5 to-transparent blur-3xl"></div>

          {/* Cool mesh gradients */}
          <div className="absolute top-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#019e8c]/10 to-[#B079B5]/5 mix-blend-multiply blur-3xl opacity-50"></div>
          <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#B079B5]/10 to-[#019e8c]/5 mix-blend-multiply blur-3xl opacity-50"></div>
        </div>

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <section className="mb-12">
            {/* Header section with left-aligned text and image on right */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 relative overflow-hidden">
              <div className="w-full md:w-1/2 text-left mb-8 md:mb-0">
                <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#019E8C] to-[#344B47] relative">
                    Surge
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B079B5] to-[#8A4A87]">
                      Swap
                    </span>
                    <span className="inline-block relative">
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#019E8C] to-[#B079B5] rounded-full"></span>
                    </span>
                  </span>
                </h1>
                <p className="text-gray-700 text-xl max-w-2xl leading-relaxed relative ml-1 font-light">
                  <span className="bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">
                    Trade volatility directly on Solana with precision
                    instruments.
                    <span className="block mt-2 text-base text-gray-500 font-light">
                      Access the most advanced volatility markets on Solana
                    </span>
                  </span>
                </p>
              </div>

              <div className="w-full md:w-1/2 relative h-[300px]">
                <div className="absolute top-0 right-0 h-[300px] w-[400px] max-w-full">
                  <div className="relative h-full w-full flex items-center justify-end">
                    {/* Surge logo - circle with gradient */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#019E8C] to-[#344B47] flex items-center justify-center z-10 shadow-xl animation-pulse-glow">
                      <div className="w-[150px] h-[150px] bg-white rounded-full flex items-center justify-center">
                        <div className="text-[#019E8C] text-6xl font-extrabold">
                          S
                        </div>
                      </div>
                    </div>

                    {/* Surge coin */}
                    <div className="absolute right-40 top-10 w-[150px] h-[150px] rounded-full bg-gradient-to-br from-[#B079B5] to-[#8A4A87] border-4 border-white shadow-xl flex items-center justify-center transform rotate-12 animate-float">
                      <div className="w-[130px] h-[130px] bg-white rounded-full flex items-center justify-center">
                        <span className="text-[#B079B5] text-4xl font-bold">
                          $
                        </span>
                      </div>
                    </div>

                    {/* Background effect */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#111]/5 text-9xl font-bold z-[-1] animate-pulse-subtle">
                      SURGE
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section - Main Content */}
            <div className="bg-gradient-to-br from-white to-[#019E8C]/5 rounded-2xl shadow-lg overflow-hidden mb-12 border border-[#019E8C]/10">
              <div className="border-b border-[#019E8C]/10 px-6 py-6 flex flex-col sm:flex-row sm:items-center justify-between bg-gradient-to-r from-[#f5f5dc]/80 to-white gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-[#344B47] to-[#019E8C]">
                    Volatility Markets
                  </h3>
                  <p className="text-gray-600 font-light">
                    Trade variance swaps and perpetual futures on{" "}
                    <span className="text-[#019E8C] font-medium">Surge</span>
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full px-4 border-[#019E8C] text-[#019E8C] hover:bg-[#019E8C]/5 gap-2 shadow-sm"
                  >
                    <Activity className="h-4 w-4" /> Sort by Volume
                  </Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-0 bg-gradient-to-r from-[#019E8C]/10 to-[#019E8C]/5">
                      <TableHead className="py-4 text-xs uppercase tracking-wider font-semibold text-[#344B47]">
                        Market
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider font-semibold text-[#344B47]">
                        Volume
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider font-semibold text-[#344B47]">
                        Protocol
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider font-semibold text-[#344B47]">
                        Type
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider font-semibold text-[#344B47]">
                        Docs
                      </TableHead>
                      <TableHead className="text-xs uppercase tracking-wider font-semibold text-[#344B47]">
                        Features
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ...tableData,
                      ...markets.map((market) => ({
                        id: `market-${market.id}`,
                        asset: market.name,
                        icons: market.icons,
                        tvl: market.tvl,
                        tvlValue: market.tvlValue,
                        protocol: market.protocol,
                        strategy: market.strategy,
                        hasBoost: market.hasBoost || false,
                      })),
                    ].map((row, index) => (
                      <TableRow
                        key={row.id}
                        className={`h-16 transition-all cursor-pointer border-b border-gray-100 last:border-0 ${
                          index % 2 === 0 ? "bg-white" : "bg-[#f5f5dc]/30"
                        } hover:bg-gradient-to-r hover:from-[#019E8C]/5 hover:to-[#019E8C]/10`}
                      >
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <div className="flex p-2 rounded-full bg-gray-100">
                              {row.icons.map((icon, idx) => (
                                <span key={idx} className="text-2xl">
                                  {icon}
                                </span>
                              ))}
                            </div>
                            <span className="font-semibold text-[#344B47]">
                              {row.asset}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="font-bold text-[#344B47]">
                          {row.tvl}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="inline-block w-4 h-4 bg-[#019E8C] rounded-full shadow-sm"></span>
                            <span className="font-medium text-[#344B47]">
                              {row.protocol}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <StrategyBadge strategy={row.strategy} />
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full border-gray-200 hover:bg-[#019E8C]/10 hover:border-[#019E8C]/30"
                            >
                              <FileText className="h-4 w-4 text-gray-600 group-hover:text-[#019E8C]" />
                            </Button>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 rounded-full border-gray-200 hover:bg-[#019E8C]/10 hover:border-[#019E8C]/30"
                            >
                              <ExternalLink className="h-4 w-4 text-gray-600 group-hover:text-[#019E8C]" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          {row.hasBoost && (
                            <Badge className="bg-gradient-to-r from-[#019E8C]/20 to-[#019E8C]/5 text-[#019E8C] border-0 px-3 py-1 rounded-full font-medium shadow-sm">
                              <Coins className="w-3 h-3 mr-1" /> SURGE Boost
                            </Badge>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Markets;
