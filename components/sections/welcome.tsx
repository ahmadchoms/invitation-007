"use client";

import { motion } from "framer-motion";

interface WelcomeProps {
  onOpen: () => void;
}

export default function WelcomeCover({ onOpen }: WelcomeProps) {
  return (
    <motion.div
      key="welcome-cover"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100%" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-8 text-center bg-midnight-background"
    >
      {/* Fine top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
        className="absolute top-10 left-[10%] right-[10%] h-[0.5px] bg-midnight-accent/40 origin-left"
      />

      {/* Fine bottom line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: "easeInOut", delay: 0.4 }}
        className="absolute bottom-10 left-[10%] right-[10%] h-[0.5px] bg-midnight-accent/40 origin-right"
      />

      {/* Recipient name */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="font-manrope text-[0.75rem] tracking-[0.3em] text-midnight-muted uppercase mb-10"
      >
        Kepada Yth.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-cinzel text-[clamp(1.5rem,4vw,2.5rem)] text-midnight-primary mb-14 leading-relaxed"
      >
        Bapak / Ibu / Saudara/i
        <br />
        <span className="text-midnight-accent">Nama Tamu Undangan</span>
      </motion.p>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="w-10 h-[0.5px] bg-midnight-accent/60 mb-14"
      />

      {/* The Wedding Of label */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="font-manrope text-[0.7rem] tracking-[0.35em] text-midnight-muted uppercase mb-4"
      >
        The Wedding Of
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
        className="font-cinzel text-[clamp(2rem,6vw,3.5rem)] text-midnight-primary tracking-wider leading-none mb-12"
      >
        Raka & Andini
      </motion.h1>

      {/* Open Invitation Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="font-manrope text-[0.72rem] tracking-[0.3em] uppercase text-midnight-accent 
                   bg-transparent border-[0.5px] border-midnight-accent/70 px-11 py-4 
                   cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(var(--midnight-accent),0.08)]
                   hover:bg-midnight-accent/10 hover:shadow-[0_0_40px_rgba(var(--midnight-accent),0.2)]"
      >
        Buka Undangan
      </motion.button>

      {/* Subtle scroll hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-20 font-manrope text-[0.6rem] tracking-[0.25em] text-midnight-muted/70 uppercase"
      >
        Sentuh untuk membuka
      </motion.p>
    </motion.div>
  );
}
