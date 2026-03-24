"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Gift } from "lucide-react";
import { toast } from "sonner";

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

interface BankCardProps {
  bank: string;
  accountNumber: string;
  accountHolder: string;
  delay: number;
}

function BankCard({
  bank,
  accountNumber,
  accountHolder,
  delay,
}: BankCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      toast.success(`Nomor rekening ${bank} berhasil disalin.`);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Gagal menyalin. Silakan salin secara manual.");
    }
  };

  return (
    <motion.div
      {...fadeUp(delay)}
      className="border-[0.5px] border-midnight-accent/30 bg-midnight-surface p-8 max-w-96 w-full relative"
    >
      <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-midnight-accent/50 to-transparent" />

      <p className="font-manrope text-[0.6rem] tracking-[0.4em] text-midnight-accent uppercase mb-6">
        {bank}
      </p>

      <p className="font-cinzel text-xl text-midnight-primary tracking-widest mb-2">
        {accountNumber}
      </p>

      <p className="font-manrope text-[0.78rem] text-midnight-muted mb-7 tracking-wide">
        a.n. {accountHolder}
      </p>

      <button
        onClick={handleCopy}
        className={`inline-flex items-center gap-2 px-6 py-3 border-[0.5px] border-midnight-accent/40 bg-transparent font-manrope text-[0.62rem] tracking-[0.25em] uppercase cursor-pointer transition-all duration-300 hover:bg-midnight-accent/8 ${
          copied ? "text-green-400" : "text-midnight-accent"
        }`}
      >
        {copied ? (
          <>
            <Check size={12} />
            Tersalin
          </>
        ) : (
          <>
            <Copy size={12} />
            Salin Nomor
          </>
        )}
      </button>
    </motion.div>
  );
}

export default function WeddingGift() {
  return (
    <section className="py-28 px-8 max-w-225 mx-auto border-b border-midnight-accent/12 bg-midnight-background">
      <motion.div {...fadeUp(0)} className="text-center mb-6">
        <Gift size={20} className="mx-auto mb-4 text-midnight-accent" />
        <p className="font-manrope text-[0.65rem] tracking-[0.4em] text-midnight-muted uppercase mb-4">
          Digital Angpao
        </p>
        <h2 className="font-cinzel text-[clamp(1.6rem,4vw,2.4rem)] text-midnight-primary tracking-widest mb-4">
          Wedding Gift
        </h2>
        <p className="font-manrope text-sm text-midnight-muted/60 max-w-100 mx-auto mb-16 leading-relaxed">
          Doa restu Anda adalah hadiah terindah bagi kami. Namun jika Anda ingin
          memberikan tanda kasih, berikut informasi rekening kami.
        </p>
      </motion.div>

      <div className="flex gap-6 justify-center flex-wrap">
        <BankCard
          bank="Bank Central Asia (BCA)"
          accountNumber="1234 5678 90"
          accountHolder="Raka Pratama"
          delay={0.1}
        />
        <BankCard
          bank="Bank Mandiri"
          accountNumber="0987 6543 21"
          accountHolder="Andini Putri"
          delay={0.25}
        />
      </div>
    </section>
  );
}
