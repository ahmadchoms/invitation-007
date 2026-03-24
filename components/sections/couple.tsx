"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1.1,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  viewport: { once: true, margin: "-80px" },
});

interface PersonCardProps {
  name: string;
  fullTitle: string;
  fatherName: string;
  motherName: string;
  order: number;
}

function PersonCard({
  name,
  fullTitle,
  fatherName,
  motherName,
  order,
}: PersonCardProps) {
  return (
    <motion.div
      {...fadeUp(order * 0.2)}
      className="flex flex-col items-center text-center gap-6 flex-1 min-w-65"
    >
      <div className="w-45 h-55 border-[0.5px] border-midnight-accent/50 relative overflow-hidden bg-midnight-surface flex items-center justify-center">
        <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-[0.5px] border-l-[0.5px] border-midnight-accent/60" />
        <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-[0.5px] border-r-[0.5px] border-midnight-accent/60" />
        <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-[0.5px] border-l-[0.5px] border-midnight-accent/60" />
        <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-[0.5px] border-r-[0.5px] border-midnight-accent/60" />

        <div className="text-center">
          <p className="font-cinzel text-4xl text-midnight-accent/30">
            {name.charAt(0)}
          </p>
          <p className="font-manrope text-[0.6rem] tracking-[0.2em] text-midnight-muted uppercase mt-2">
            Foto
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="font-manrope text-[0.65rem] tracking-[0.3em] text-midnight-muted uppercase">
          {fullTitle}
        </p>
        <h3 className="font-cinzel text-[clamp(1.4rem,3vw,1.9rem)] text-midnight-primary tracking-wider leading-tight">
          {name}
        </h3>

        <div className="w-7.5 h-[0.5px] bg-midnight-accent/40 mx-auto my-1.5" />

        <p className="font-manrope text-[0.75rem] text-midnight-muted leading-relaxed">
          Putra/Putri dari
          <br />
          <span className="text-midnight-primary/90">Bapak {fatherName}</span>
          <br />
          &amp;{" "}
          <span className="text-midnight-primary/90">Ibu {motherName}</span>
        </p>
      </div>
    </motion.div>
  );
}

export default function CoupleProfile() {
  return (
    <section className="py-28 px-8 max-w-225 mx-auto border-b border-midnight-accent/12 bg-midnight-background">
      <motion.div {...fadeUp(0)} className="text-center mb-20">
        <p className="font-manrope text-[0.65rem] tracking-[0.4em] text-midnight-muted uppercase mb-4">
          Mempelai
        </p>
        <h2 className="font-cinzel text-[clamp(1.6rem,4vw,2.4rem)] text-midnight-primary tracking-widest">
          The Couple
        </h2>
      </motion.div>

      <div className="flex flex-wrap justify-center items-start gap-12">
        <PersonCard
          name="Raka Pratama"
          fullTitle="Putra Pertama"
          fatherName="Ahmad Santoso"
          motherName="Sri Wahyuni"
          order={0}
        />

        <motion.div
          {...fadeUp(0.3)}
          className="flex items-center pt-20 shrink-0"
        >
          <span className="font-cinzel text-4xl text-midnight-accent/50">
            &
          </span>
        </motion.div>

        <PersonCard
          name="Andini Putri"
          fullTitle="Putri Pertama"
          fatherName="Budi Hartono"
          motherName="Ratna Dewi"
          order={2}
        />
      </div>
    </section>
  );
}
