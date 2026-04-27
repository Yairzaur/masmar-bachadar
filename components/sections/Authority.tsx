'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const credentials = [
  'מעל עשור על במות ובאירועים פרטיים ברחבי הארץ',
  '500+ תלמידים שסיימו את הקורס ועובדים עם השיטה',
  'קהילת הקוסמים הפעילה ביותר בישראל — 500 חברים פעילים',
  'היחיד שמלמד את הפסיכולוגיה המלאה — בלי לשמור שום דבר לעצמו',
];

export default function Authority() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="mb-12 text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-4">מי אני שאלמד אותך</p>
          <div className="gold-line w-12 mx-auto" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          {...scrollReveal}
          className="bg-bg-card border border-[#262626] rounded-xl p-6 md:p-8"
        >
          {/* Name + title */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">יאיר זאורוב</h2>
            <p className="text-gold text-sm">אומן חושים ומנטליסט מקצועי</p>
          </div>

          {/* Credentials */}
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 mb-8"
          >
            {credentials.map((c, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-start gap-3">
                <span className="text-gold mt-1 shrink-0">✦</span>
                <span className="text-[#a3a3a3] text-base leading-relaxed">{c}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Personal note */}
          <div className="border-t border-[#262626] pt-6">
            <p className="text-[#737373] text-base italic leading-relaxed">
              "לא גדלתי עם ביטחון עצמי. גדלתי עם סקרנות.
              <br />
              ההבדל בין השניים — הוא בדיוק מה שאני מלמד."
            </p>
            <p className="mt-3 text-gold text-sm font-medium">— יאיר זאורוב</p>
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div variants={fadeUp} {...scrollReveal} className="mt-10 text-center">
          <p className="text-[#a3a3a3] text-base leading-relaxed">
            המטרה שלי היא אחת:
            <br />
            <span className="text-white font-medium">
              שאחרי הקורס הזה, אתה לא תצטרך לשאול עוד שאלות ביוטיוב.
            </span>
            <br />
            הכל נמצא פה — מוסבר, מדויק, ועם ההיגיון שמאחוריו.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
