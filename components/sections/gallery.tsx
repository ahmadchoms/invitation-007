"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  viewport: { once: true, margin: "-60px" },
});

interface PhotoPlaceholderProps {
  label: string;
  aspect: string;
  delay: number;
}

function PhotoPlaceholder({ label, aspect, delay }: PhotoPlaceholderProps) {
  const heightClass = aspect === "tall" ? "h-80" : "h-56";

  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`border-[0.5px] border-midnight-accent/35 bg-midnight-surface ${heightClass} flex items-center justify-center relative overflow-hidden cursor-pointer`}
    >
      <div className="absolute inset-0 bg-linear-to-br from-midnight-accent/5 to-transparent pointer-events-none" />

      <div className="absolute top-2 left-2 w-3 h-3 border-t-[0.5px] border-l-[0.5px] border-midnight-accent/50" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b-[0.5px] border-r-[0.5px] border-midnight-accent/50" />

      <div className="text-center">
        <div className="w-8 h-8 border-[0.5px] border-midnight-accent/30 rounded-full mx-auto mb-2 flex items-center justify-center">
          <span className="text-midnight-accent/40 text-[0.7rem]">+</span>
        </div>
        <p className="font-manrope text-[0.6rem] tracking-[0.25em] text-midnight-muted/40 uppercase">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="py-28 px-8 max-w-225 mx-auto border-b border-midnight-accent/12 bg-midnight-background">
      <motion.div {...fadeUp(0)} className="text-center mb-16">
        <p className="font-manrope text-[0.65rem] tracking-[0.4em] text-midnight-muted uppercase mb-4">
          Kenangan
        </p>
        <h2 className="font-cinzel text-[clamp(1.6rem,4vw,2.4rem)] text-midnight-primary tracking-widest">
          Galeri Foto
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="row-span-2">
          <PhotoPlaceholder label="Foto 1" aspect="tall" delay={0.05} />
        </div>
        <PhotoPlaceholder label="Foto 2" aspect="square" delay={0.1} />
        <PhotoPlaceholder label="Foto 3" aspect="square" delay={0.15} />

        <div className="md:col-start-2">
          <PhotoPlaceholder label="Foto 4" aspect="square" delay={0.2} />
        </div>
        <PhotoPlaceholder label="Foto 5" aspect="square" delay={0.25} />
      </div>

      <motion.p
        {...fadeUp(0.4)}
        className="text-center mt-8 font-manrope text-[0.65rem] tracking-[0.2em] text-midnight-muted/50 uppercase"
      >
        Ganti dengan foto asli Anda
      </motion.p>
    </section>
  );
}
