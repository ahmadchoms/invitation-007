import { TargetAndTransition, VariantLabels } from "framer-motion";

export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 1,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  viewport: { once: true, margin: "-60px" },
});

export const fadeUpCustom = (delay = 0, yOffset = 40, margin = "-60px", duration = 1) => ({
  initial: { opacity: 0, y: yOffset },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration,
    delay,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
  },
  viewport: { once: true, margin },
});
