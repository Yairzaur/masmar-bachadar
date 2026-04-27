'use client';

import { motion } from 'framer-motion';
import { scaleUp, scrollReveal } from '@/lib/animations';

export default function UrgencyQuote() {
  return (
    <section className="py-24 bg-bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gold/3 pointer-events-none" />
      <div className="relative z-10 max-w-xl mx-auto px-5 text-center">
        <motion.div variants={scaleUp} {...scrollReveal}>
          <div className="gold-line w-16 mx-auto mb-10" />
          <p className="text-2xl md:text-3xl font-bold text-white leading-loose">
            כל יום שאתה עובר בחדר
            <br />
            בלי שאף אחד שם לב —
            <br />
            <span className="text-gold">הוא יום שלא חוזר.</span>
          </p>
          <p className="mt-6 text-4xl">👀</p>
          <div className="gold-line w-16 mx-auto mt-10" />
        </motion.div>
      </div>
    </section>
  );
}
