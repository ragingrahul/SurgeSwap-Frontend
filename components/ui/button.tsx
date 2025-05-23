import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#019E8C]/50",
  {
    variants: {
      variant: {
        default:
          "bg-[#019E8C] text-[#fafafa] shadow-xs hover:bg-[#019E8C]/90 border border-[#019E8C]/50",
        destructive: "bg-red-500 text-white shadow-xs hover:bg-red-500/90",
        outline:
          "border border-[#019E8C]/50 bg-transparent text-[#019E8C] shadow-xs hover:bg-[#019E8C]/10 hover:text-[#019E8C]",
        secondary:
          "bg-[#97B1AB] text-[#344B47] shadow-xs hover:bg-[#97B1AB]/80 border border-[#97B1AB]/50",
        ghost: "hover:bg-[#019E8C]/10 hover:text-[#019E8C]",
        link: "text-[#019E8C] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
