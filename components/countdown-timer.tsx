"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  useEffect(() => {
    setIsPast(targetDate.getTime() < Date.now());
  }, [targetDate]);

  if (!mounted) return null;

  if (isPast) {
    return (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="font-manrope text-[0.7rem] tracking-[0.25em] text-midnight-accent/70 uppercase text-center mt-8"
      >
        Alhamdulillah, telah menikah ✦
      </motion.p>
    );
  }

  const units = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      viewport={{ once: true }}
      className="flex gap-2 justify-center mt-10 flex-wrap items-center"
    >
      {units.map(({ label, value }, i) => (
        <div key={label} className="flex items-center gap-2">
          {/* Box Unit */}
          <div className="flex flex-col items-center min-w-13 border border-midnight-accent/20 p-2 pt-3 bg-midnight-surface">
            <span className="font-cinzel text-[1.3rem] text-midnight-primary leading-none min-w-[2ch] text-center block">
              {String(value).padStart(2, "0")}
            </span>
            <span className="font-manrope text-[0.48rem] tracking-[0.3em] text-midnight-muted uppercase mt-1.5">
              {label}
            </span>
          </div>

          {/* Separator (Titik Dua) */}
          {i < units.length - 1 && (
            <span className="text-midnight-accent/40 font-cinzel text-base mb-3">
              :
            </span>
          )}
        </div>
      ))}
    </motion.div>
  );
}
