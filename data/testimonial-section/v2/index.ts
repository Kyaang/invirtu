import { TestimonialSectionProps } from '@/src/sections/testimonial/v2';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Témoignages',
    title: 'Ce que disent nos clients',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/ch-cahors.jpg',
          alt: 'CH CAHORS',
        },
        name: 'Cédric Lafon & Driss Makhout',
        about: 'Ingénieurs infrastructures & réseaux - CH CAHORS',
      },
      speech:
        'En tant qu’hôpital support du GHT du Lot, nous avons fait confiance à INVIRTU pour renforcer notre infrastructure. Nous bénéficions aujourd’hui d’un cluster VxRail fiable, de sauvegardes immuables Veeam sur DataDomain, et surtout d’un accompagnement marqué par l’expertise, réactivité et le professionnalisme de leur équipe. Une architecture robuste et sécurisée, parfaitement alignée avec les exigences de notre hôpital et de l’ensemble du GHT.',
      rating: 5,
    },
  ],
};
