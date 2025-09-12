import { serviceSectionData } from '@/data/service-section/v1/home-page';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
import { BlogSection } from '@/src/sections/blog/v1';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v1';
import { ProjectSection } from '@/src/sections/project/v1';
import { projectSectionData } from '@/data/project-section/v1/home-page';
//import { PricingSection } from '@/src/sections/pricing/version-2';
import { ServiceSection } from '@/src/sections/service/v1';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v1';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
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
      <HeroSection />
      <ServiceSection className="!pt-0" {...serviceSectionData} />
      <CtaSection />
      <PricingSection />
      <AboutSection />
      <WorkprocessSection />
      <ProjectSection {...projectSectionData} />
      <TeamSection />
      <TestimonialSection />
      <StatisticsSection />
      <BlogSection />
      <Footer className="dark:bg-accent-900" footerTopClassName="dark:!pt-0" />
    </>
  );
}
