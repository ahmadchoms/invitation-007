"use client";

import { motion } from "framer-motion";
import CountdownTimer from "../countdown-timer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.1,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  viewport: { once: true },
});

export default function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-8 py-16 text-center overflow-hidden border-b border-midnight-border/15 bg-midnight-background">
      {/* Corner fine lines — Decorative */}
      <div className="absolute top-8 left-8 w-15 h-15 border-t border-l border-midnight-accent/40" />
      <div className="absolute top-8 right-8 w-15 h-15 border-t border-r border-midnight-accent/40" />
      <div className="absolute bottom-8 left-8 w-15 h-15 border-b border-l border-midnight-accent/40" />
      <div className="absolute bottom-8 right-8 w-15 h-15 border-b border-r border-midnight-accent/40" />

      {/* Diamond frame with initials */}
      <motion.div {...fadeUp(0.1)} className="mb-12">
        <div className="relative w-30 h-30 flex items-center justify-center mx-auto">
          {/* Outer diamond */}
          <div className="absolute inset-0 border border-midnight-accent/50 rotate-45" />
          {/* Inner diamond */}
          <div className="absolute inset-4 border border-midnight-accent/25 rotate-45" />
          {/* Initials */}
          <span className="font-cinzel text-[1.8rem] text-midnight-accent z-10 tracking-wider">
            R&A
          </span>
        </div>
      </motion.div>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.25)}
        className="font-manrope text-[0.68rem] tracking-[0.35em] text-midnight-muted uppercase"
      >
        The Wedding Of
      </motion.p>

      {/* Bride & Groom names */}
      <div className="mt-4 space-y-2">
        <motion.h2
          {...fadeUp(0.4)}
          className="font-cinzel text-[clamp(2.5rem,8vw,5rem)] text-midnight-primary tracking-wider leading-[1.15]"
        >
          Raka
        </motion.h2>

        <motion.p
          {...fadeUp(0.5)}
          className="font-manrope text-[0.65rem] tracking-[0.5em] text-midnight-accent/70 uppercase"
        >
          &amp;
        </motion.p>

        <motion.h2
          {...fadeUp(0.6)}
          className="font-cinzel text-[clamp(2.5rem,8vw,5rem)] text-midnight-primary tracking-wider leading-[1.15]"
        >
          Andini
        </motion.h2>
      </div>

      {/* Date */}
      <motion.div
        {...fadeUp(0.75)}
        className="mt-12 flex flex-col items-center gap-4"
      >
        <div className="w-10 h-[0.5px] bg-midnight-accent/50" />
        <p className="font-manrope text-[0.72rem] tracking-[0.25em] text-midnight-muted uppercase">
          Sabtu, 12 Oktober 2024
        </p>
        <div className="w-10 h-[0.5px] bg-midnight-accent/50" />
      </motion.div>

      {/* Location tagline */}
      <motion.p
        {...fadeUp(0.9)}
        className="mt-8 font-manrope text-[0.75rem] text-midnight-muted tracking-widest italic"
      >
        Jakarta, Indonesia
      </motion.p>

      {/* Live countdown */}
      <div className="mt-8">
        <CountdownTimer targetDate={new Date("2025-10-12T08:00:00+07:00")} />
      </div>

      {/* Animated scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 1.5,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-9 bg-linear-to-b from-midnight-accent/50 to-transparent" />
        <span className="font-manrope text-[0.48rem] tracking-[0.35em] text-midnight-muted uppercase">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
