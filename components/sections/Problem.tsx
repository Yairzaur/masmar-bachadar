'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const stats = [
  { emoji: '👈', text: '7 שניות — זה כל הזמן שיש לך ליצור רושם ראשון על אדם חדש.' },
  { emoji: '👈', text: '55% מהתקשורת האנושית היא לא-מילולית. מה שאתה אומר — 7% בלבד.' },
  { emoji: '👈', text: '500+ תלמידים כבר למדו את השיטה הזו — וקיבלו את התגובות שראית בסרטונים.' },
  { emoji: '👈', text: 'ביוטיוב יש אלפי סרטוני קסמים. כמעט אף אחד לא מסביר למה זה עובד על המוח האנושי.' },
];

export default function Problem() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="mb-12 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">קצר ולעניין</p>
          <div className="gold-line w-12 mx-auto mb-8" />
          <div className="space-y-4 text-[#a3a3a3] text-lg leading-relaxed text-right">
            <p>ראית סרטון של מנטליסט.</p>
            <p>הוא אמר למישהו מה הוא חשב.</p>
            <p>האולם פרץ.</p>
            <p className="mt-6 text-white">ניסית לשחזר.</p>
            <p className="text-white">זה לא עבד אותו דבר.</p>
            <p className="mt-6 text-gold font-semibold">זה לא בגלל שאתה לא מוכשר.</p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-start gap-4 bg-bg-card border border-[#262626] rounded-lg p-5"
            >
              <span className="text-2xl shrink-0">{stat.emoji}</span>
              <p className="text-[#a3a3a3] text-base leading-relaxed">{stat.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
