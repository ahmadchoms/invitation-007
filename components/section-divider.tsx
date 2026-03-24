"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  label?: string;
}

export default function SectionDivider({ label }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 1.4, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-5 px-8 overflow-hidden"
    >
      <div className="flex-1 max-w-30 h-[0.5px] bg-linear-to-r from-transparent via-midnight-accent/35 to-midnight-accent/35" />

      {label ? (
        <span className="font-manrope text-[0.55rem] tracking-[0.4em] text-midnight-muted uppercase whitespace-nowrap">
          {label}
        </span>
      ) : (
        <span className="inline-block w-1 h-1 border-[0.5px] border-midnight-accent/50 rotate-45" />
      )}

      <div className="flex-1 max-w-30 h-[0.5px] bg-linear-to-r from-midnight-accent/35 via-midnight-accent/35 to-transparent" />
    </motion.div>
  );
}
