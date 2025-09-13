import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaLinkedinIn /*FaFacebookF, FaTwitter, FaInstagram*/ } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Des solutions IT & une expertise technique qui s’adaptent à vous !',
    socialLinks: [
      {
      icon: <FaLinkedinIn />,
      href: 'https://www.linkedin.com/company/invirtu',
      },
/*    {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/',
      },*/
    ],
  },
  columnOne: {
    title: "Nos pôles d'expertises",
    links: [
      {
        label: 'Virtualisation',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Stockage',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Sauvegarde',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'MCO & Infogérance',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Cloud privé',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Distribution',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Contactez-nous',
    location: 'Toulouse, France',
    mails: ['contact@invirtu.fr'],
    phoneNumbers: ['06 72 21 03 61','06 08 86 96 56'],
  },
  columnThree: {
   title: 'Nos réalisations',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'A venir',
        date: '',
        slug: '', //./blog-details
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'A venir',
        date: '',
        slug: '', //./blog-details
      },
    ],
  },
  footerBottom: {
    copyrightText: '© INVIRTU  2025 | All Rights Reserved',
    links: [
      {
        label: 'Nos CGV',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contactez-nous',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
