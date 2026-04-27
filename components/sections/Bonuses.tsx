'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';
import CTAButton from '@/components/ui/CTAButton';

const bonuses = [
  {
    name: '5 עקרונות הכריזמה',
    desc: 'וידאו-גייד שמפרק את הנוכחות הגבוהה לעקרונות עבודה. לא תיאוריה — מה לעשות בפועל ביום ראשון.',
    value: '490 ₪',
  },
  {
    name: 'מדריך השליטה בשיחה',
    desc: 'איך להוביל שיחה לאן שאתה רוצה, בלי שהצד השני ירגיש מוביל.',
    value: '390 ₪',
  },
  {
    name: 'Cold Read Blueprint',
    desc: 'שיטה מובנית לקרוא אדם תוך 30 שניות — ואיך להשתמש בזה בצורה שגורמת להם להרגיש שאתה קורא מחשבות.',
    value: '590 ₪',
  },
  {
    name: 'ביטחון עצמי מיידי — 7 טכניקות',
    desc: '7 טכניקות קצרות שניתן להפעיל לפני כניסה לכל מצב שבו אתה רוצה להיות בשיא שלך.',
    value: '290 ₪',
  },
  {
    name: 'גישה לקהילת הקוסמים הפעילה בישראל',
    desc: '500+ קוסמים ומנטליסטים שמדברים, שואלים, עונים ומשתפים כל יום. לא קבוצה שקטה — קהילה שחיה.',
    value: 'לא ניתן לאמידה',
  },
];

export default function Bonuses() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="text-center mb-12">
          <p className="text-[#737373] text-base mb-2">ועוד משהו.</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            כשמצטרפים עכשיו — מקבלים גם:
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="space-y-4 mb-12"
        >
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex gap-4 bg-bg-card border border-[#262626] rounded-xl p-5 md:p-6"
            >
              <span className="text-2xl shrink-0 mt-0.5">💎</span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-bold text-white text-base">{b.name}</h3>
                  <span className="text-gold text-sm font-semibold shrink-0 border border-gold/30 rounded-full px-2.5 py-0.5">
                    {b.value}
                  </span>
                </div>
                <p className="text-[#737373] text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total value */}
        <motion.div variants={fadeUp} {...scrollReveal} className="text-center mb-8">
          <p className="text-[#737373] text-sm mb-1">שווי כולל</p>
          <p className="text-[#a3a3a3] line-through text-xl">3,760 ₪</p>
          <p className="text-gold text-sm mt-1">בחינם לגמרי עם הקורס</p>
        </motion.div>

        <motion.div variants={fadeUp} {...scrollReveal} className="flex justify-center">
          <CTAButton />
        </motion.div>
      </div>
    </section>
  );
}
