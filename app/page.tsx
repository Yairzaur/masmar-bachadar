import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Pain from '@/components/sections/Pain';
import TurningPoint from '@/components/sections/TurningPoint';
import Authority from '@/components/sections/Authority';
import Solution from '@/components/sections/Solution';
import Bonuses from '@/components/sections/Bonuses';
import Testimonials from '@/components/sections/Testimonials';
import UrgencyQuote from '@/components/sections/UrgencyQuote';
import WhyStory from '@/components/sections/WhyStory';
import CTAForm from '@/components/sections/CTAForm';

export default function Page() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pain />
      <TurningPoint />
      <Authority />
      <Solution />
      <Bonuses />
      <Testimonials />
      <UrgencyQuote />
      <WhyStory />
      <CTAForm />
    </main>
  );
}
