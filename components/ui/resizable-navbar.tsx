"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  return (
    <div
      className={cn(
        "fixed inset-x-0 top-8 z-40 w-full bg-transparent",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child) : child
      )}
    </div>
  );
};

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[60] mx-auto flex w-[40%] max-w-7xl items-center justify-between self-start rounded-full bg-[#f5f5dc] dark:bg-[#f5f5dc] px-6 py-3 lg:flex shadow-md border border-[#e6dfca]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-md font-semibold text-[#008080] transition duration-200 hover:text-[#00a3a3] lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-[#008080] dark:text-[#00b8ad] transition-all duration-300 hover:text-[#00a3a3] dark:hover:text-[#00d1ca]"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-[#e6dfca] dark:bg-[#006666]"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className }: MobileNavProps) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-[90%] max-w-[calc(100vw-2rem)] flex-col items-center justify-between rounded-md bg-white dark:bg-surge-deep-green px-3 py-2 lg:hidden shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white dark:bg-surge-deep-green px-4 py-8 shadow-lg",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <IconX
      className="text-surge-deep-green dark:text-surge-teal"
      onClick={onClick}
    />
  ) : (
    <IconMenu2
      className="text-surge-deep-green dark:text-surge-teal"
      onClick={onClick}
    />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-[#008080]"
    >
      <img
        src="/Transparent Logo.png"
        alt="logo"
        width={35}
        height={35}
        className="rounded-full shadow-sm"
      />
      <span className="font-semibold text-lg text-[#008080] dark:text-[#00b8ad]">
        Surge
      </span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-lg bg-white button text-[#008080] text-sm font-bold relative cursor-pointer transition duration-300 ease-in-out inline-block text-center";

  const variantStyles = {
    primary:
      "bg-[#008080] hover:bg-[#00a3a3] text-white shadow-md hover:shadow-lg hover:translate-y-[-2px]",
    secondary:
      "bg-transparent border border-[#008080] text-[#008080] dark:text-[#00b8ad] hover:bg-[#008080]/10 hover:border-[#00a3a3]",
    dark: "bg-[#006666] text-[#f5f5dc] shadow-md hover:bg-[#00a3a3] hover:shadow-lg hover:translate-y-[-2px]",
    gradient:
      "bg-gradient-to-r from-[#008080] to-[#00a3a3] text-white shadow-md hover:shadow-lg hover:from-[#00a3a3] hover:to-[#008080] hover:translate-y-[-2px]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
