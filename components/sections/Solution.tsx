'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const modules = [
  {
    badge: 'מודול 1',
    title: 'יסודות האשליה',
    goal: 'להבין איך המוח האנושי עובד — ולמה הוא נופל על דברים מסוימים',
    includes: 'פסיכולוגיה של תפיסה, עיוורון לשינוי, ניהול תשומת לב',
  },
  {
    badge: 'מודול 2',
    title: 'הקסם שאתה רוצה לעשות',
    goal: 'טכניקות מנטליזם ואשליות חושים — מוסברות עם הלוגיקה שמאחוריהן',
    includes: 'קריאת מחשבות, ניחוש — הכל בלי להשאיר אותך תוהה למה זה עבד',
  },
  {
    badge: 'מודול 3',
    title: 'לקרוא בני אדם',
    goal: 'להבין מה אדם חושב לפני שהוא פתח פה',
    includes: 'מיקרו-הבעות, אינדיקטורים שפתיים, ניתוח התנהגות בזמן אמת',
  },
  {
    badge: 'מודול 4',
    title: 'הנוכחות',
    goal: 'לבנות את זה שאנשים מרגישים כשאתה נכנס לחדר',
    includes: 'שפת גוף של שליטה, קצב דיבור, ניהול שתיקות, הופעה תחת לחץ',
  },
  {
    badge: 'מודול 5',
    title: 'הופעה בשטח',
    goal: 'להיות מוכן לכל מצב — מסביבה קטנה ועד קהל גדול',
    includes: 'התמודדות עם ספקנים, שחזור תחת לחץ, בניית רפרטואר אישי',
  },
];

export default function Solution() {
  return (
    <section className="section-padding bg-bg-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="text-center mb-12">
          <p className="text-[#737373] text-sm mb-3">זהו הקורס</p>
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-2">
            המסמר <span className="text-gold">שבחדר</span>
          </h2>
          <p className="text-[#a3a3a3] text-base mt-4 leading-relaxed">
            100+ שיעורים שמלמדים מנטליזם, אומנות חושים ונוכחות —
            <br />
            מהבסיס ועד הרמה שהייתה נראית לך על-טבעית.
          </p>

          {/* Stats bar */}
          <div className="flex justify-center gap-6 md:gap-10 mt-8 text-center">
            {[
              { v: '100+', l: 'שיעורי וידאו' },
              { v: '5', l: 'מודולים' },
              { v: '500+', l: 'תלמידים' },
              { v: '∞', l: 'גישה לצמיתות' },
            ].map((s) => (
              <div key={s.l} className="border border-[#262626] rounded-lg px-4 py-3 bg-bg-card">
                <div className="text-xl font-bold text-gold">{s.v}</div>
                <div className="text-xs text-text-muted mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="space-y-4"
        >
          {modules.map((mod, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ borderColor: 'rgba(212,175,55,0.4)' }}
              className="bg-bg-card border border-[#262626] rounded-xl p-5 md:p-6 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-gold border border-gold/30 rounded-full px-3 py-1">
                  {mod.badge}
                </span>
                <h3 className="font-bold text-white text-lg">{mod.title}</h3>
              </div>
              <p className="text-[#a3a3a3] text-sm mb-2 leading-relaxed">{mod.goal}</p>
              <p className="text-[#737373] text-xs leading-relaxed">{mod.includes}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
