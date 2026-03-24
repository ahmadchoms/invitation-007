"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  viewport: { once: true, margin: "-40px" },
});

export default function Footer() {
  return (
    <footer className="pt-24 px-8 pb-16 text-center relative overflow-hidden bg-midnight-background">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="w-25 h-[0.5px] bg-linear-to-r from-transparent via-midnight-accent/50 to-transparent mx-auto mb-16"
      />

      <motion.div {...fadeUp(0.1)} className="mb-12">
        <div className="w-16 h-16 border-[0.5px] border-midnight-accent/35 rotate-45 mx-auto flex items-center justify-center">
          <span className="font-cinzel text-base text-midnight-accent/70 -rotate-45">
            R&A
          </span>
        </div>
      </motion.div>

      <motion.p
        {...fadeUp(0.2)}
        className="font-manrope text-[clamp(0.8rem,2vw,0.9rem)] text-midnight-muted leading-loose max-w-135 mx-auto mb-6 italic"
      >
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
        <br />
        Bapak / Ibu / Saudara/i berkenan hadir untuk memberikan
        <br />
        doa restu kepada kami.
      </motion.p>

      <motion.p
        {...fadeUp(0.3)}
        className="font-cinzel text-base text-midnight-accent/70 tracking-widest mb-16"
      >
        Raka &amp; Andini
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
        viewport={{ once: true }}
        className="w-15 h-[0.5px] bg-midnight-accent/20 mx-auto mb-10"
      />

      <motion.div
        {...fadeUp(0.4)}
        className="flex items-center justify-center gap-2"
      >
        <span className="font-manrope text-[0.6rem] tracking-[0.3em] text-midnight-muted/40 uppercase">
          Created with
        </span>
        <Heart size={9} className="fill-red-900 text-red-900" />
        <span className="font-manrope text-[0.6rem] tracking-[0.3em] text-midnight-muted/40 uppercase">
          by
        </span>
        <span className="font-cinzel text-[0.65rem] tracking-widest text-midnight-muted/60">
          Chozy Space
        </span>
      </motion.div>

      <div className="h-8" />
    </footer>
  );
}
