import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Navbar";
import AceButton from "@/components/ui/ace-button";
import VolatilityDisplay from "@/components/VolatilityDisplay";
import WaveBackground from "@/components/WaveBackground";

import { TrendingDown, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-surge-beige relative">
      <WaveBackground />

      <div className="relative z-10">
        <NavbarDemo />

        <main className="container mx-auto px-4 pt-32 pb-12 text-center">
          <VolatilityDisplay />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <AceButton text="Mint Long Token" icon={TrendingUp} />
              <AceButton text="Mint Short Token" icon={TrendingDown} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
