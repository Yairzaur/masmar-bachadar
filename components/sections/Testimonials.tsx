'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const testimonials = [
  {
    name: 'תלמיד — גיל 23',
    hook: 'לפני הקורס ידעתי כמה טריקים. אחרי — אני מבין למה הם עובדים.',
    results: ['הפסקתי לתרגל בלי להבין', 'התגובות השתנו תוך שבועיים', 'אנשים שואלים אותי איפה למדתי'],
  },
  {
    name: 'תלמיד — גיל 31',
    hook: 'חשבתי שכריזמה זה משהו שנולדים איתו. יאיר הוכיח לי אחרת.',
    results: ['נוכחות שונה לגמרי בסביבה חברתית', 'יכולת לקרוא אנשים בשטח', 'הצגה עצמית שגורמת לאנשים לזכור אותי'],
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            מה שתלמידים אומרים —
          </h2>
          <p className="text-[#737373] text-sm">בסרטונים שלהם, בלשון שלהם.</p>
          <div className="gold-line w-12 mx-auto mt-6" />
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          variants={fadeUp}
          {...scrollReveal}
          className="bg-bg-card border border-[#262626] rounded-xl p-8 text-center mb-8"
        >
          <p className="text-[#737373] text-sm">📹 סרטוני המלצה יוטמעו כאן</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="bg-bg-card border border-[#262626] rounded-xl p-5 md:p-6"
            >
              <p className="font-semibold text-white mb-1">{t.name}</p>
              <p className="text-[#a3a3a3] text-base italic mb-4 leading-relaxed">"{t.hook}"</p>
              <ul className="space-y-1.5">
                {t.results.map((r, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[#a3a3a3]">
                    <span className="text-green-400">✅</span> {r}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
