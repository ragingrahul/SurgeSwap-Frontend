import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AceButtonProps {
  text: string;
  icon?: LucideIcon;
  className?: string;
}

export default function AceButton({
  text,
  icon: Icon,
  className,
}: AceButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 h-12 rounded-lg bg-[#019E8C] text-white font-extrabold relative cursor-pointer shadow-md transition duration-300 ease-in-out inline-flex items-center justify-center gap-2",
        "hover:bg-[#97B1AB] hover:shadow-lg hover:translate-y-[-2px] border-2 border-[#344B47]",
        className
      )}
    >
      {Icon && <Icon size={20} className="shrink-0" />}
      <span className="tracking-wide">{text}</span>
    </button>
  );
}
