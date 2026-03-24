"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import WelcomeCover from "@/components/sections/welcome";
import Hero from "@/components/sections/hero";
import SectionDivider from "@/components/section-divider";
import CoupleProfile from "@/components/sections/couple";
import EventDetails from "@/components/sections/event";
import Gallery from "@/components/sections/gallery";
import WeddingGift from "@/components/sections/gift";
import Footer from "@/components/sections/footer";
import { siteConfig } from "@/data/config";

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (!isOpened) {
      document.body.classList.add("scroll-locked");
    } else {
      document.body.classList.remove("scroll-locked");
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    return () => {
      document.body.classList.remove("scroll-locked");
    };
  }, [isOpened]);

  const handleOpen = () => setIsOpened(true);

  return (
    <main className="bg-background text-primary font-manrope">
      <AnimatePresence>
        {!isOpened && <WelcomeCover onOpen={handleOpen} />}
      </AnimatePresence>

      <Hero />
      <SectionDivider label={siteConfig.content.sectionLabels.couple} />
      <CoupleProfile />
      <SectionDivider label={siteConfig.content.sectionLabels.event} />
      <EventDetails />
      <SectionDivider label={siteConfig.content.sectionLabels.gallery} />
      <Gallery />
      <SectionDivider label={siteConfig.content.sectionLabels.gift} />
      <WeddingGift />
      <SectionDivider />
      <Footer />
    </main>
  );
}
