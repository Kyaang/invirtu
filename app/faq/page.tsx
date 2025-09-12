import { Footer } from '@/src/layout/footer/v2';
import { MainHeader } from '@/src/layout/header';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v3';
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
        title="Faq"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Faq',
          },
        ]}
      />
      <FAQSection />
      <Footer />
    </>
  );
}
