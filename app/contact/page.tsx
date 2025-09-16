import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { ContactSection } from '@/src/sections/contact/v1';
import { HeroSection } from '@/src/sections/hero/v3';
//import { MapSection } from '@/src/sections/map-section';
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
        title="Contactez-nous"
        breadcrumbItems={[
          {
            label: 'Accueil',
            href: '/',
          },
          {
            label: 'Contactez-nous',
          },
        ]}
      />
      <ContactSection />
      {/* <MapSection />*/}
      <Footer />
    </>
  );
}
