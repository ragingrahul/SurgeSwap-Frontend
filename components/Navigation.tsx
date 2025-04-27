import React from "react";
import { Database, FileText, Users, Wallet } from "lucide-react";
import AceButton from "./ui/ace-button";

const Navigation = () => {
  return (
    <nav className="py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center"></div>
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#markets"
          className="text-surge-deep-green hover:text-surge-teal transition-colors font-medium"
        >
          <span className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Markets
          </span>
        </a>
        <a
          href="#oracle"
          className="text-surge-deep-green hover:text-surge-teal transition-colors font-medium"
        >
          <span className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            Volatility Oracle
          </span>
        </a>
        <a
          href="#docs"
          className="text-surge-deep-green hover:text-surge-teal transition-colors font-medium"
        >
          <span className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Docs
          </span>
        </a>
        <a
          href="#community"
          className="text-surge-deep-green hover:text-surge-teal transition-colors font-medium"
        >
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Community
          </span>
        </a>
      </div>

      <AceButton text="Connect Wallet" icon={Wallet} />
    </nav>
  );
};

export default Navigation;
