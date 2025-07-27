import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div className={cn(
      "backdrop-blur-xl bg-[var(--glass-bg)] border border-[var(--glass-border)] rounded-2xl",
      hover && "hover:bg-[var(--glass-hover)] transition-all duration-300 transform hover:scale-105",
      className
    )}>
      {children}
    </div>
  );
}
