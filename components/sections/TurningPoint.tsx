'use client';

import { motion } from 'framer-motion';
import { fadeUp, scrollReveal } from '@/lib/animations';

export default function TurningPoint() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-xl mx-auto text-center">
        <motion.div variants={fadeUp} {...scrollReveal} className="space-y-4 text-[#a3a3a3] text-lg leading-relaxed">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            אז מה <span className="text-gold">כן</span> עובד?
          </h2>

          <p>הייתי בן 16.</p>
          <p>ישבתי מול מראה ותרגלתי.</p>
          <p>שעות. ימים. חודשים.</p>

          <p className="mt-6 text-white">יצאתי לשטח.</p>
          <p className="text-white">התגובות לא היו מה שציפיתי.</p>

          <p className="mt-6">אז הפסקתי לתרגל טכניקות —</p>
          <p className="text-white font-medium">והתחלתי ללמוד פסיכולוגיה.</p>

          <div className="mt-8 space-y-3 text-right border-r-2 border-[#262626] pr-5">
            <p>איך תשומת לב עובדת.</p>
            <p>איך המוח מעבד מה שהוא לא מצפה לו.</p>
            <p>איך נוכחות נבנית לפני שאמרת מילה.</p>
          </div>

          <p className="mt-8 text-xl text-white font-semibold">וכל מה השתנה.</p>
        </motion.div>

        <motion.div variants={fadeUp} {...scrollReveal} className="mt-14">
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="text-gold text-base font-medium">
            זה הרגע שהבנתי שאני צריך ללמד את זה כמו שצריך.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
