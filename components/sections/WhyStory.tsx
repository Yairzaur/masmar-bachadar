'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const changes = [
  'כל טכניקה מוסברת עם הפסיכולוגיה שמאחוריה — לא רק איך, גם למה',
  'שום דבר לא נשמר. מה שקוסמים שמרים סוד — כאן חשוף',
  'קהילה שמלווה אותך — לא מנוי שמשלם ושוכח',
  'מסמר אחד בחדר — זה אתה',
];

export default function WhyStory() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="text-center mb-10">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">למה יצרתי את הקורס הזה</p>
          <div className="gold-line w-12 mx-auto" />
        </motion.div>

        <motion.div variants={fadeUp} {...scrollReveal} className="space-y-4 text-[#a3a3a3] text-base md:text-lg leading-relaxed mb-12">
          <p>כי לקח לי שנים לפרק את מה שאני הולך לתת לך ב-100 שיעורים.</p>
          <p>למדתי מטעויות. מהופעות שעבדו ומהופעות שלא.</p>
          <p>משיחות עם פסיכולוגים, עם מנטליסטים, עם אנשים רגילים שרצו להיות פחות רגילים.</p>
          <p className="mt-6 text-white">ובסוף הבנתי שהמידע הזה צריך להיות נגיש.</p>
          <p>לא בעוד ערוץ יוטיוב שמראה תנועות ידיים.</p>
          <p className="text-white font-medium">מקום אחד, מסודר, שמסביר הכל — בלי שיורים.</p>
        </motion.div>

        <motion.div variants={fadeUp} {...scrollReveal} className="mb-8">
          <h3 className="text-white font-bold text-xl mb-6">מה ייחודי בגישה שלי:</h3>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3"
          >
            {changes.map((c, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-start gap-3">
                <span className="text-gold mt-1 shrink-0">✦</span>
                <span className="text-[#a3a3a3] text-base leading-relaxed">{c}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
