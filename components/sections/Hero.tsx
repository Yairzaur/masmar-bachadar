'use client';

import { motion } from 'framer-motion';
import { fadeUp, scaleUp } from '@/lib/animations';
import CTAButton from '@/components/ui/CTAButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg-primary px-5 py-24">
      {/* Subtle gold ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full text-center mx-auto">
        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-text-muted text-sm tracking-widest uppercase mb-6 font-medium"
        >
          רוב מה שלימדו אותך על קסמים — שגוי מיסודו.
        </motion.p>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="gold-line w-16 mx-auto mb-8"
        />

        {/* Welcome */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="text-[#a3a3a3] text-base mb-10"
        >
          שמי יאיר זאורוב. ואני הולך לשבור כמה כללים.
        </motion.p>

        {/* Headline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="mb-6 space-y-3"
        >
          <p className="text-[#a3a3a3] text-lg md:text-xl leading-relaxed">
            הייתי הילד שלא שמו לב אליו בחדר.
          </p>
          <p className="text-[#737373] text-base md:text-lg">
            לא אנטי-חברתי. לא ביישן.{' '}
            <span className="text-[#a3a3a3]">פשוט — שקוף.</span>
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.65 }}
          className="mb-6 space-y-3"
        >
          <p className="text-white text-lg md:text-xl leading-relaxed">
            היום אני נכנס לכל מקום
          </p>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            ואנשים מרגישים את זה לפני שפתחתי פה.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mb-10 space-y-2"
        >
          <p className="text-[#a3a3a3] text-base md:text-lg">
            לא בגלל כישרון מולד.
          </p>
          <p className="text-[#a3a3a3] text-base md:text-lg">
            בגלל דבר אחד ספציפי שלמדתי —
          </p>
          <p className="text-[#a3a3a3] text-base md:text-lg">
            ושכמעט אף אחד לא מוכן ללמד אותו.
          </p>
        </motion.div>

        {/* Product Name */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-none">
            המסמר{' '}
            <span className="text-gold">שבחדר</span>
          </h1>
          <p className="mt-3 text-[#737373] text-sm tracking-wider">
            האקדמיה למנטליזם של יאיר זאורוב
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.1 }}
        >
          <CTAButton />
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.25 }}
          className="mt-12 flex justify-center gap-8 md:gap-12 text-center"
        >
          {[
            { value: '100+', label: 'שיעורים' },
            { value: '500+', label: 'תלמידים' },
            { value: '5', label: 'מודולים' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-gold">{stat.value}</div>
              <div className="text-xs text-[#737373] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
    </section>
  );
}
