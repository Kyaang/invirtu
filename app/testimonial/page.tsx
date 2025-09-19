import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
//import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { TestimonialSection } from '@/src/sections/testimonial/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'INVIRTU | Nos témoignages',
  description: 'INVIRTU - IT Solutions et Services',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="Les témoignages"
        breadcrumbItems={[
          {
            label: 'Accueil',
            href: '/',
          },
          {
            label: 'Témoignages',
          },
        ]}
      />
      <TestimonialSection />
      {/*<CtaSection className="section-padding-primary !pt-0" />*/}
      <Footer />
    </>
  );
}
