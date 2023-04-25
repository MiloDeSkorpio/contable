// import images
import LogoImg from '../src/assets/img/header/logo-decofis.png';
import HeroImg from '../src/assets/img/hero/image.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import AvatarImg1 from '../src/assets/img/testimonial/avatar1.png';
import AvatarImg2 from '../src/assets/img/testimonial/avatar2.png';
import AvatarImg3 from '../src/assets/img/testimonial/avatar3.png';
import AvatarImg4 from '../src/assets/img/testimonial/avatar4.png';
import AvatarImg5 from '../src/assets/img/testimonial/avatar5.png';
import CtaImg1 from '../src/assets/img/cta/image1.svg';
import CtaImg2 from '../src/assets/img/cta/image2.svg';
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import TwitterIcon from '../src/assets/img/copyright/twitter.svg';
import LinkedinIcon from '../src/assets/img/copyright/linkedin.svg';

export const header = {
  logo: LogoImg,
  btnText: 'Contáctanos',
};

export const nav = [
  { name: 'Features', href: '/' },
  { name: 'About us', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Feedback', href: '/' },
];

export const hero = {
  title: '¿Quienes Somos?',
  subtitle: 'Somos una firma que se está abriendo camino a nivel nacional e internacional y se esta posicionando como una de las mejores brindando un servicio profesional y de vanguardia',
  btnText: 'Ver más',
  compText: '— Misión, Visión y  Catalogo de Servicios',
  image: HeroImg,
};

export const features = {
  feature1: {
    pretitle: 'Las Mejores Soluciones',
    title: 'Misión',
    subtitle:
      'Tener las mejores soluciones de nuestros clientes completamente satisfechos, dando prioridad a la confianza mutua, para que su situacion financiera este transparente, para el beneficio del usuario',
    btnLink: 'Visión',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Confiabilidad',
    title: 'Vision',
    subtitle:
      'Liderar como una de las firmas más confiables a nivel nacional e internacional, llevando de la mano a nuestros clientes con nuestros servicios, que lleguen al nivel que desean',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Servicios',
    title: 'Catalogo de Servicios',
    subtitle:
      'Contamos con un amplio catalogo de servicios',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Contable y Fiscal',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      title: 'Cumplimiento de obligaciones fiscales',
      delay: 100
    },
    {
      title: 'Regularización de ejercicios de años anteriores',
      delay: 200
    },
    {
      title: 'Facturación Electronica',
      delay: 300
    },
    {
      title: 'Emisión de Estados Financieros',
      delay: 400
    },
    {
      title: 'Diagnósticos Fiscales',
      delay: 500
    },
    {
      title: 'Control de Presupuestos',
      delay: 500
    },
    {
      title: 'Inventarios',
      delay: 400
    },
    {
      title: 'Devoluciones y Seguimiento',
      delay: 300
    },
    {
      title: 'Estrategias Fiscales',
      delay: 200
    },
    {
      title: 'Análisis de Riesgos',
      delay: 100
    },
  ],
};

export const pricing = {
  title: 'Laboral y Administrativo',
  cards: [
    {
      title: 'Formalización de Nominas',
      delay: 100
    },
    {
      title: 'Altas Bajas IMMS',
      delay: 200
    },
    {
      title: 'Esquemas de remuneraciones',
      delay: 300
    },
    {
      title: 'Formalización de Declaraciones IMMS,ICSOE, y SISUB',
      delay: 400
    },
    {
      title: 'Formalización de contratos laborales y sus prórogas',
      delay: 500
    },
    {
      title: 'Representante de Administración',
      delay: 600
    },
    {
      title: 'Tramite y seguimiento para REPSE',
      delay: 700
    }
  ],
};

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/' },
    { name: 'Careers', href: '/' },
    { name: 'Pricing', href: '/' },
    { name: 'Features', href: '/' },
    { name: 'Blog', href: '/' },
  ],
  legal: [
    { name: 'Terms of use', href: '/' },
    { name: 'Terms of conditions', href: '/' },
    { name: 'Privacy policy', href: '/' },
    { name: 'Cookie policy', href: '/' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy & Terms',
    href: '/',
  },
  link2: {
    name: 'Contact us',
    href: '/',
  },
  copyText: 'Copyright @ 2023 Decofis',
  social: [
    { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100064041577037' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
