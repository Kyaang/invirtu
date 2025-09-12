import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Nos Expertises',
    title: 'Nos solutions IT pour entreprises',
  },
  isWave: true,
  works: [
    {
      slug: '', ///project/single
      image: {
        src: '/assets/images/project/expertise1.png',
        alt: 'portfolio-1',
      },
      title: 'Virtualisation',
      description: "Accompagnement, optimisation ou mise en place d’environnements virtualisés avec Hyper-V, VMware ou d’autres technologies en fonction de vos contraintes et objectifs. Nous vous aidons à tirer le meilleur de vos infrastructures, en garantissant flexibilité, performance et évolutivité. Chaque projet bénéficie d’un service personnalisé incluant conseil, intégration et maintien de vos environnements pour répondre à vos enjeux spécifiques.",
    },
    {
      slug: '/',
      image: {
        src: '/assets/images/project/expertise2.png',
        alt: 'portfolio-1',
      },
      title: 'Stockage',
      description: 'Sécurisation et optimisation de vos solutions de stockage, qu’il s’agisse de SAN, NAS, solutions hyperconvergées ou autres architectures. Nous accompagnons chaque client avec des solutions sur-mesure et en phase avec son environnement, tout en assurant fiabilité, performance et suivi individualisé de vos infrastructures.',
    },
    {
      slug: '/',
      image: {
        src: '/assets/images/project/expertise3.png',
        alt: 'portfolio-1',
      },
      title: 'Sauvegarde',
      description: 'Mise en place de solutions de sauvegarde adaptées à vos environnements et à vos exigences. Nous vous conseillons et vous accompagnons pour protéger vos données critiques, avec un suivi personnalisé et une assistance flexible, pensée pour votre infrastructure et vos priorités.',
    },
    {
      slug: '/',
      image: {
        src: '/assets/images/project/expertise4.png',
        alt: 'portfolio-1',
      },
      title: 'Distribution',
      description: 'Nous mettons à votre disposition une large gamme de matériel et logiciels IT : licences neuves ou reconditionnées, serveurs, baies, postes de travail, PC reconditionnés, et bien plus encore. Nous sommes réactifs et attachés à vous proposer les tarifs les plus attractifs, tout en vous guidant vers des solutions adaptées à vos besoins.',
    },
  ],
};
