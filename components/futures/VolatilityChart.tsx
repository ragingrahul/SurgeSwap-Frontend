"use client";

import {
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
  ComposedChart,
} from "recharts";

// Generate dummy data for the chart that resembles the image
const generateChartData = () => {
  const data = [];
  let value = 25;

  for (let i = 0; i < 30; i++) {
    // Generate somewhat realistic movement that trends upward
    const change = Math.random() * 3 - 0.8;
    value = value + change;

    // Ensure value doesn't go below 20
    if (value < 20) value = 20 + Math.random() * 2;

    // Make sure we end up higher than we started for the uptrend
    if (i > 20) {
      value = value + Math.random() * 0.7;
    }

    data.push({
      time: i,
      value: parseFloat(value.toFixed(2)),
    });
  }

  return data;
};

export const VolatilityChart = () => {
  const data = generateChartData();

  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surge-teal/5 rounded-lg" />

      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#019E8C" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#019E8C" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#97B1AB"
            strokeDasharray="3 3"
            vertical={false}
            opacity={0.2}
          />

          <XAxis
            dataKey="time"
            stroke="#344B47"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
            hide
          />

          <YAxis
            stroke="#344B47"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
            domain={["dataMin - 5", "dataMax + 5"]}
            hide
          />

          <Tooltip
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #97B1AB",
              borderRadius: "4px",
              color: "#344B47",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "8px 12px",
            }}
            formatter={(value: number) => [`${value}%`, "Volatility"]}
            labelFormatter={() => ""}
            cursor={{
              stroke: "#344B47",
              strokeWidth: 1,
              strokeDasharray: "4 4",
            }}
          />

          <Area
            type="monotone"
            dataKey="value"
            fill="url(#colorValue)"
            stroke="none"
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#019E8C"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 5,
              fill: "#019E8C",
              stroke: "white",
              strokeWidth: 1,
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-surge-teal/5 rounded-full blur-2xl" />
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-surge-purple/5 rounded-full blur-xl" />
    </div>
  );
};
