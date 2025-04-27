import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 md:px-12 border-t border-gray-200 mt-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm text-gray-500 mb-4 md:mb-0">
          Powered by Solana • Oracle by Pyth • Designed for DeFi risk management
        </div>

        <div className="flex space-x-6">
          <a
            href="#"
            className="text-sm text-surge-deep-green hover:text-surge-teal"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-sm text-surge-deep-green hover:text-surge-teal"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-sm text-surge-deep-green hover:text-surge-teal"
          >
            Discord
          </a>
          <a
            href="#"
            className="text-sm text-surge-deep-green hover:text-surge-teal"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
