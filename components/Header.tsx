"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Wallet } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["Investing", "Cash", "Planning", "About"];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 bg-gradient-to-r from-white/70 via-white/80 to-white/70 backdrop-blur-sm}`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        {/* Left side - Logo and nav */}
        <div className="flex-1 flex items-center justify-start gap-6">
          <Link href="/" className="flex items-center group">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 bg-gradient-to-br from-surge-teal to-surge-light-green rounded-full flex items-center justify-center overflow-hidden relative group-hover:animate-pulse-glow"
            >
              <Image
                src="/Transparent Logo.png"
                alt="logo"
                width={35}
                height={35}
                className="rounded-full shadow-sm z-10"
              />
              <div className="absolute inset-0 bg-surge-light-green/20 animate-pulse-subtle"></div>
            </motion.div>
            <span className="ml-2 font-semibold text-lg text-[#019E8C]">
              Surge
            </span>
          </Link>
        </div>

        {/* Center - Nav items */}
        <div className="hidden md:flex items-center justify-center space-x-1">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Button
                variant="ghost"
                className="font-medium hover:text-surge-teal transition-colors"
              >
                {item}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Right side - Auth buttons */}
        <div className="flex-1 flex items-center justify-end gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="default"
              className="relative overflow-hidden bg-[#019E8C] hover:shadow-lg hover:shadow-surge-purple/20 transition-all duration-300 rounded-full text-white font-medium px-5 group"
            >
              <span className="relative z-10 flex items-center gap-1">
                <Wallet className="h-4 w-4 animate-pulse" /> Connect Wallet
              </span>
              <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Button>
          </motion.div>

          <Button
            variant="ghost"
            size="icon"
            className="flex md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-200 overflow-hidden"
        >
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="justify-start font-medium hover:text-surge-teal transition-colors"
              >
                {item}
              </Button>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <Button
                variant="default"
                className="w-full bg-surge-teal hover:bg-surge-light-green text-white"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
