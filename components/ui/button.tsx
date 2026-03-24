"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "accent" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "outline", size = "md", children, ...props },
    ref,
  ) => {
    const variantClasses = {
      accent:
        "bg-midnight-accent/12 border-[0.5px] border-midnight-accent/60 text-midnight-accent hover:bg-midnight-accent/20",
      ghost: "bg-transparent text-midnight-muted hover:bg-midnight-accent/5",
      outline:
        "bg-transparent border-[0.5px] border-midnight-accent/35 text-midnight-accent hover:bg-midnight-accent/10",
    };

    const sizeClasses = {
      sm: "text-[0.58rem] px-4.5 py-2",
      md: "text-[0.64rem] px-6 py-3",
      lg: "text-[0.7rem] px-9 py-3.5",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-manrope uppercase tracking-[0.25em] cursor-pointer transition-all duration-300 rounded-none border-none",
          variantClasses[variant],
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export { Button };
