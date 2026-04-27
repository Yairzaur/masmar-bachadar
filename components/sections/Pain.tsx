'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';

const badOptions = [
  { title: 'לחפש עוד ביוטיוב?', consequence: 'עוד שעה, עוד טכניקה, אותה תחושה של חסר' },
  { title: 'לנסות לשנן תנועות?', consequence: 'נראה מאומן. לא מרשים — מנסה להרשים' },
  { title: "לוותר ולהגיד 'זה לא בשבילי'?", consequence: 'כן, אפשר. אבל אתה יודע שלא זו התשובה האמיתית' },
];

export default function Pain() {
  return (
    <section className="section-padding bg-bg-primary">
      <div className="max-w-2xl mx-auto">
        <motion.div variants={fadeUp} {...scrollReveal} className="mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            הבעיה היא לא שאתה לא יודע
            <br />
            <span className="text-gold">מספיק טכניקות.</span>
          </h2>
        </motion.div>

        <motion.div variants={fadeUp} {...scrollReveal} className="mb-12 space-y-4 text-[#a3a3a3] text-base md:text-lg leading-relaxed">
          <p>הבעיה היא שמי שלימד אותך</p>
          <p>הראה לך <strong className="text-white">מה</strong> לעשות —</p>
          <p>בלי להסביר <strong className="text-white">למה</strong> זה קורה במוח של הצופה.</p>
          <p className="mt-6">אז אתה מבצע.</p>
          <p>משהו יוצא נכון.</p>
          <p>המשהו הבא — לא.</p>
          <p className="text-white font-medium mt-4">אי אפשר לשחזר מה שאתה לא מבין.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-4 mb-12"
        >
          {badOptions.map((opt, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ borderColor: '#d4af37', boxShadow: '0 0 15px rgba(212,175,55,0.15)' }}
              className="border border-[#262626] rounded-lg p-5 transition-all duration-300"
            >
              <p className="font-semibold text-white mb-1">{opt.title}</p>
              <p className="text-text-muted text-sm">{opt.consequence}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted quote */}
        <motion.blockquote
          variants={fadeUp}
          {...scrollReveal}
          className="border-r-2 border-gold pr-5 text-[#a3a3a3] text-lg md:text-xl italic leading-relaxed"
        >
          "הטכניקה היא 20% מהסיפור. 80% זה ההבנה של מה קורה בראש של האדם שמולך."
        </motion.blockquote>
      </div>
    </section>
  );
}
