'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, staggerItem, scrollReveal } from '@/lib/animations';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const included = [
  '100+ שיעורי וידאו',
  '5 מודולים מלאים',
  'גישה לצמיתות',
  'קהילת WhatsApp פעילה (500+ חברים)',
  'כל 5 הבונוסים',
];

type FormData = { name: string; phone: string };

export default function CTAForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
  };

  return (
    <section id="form" className="section-padding bg-bg-primary">
      <div className="max-w-lg mx-auto">
        {/* Intro */}
        <motion.div variants={fadeUp} {...scrollReveal} className="text-center mb-12">
          <p className="text-[#a3a3a3] text-lg leading-relaxed mb-2">
            אם הגעת עד לכאן —
          </p>
          <p className="text-white text-xl font-semibold">
            אתה כבר יודע שאתה רוצה את זה.
          </p>
          <div className="gold-line w-12 mx-auto mt-6" />
        </motion.div>

        {/* Price block */}
        <motion.div variants={fadeUp} {...scrollReveal} className="bg-bg-card border border-gold/20 rounded-xl p-6 md:p-8 mb-8">
          <div className="text-center mb-6">
            <p className="text-text-muted text-sm line-through mb-1">3,500 ₪</p>
            <p className="text-5xl font-extrabold text-white">1,970 ₪</p>
            <p className="text-[#737373] text-sm mt-2">או 3 תשלומים של 690 ₪</p>
          </div>

          <div className="gold-line mb-6" />

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-2.5 mb-6"
          >
            {included.map((item, i) => (
              <motion.li key={i} variants={staggerItem} className="flex items-center gap-2.5 text-sm text-[#a3a3a3]">
                <span className="text-green-400">✅</span> {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Form */}
        <motion.div variants={fadeUp} {...scrollReveal}>
          {submitted ? (
            <div className="text-center py-10 border border-gold/20 rounded-xl">
              <p className="text-gold text-xl font-bold mb-2">קיבלנו את הפרטים שלך ✓</p>
              <p className="text-[#a3a3a3] text-sm">ניצור איתך קשר בקרוב.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="שם פרטי"
                  {...register('name', { required: true })}
                  className="w-full bg-bg-card border border-[#333] rounded-lg px-4 py-4 text-white placeholder-[#525252] text-base focus:outline-none focus:border-gold transition-colors"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">שדה חובה</p>}
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="מספר טלפון"
                  {...register('phone', { required: true })}
                  className="w-full bg-bg-card border border-[#333] rounded-lg px-4 py-4 text-white placeholder-[#525252] text-base focus:outline-none focus:border-gold transition-colors"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">שדה חובה</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={{
                  boxShadow: [
                    '0 0 15px rgba(212, 175, 55, 0.2)',
                    '0 0 35px rgba(212, 175, 55, 0.5)',
                    '0 0 15px rgba(212, 175, 55, 0.2)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-full bg-gold-gradient text-bg-primary font-bold text-xl py-5 rounded-lg"
              >
                אני רוצה להיות המסמר בחדר ↓
              </motion.button>

              <p className="text-center text-text-muted text-xs mt-3">
                המחיר הזה בתוקף למחזור הנוכחי בלבד.
              </p>
            </form>
          )}
        </motion.div>

        {/* Sign-off */}
        <motion.p
          variants={fadeUp}
          {...scrollReveal}
          className="text-center text-[#737373] text-sm mt-10"
        >
          שלכם, יאיר זאורוב
        </motion.p>
      </div>
    </section>
  );
}
