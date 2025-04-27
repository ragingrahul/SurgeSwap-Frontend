import { useState, useEffect } from "react";

export const useVolatilityEffect = () => {
  const [volatility, setVolatility] = useState(48.2);
  const [intensity, setIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate volatility changes
      const change = (Math.random() - 0.5) * 2;
      const newValue = Math.max(0, Math.min(100, volatility + change));
      setVolatility(newValue);
      setIntensity(Math.abs(change) / 2); // Scale down the effect
    }, 1000);

    return () => clearInterval(interval);
  }, [volatility]);

  return { volatility, intensity };
};
