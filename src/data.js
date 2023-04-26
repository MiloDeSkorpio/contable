// import images
import LogoImg from '../src/assets/img/header/logo-decofis.png';
import HeroImg from '../src/assets/img/hero/image.svg';
import Feature1Img from '../src/assets/img/features/feature1-img.svg';
import Feature2Img from '../src/assets/img/features/feature2-img.svg';
import Feature3Img from '../src/assets/img/features/feature3-img.svg';
import ArrowRightImg from '../src/assets/img/features/arrow-right.svg';
import LaboralImg from '../src/assets/img/pricing/work.svg'
import FacebookIcon from '../src/assets/img/copyright/facebook.svg';
import WhatsAppIcon from '../src/assets/img/copyright/whatsapp.svg';
import ContactImg from '../src/assets/img/form/contact.svg';
import ContableImg from '../src/assets/img/product/contable.svg'

export const header = {
  logo: LogoImg,
  btnText: 'Contáctanos',
};

export const nav = [
  { name: 'Misión', href: '#mision' },
  { name: 'Visión', href: '#vision' },
  { name: 'Servicios', href: '#servicios' },
  
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
    btnLink: 'Servicios',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Servicios',
    title: 'Catalogo de Servicios',
    subtitle:
      'Contamos con un amplio catalogo de servicios',
    btnLink1: 'Contable y Fiscal',
    btnLink2: 'Laboral y Administrativo',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'Contable y Fiscal',
  img: ContableImg,
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
  img: LaboralImg,
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

export const footer = {
  logo: LogoImg,
  form: {
    ph1: 'Pedro López',
    ph2: 'pedro.lopez@correo.es',
    ph3: 'Cotizacion',
    ph4: 'Requiero informes sobre...',
    btnText: 'Enviar',
    smallText: 'Recuerda revisar tus datos!',
    logo: ContactImg
  },
};

export const copyright = {
  link: {
    name: 'Contáctanos',
    href: '#contacto',
  },
  copyText: 'Copyright @ 2023 Decofis',
  social: [
    { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100064041577037' },
    { icon: WhatsAppIcon, href: 'https://wa.me/qr/TIL6M66BGOQ5H1' }
  ],
};
