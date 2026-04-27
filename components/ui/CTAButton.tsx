'use client';

import { motion } from 'framer-motion';

interface Props {
  text?: string;
  href?: string;
  className?: string;
}

export default function CTAButton({
  text = 'אני רוצה להיות המסמר בחדר ↓',
  href = '#form',
  className = '',
}: Props) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        boxShadow: [
          '0 0 15px rgba(212, 175, 55, 0.2)',
          '0 0 30px rgba(212, 175, 55, 0.45)',
          '0 0 15px rgba(212, 175, 55, 0.2)',
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block w-full md:w-auto bg-gold-gradient text-bg-primary font-bold text-lg md:text-xl px-10 py-5 rounded-lg cursor-pointer text-center ${className}`}
    >
      {text}
    </motion.a>
  );
}
