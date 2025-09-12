import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
//import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v1';
//import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
//import { StatisticsSection } from '@/src/sections/statistics/v1';
//import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'INVIRTU | A propos',
  description: 'INVIRTU - IT Solutions et Services',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <HeroSection
        title="A propos de nous"
        breadcrumbItems={[
          {
            label: 'Accueil',
            href: '/',
          },
          {
            label: 'A propos',
          },
        ]}
      />
      <AboutSection />
      {/*<CtaSection />*/}
      {/*<TestimonialSection />*/}
      {/*<StatisticsSection />*/}
      {/*<AboutSectionTwo />*/}
      <WorkprocessSection />
      <Footer />
    </>
  );
}
