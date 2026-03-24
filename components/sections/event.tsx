"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import { siteConfig } from "@/data/config";
import { fadeUp } from "@/lib/motion";

interface EventCardProps {
  type: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapsUrl: string;
  delay?: number;
}

function EventCard({
  type,
  date,
  time,
  venue,
  address,
  mapsUrl,
  delay = 0,
}: EventCardProps) {
  return (
    <motion.div
      {...fadeUp(delay)}
      className="flex-1 min-w-64 md:max-w-96 border-[0.5px] border-midnight-accent/30 px-8 py-10 flex flex-col gap-6 relative bg-midnight-surface"
    >
      <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-midnight-accent/60 to-transparent" />

      <div>
        <p className="font-manrope text-[0.6rem] tracking-[0.4em] text-midnight-accent uppercase mb-2">
          {type}
        </p>
        <div className="w-6 h-[0.5px] bg-midnight-accent/40" />
      </div>

      <div className="flex gap-3 items-start">
        <Calendar size={14} className="mt-1 shrink-0 text-midnight-muted" />
        <div>
          <p className="font-cinzel text-base text-midnight-primary tracking-wide">
            {date}
          </p>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <Clock size={14} className="shrink-0 text-midnight-muted" />
        <p className="font-manrope text-[0.8rem] text-midnight-muted/80 tracking-wider">
          {time} WIB
        </p>
      </div>

      <div className="flex gap-3 items-start">
        <MapPin size={14} className="mt-1 shrink-0 text-midnight-muted" />
        <div>
          <p className="font-manrope text-[0.85rem] font-medium text-midnight-primary/90 mb-1">
            {venue}
          </p>
          <p className="font-manrope text-[0.75rem] text-midnight-muted/60 leading-relaxed whitespace-pre-line">
            {address}
          </p>
        </div>
      </div>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 mt-2 py-3 border-[0.5px] border-midnight-accent/40 text-midnight-accent font-manrope text-[0.65rem] tracking-[0.25em] uppercase transition-all duration-300 hover:bg-midnight-accent/10 hover:border-midnight-accent/70"
      >
        <MapPin size={12} />
        {siteConfig.content.event.seeLocation}
      </a>
    </motion.div>
  );
}

export default function EventDetails() {
  return (
    <section className="py-28 px-8 max-w-225 mx-auto border-b border-midnight-accent/12 bg-midnight-background">
      <motion.div {...fadeUp(0)} className="text-center mb-20">
        <p className="font-manrope text-[0.65rem] tracking-[0.4em] text-midnight-muted uppercase mb-4">
          {siteConfig.content.event.subtitle}
        </p>
        <h2 className="font-cinzel text-[clamp(1.6rem,4vw,2.4rem)] text-midnight-primary tracking-widest">
          {siteConfig.content.event.title}
        </h2>
      </motion.div>

      <div className="flex gap-8 justify-center flex-wrap">
        {siteConfig.event.ceremonies.map((ceremony, index) => (
          <EventCard
            key={ceremony.type}
            type={ceremony.type}
            date={ceremony.date}
            time={ceremony.time}
            venue={ceremony.venue}
            address={ceremony.address}
            mapsUrl={ceremony.mapsUrl}
            delay={0.1 + index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}
