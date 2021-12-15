import flagUs from "./resources/img/Header/us.png";
import flagEs from "./resources/img/Header/es.png";
import sapImg from "./resources/img/Header/sap.png";
import circle1 from "./resources/img/Interior/circles/1.jpg";
import circle2 from "./resources/img/Interior/circles/2.jpg";
import circle3 from "./resources/img/Interior/circles/3.jpg";
import person from "./resources/img/Interior/foto-circular-1.png";
import person2 from "./resources/img/Interior/foto-circular-2.png";
import person3 from "./resources/img/Interior/foto-circular-3.png";
import partner from "./resources/img/Interior/logo-edu-partner.png";
import logoAccenture from "./resources/img/Interior/logo-accenture.png";
import logoEveris from "./resources/img/Interior/logo-everis.png";
import logoJohnDeere from "./resources/img/Interior/logo-john-deere.png";
import logoSap from "./resources/img/Interior/logo-SAP.png";
import photoCita from "./resources/img/Interior/foto-cita.png";
import photoCita2 from "./resources/img/Interior/foto-cita2.png";
import arg from "./resources/img/Ubicacion/argentina.png";
import usa from "./resources/img/Ubicacion/usa.png";
import chl from "./resources/img/Ubicacion/chile.png";

const texts = {
  en: {
    header: {
      serv: "Services",
      cont: "Contact us",
      meet: "New meeting",
      flag: flagEs,
    },
    head: {
      title: "Increase the size of your SAP team with our service in no time.",
      subtitle:
        "We help you build SAP teams with HIGH LEVELS of specialization in an efficient way.",
      img: sapImg,
      button: "Lorem ipsu",
      form: {
        title: "Book your meeting",
        label1: "Name and surname",
        label2: "Email",
        label3: "Telephone number",
        label4: "Area / Company name",
        label5: "Message",
        button: "SEND",
      },
    },
    sect1: {
      title: "We have a in-depth knowledge of the different SAP Solutions",
      circles: [
        {
          img: circle1,
          title: "Functional Team",
          content:(
            <span>
            S/4HANA<br></br>
            ERP 6.0<br></br>
            HYBRIS<br></br>
            CRM<br></br>
            Success Factors<br></br>
            ARIBA<br></br>
            </span>
          ),
        },
        {
          img: circle2,
          title: "Technical SAP BTP Team",
          content:(
            <span>
            Fiori Cloud<br></br>
            Portal<br></br>
            Mobile Services<br></br>
            iRPA<br></br>
            Analytics Cloud<br></br>
            </span>
          ),
        },
        {
          img: circle3,
          title: "Technical SAP Netweaver Team",
          content:(
            <span>
            ABAP<br></br>
            Fiori<br></br>
            </span>
          ),
        },
      ],
    },
    sect1add: {
      title: "The simplicity of our process makes this a unique experience for our clients.",
      content: [
        {
          title: "ASK",
          text: "Ask our Service Manager for the Talent your team needs.",
        },
        {
          title: "SELECT",
          text: "Meet our talents and choose the most suitable to join your Team.",
        },
        {
          title: "START",
          text: "Onboard the Talent you chose into your Team.",
        },
        {
          title: "SUPPORT",
          text: "Receive all the support you need to manage your Talent’s performance as a member of your team and as a part of your project.",
        },
      ],
    },
    sect2: {
      title:
        "The SAP training is a strategic partner of our Talents",
      img: partner,
      subtitle:
        "As a SAP Education Partner we believe that training is key to the Talent’s full development.",
    },
    sect3: {
      title: "PAMPA Talents",
      people: [
        {
          img: person,
          title: "Silvia Mataloni",
          content: "Project Manager at Pampa BI",
          content2: (
            <span>
              Senior Analyst/Project manager, certified Scrum Master and Product Owner with more than 5 years' experience.<br></br>
              Speciality: project management, QA, Change management, Incident Management, Configuration Management, Agile methodologies, Service delivery. 
            </span>
          ),
          url: "https://bit.ly/3saF3Ev",
          content3: "Linkedin",
        },
        {
          img: person2,
          title: "Mariano Chiappe",
          content: "Certified SAP S/4 HANA PM/PP consultant",
          content2: (
            <span>
              3 years experience in industrial maintenance and automation. Knowledge of TPM and RCM methodologies, ISO 14224. As a SAP consultant I have worked in mass consumer products, mining, fishing and oil industries.  
            </span>
          ),
          url: "https://bit.ly/3lGjs4w",
          content3: "Linkedin",
        },
        {
          img: person3,
          title: "Yumarli Romero Romero",
          content: "SAP Certified Application Associate / consultant.",
          content2:
            "SAP S / 4HANA for financial accounting associates. Certified SAP FI, SAP BCS and ITIL professional with vast experience in financial consultancy; analysis, diagnostics, configuration, testing and FICO module start-up. Costs and finance in SAP.",
          url: "https://bit.ly/3d2eyLg",
          content3: "Linkedin",
        },
      ],
    },
    sect4: {
      title: "Clients",
      logos: [logoAccenture, logoEveris, logoJohnDeere, logoSap],
    },
    sect5: {
      title: "Our experience defines us",
      button: "Contact a consultant",
      content: [
        {
          num: 300,
          text: "SAP consultants in our network",
        },
        {
          num: 10,
          text: "Years of permanence in the SAP ecosystem",
        },
        {
          num: 100,
          text: "SAP Projects",
        },
      ],
    },
    sect6: {
      title: "Some details of our service",
      faqs: [
        {
          faq: "Which specialized consultants do you offer?",
          ans: (
            <span>
              Nowadays we offer software engineers in the following areas of expertise:<br></br>
              <br></br>● SAP ERP 6.0 & S/4Hana Consultants<br></br>● SAP Hybris / CRM Consultants<br></br>● SAP ARIBA / SRM Consultants <br></br>●
              SAP Success Factors Consultants <br></br>● ABAP Developers
              <br></br>● Fiori Developers<br></br>● Mobile Services SAP UI5/MDK Developers<br></br>● Project managers
            </span>
          ),
        },
        {
          faq: "Do your engineers speak English well?",
          ans: "All our engineers have an excellent command of English and are certified between B2 and C2 within the European Framework of Reference for Languages. We believe successful projects demand effective communication and active collaboration. We only employ those who have soft and linguistic skills, which are necessary to communicate with their team and the team leaders in an effective way. Language helps us create, feel empathy and relate with each other. We bring people who make sense inside your team, not outside it. ",
        },
        {
          faq: "Can consultants work in my time zone?",
          ans: "Yes! All our engineers will work in your time zone. As we only find talents in locations near the coast, our engineers will mitigate any time difference by adjusting their personal timetable one or two hours.",
        },
        {
          faq: "How long is the “Hiring Cycle”?",
          ans: "The Talent you chose can join your team in approximately 10 days.",
        },
      ],
    },
    sect7: {
      title: "Boost your team",
      citas: [
        {
          name: "lorem ipsum",
          declaration:
            "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati",
          photo: photoCita,
        },
        {
          name: "lorem ipsum",
          declaration:
            "Lorem ipsum dolor sit amet asdsadasd asd asd Lorem ipsum dolor sit amet ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati",
          photo: photoCita2,
        },
      ],
    },
    sect8: {
      title: "Boost your team",
      content: "Highly qualified SAP experts from Latam.",
      form: {
        title: "Contact us",
        label1: "Name and surname",
        label2: "Email",
        label3: "Telephone number",
        label4: "Message",
        button: "SEND",
      },
    },
    sect9: {
      title: "Offices",
    },
    footer: {
      email: "info@pampabi.com",
      twitter: "https://twitter.com/PampaBI",
      facebook: "https://www.facebook.com/Pampabi",
      instagram: "https://www.instagram.com/pampabusinessideas/",
      linkedin: "https://www.linkedin.com/company/pampabi/",
    },
    map: [
      {
        country: "Argentina",
        adress: "Lamadrid 470, Rosario, Santa Fe, Argentina",
        phones: ["+54 341 5279490", "+54 341 435 3529"],
        flag: arg,
      },
      {
        country: "USA",
        adress: "1227 Fairlake Trace, Weston, FL 3326",
        phones: ["+1 (305) 775 7173"],
        flag: usa,
      },
      {
        country: "Chile",
        adress: "San Sebastián 2812 Of. 809, Las Condes, Santiago, Chile",
        phones: ["+56 22 233 2227", "+56 23 206 1327"],
        flag: chl,
      },
    ],
  },
  es: {
    header: {
      serv: "Servicios",
      cont: "Contacto",
      meet: "Nueva reunión",
      flag: flagUs,
    },
    head: {
      title:
        "Aumente rápidamente el tamaño de su equipo SAP con nuestro servicio",
      subtitle:
        "Ayudamos a construir, de manera ágil, equipos con ALTOS NIVELES de especialización SAP",
      img: sapImg,
      form: {
        title: "Agende su reunión",
        label1: "Nombre y Apellido",
        label2: "Correo electronico",
        label3: "Número de contacto",
        label4: "Rubro/Empresa",
        label5: "Mensaje",
        button: "Enviar",
      },
    },
    sect1: {
      title:
        "Tenemos un profundo conocimiento en diferentes Áreas de Tecnologías SAP",
      circles: [
        {
          img: circle1,
          title: "Functional Team",
          content: (
            <span>
              S/4HANA<br></br>ERP 6.0<br></br>HYBRIS<br></br>CRM<br></br>Success
              Factors<br></br>ARIBA
            </span>
          ),
        },
        {
          img: circle2,
          title: "Technical SAP BTP Team",
          content: (
            <span>
              Fiori Cloud<br></br>Portal<br></br>Mobile Services<br></br>iRPA
              <br></br>Analytics Cloud
            </span>
          ),
        },
        {
          img: circle3,
          title: "Technical SAP Netweaver Team",
          content: (
            <span>
              ABAP<br></br>Fiori
            </span>
          ),
        },
      ],
    },
    sect1add: {
      title:
        "La simplicidad de nuestro proceso hace única la experiencia de nuestros clientes",
      content: [
        {
          title: "ASK",
          text: "Solicite a nuestro Service Manager el Talento que necesita para su Equipo.",
        },
        {
          title: "SELECT",
          text: "Conozca a los Talentos candidatos y seleccione al mas adecuado para integrar a su Equipo.",
        },
        {
          title: "START",
          text: "Incorpore e Integre el Talento seleccionado a su Equipo.",
        },
        {
          title: "SUPPORT",
          text: "Reciba el acompañamiento para realizar la gestión del desempeño del talento en su proyecto y dentro de su Equipo.",
        },
      ],
    },
    sect2: {
      title:
        "El Entrenamiento SAP es un aliado estratégico de nuestros Talentos",
      img: partner,
      subtitle:
        "Como SAP Education Partner, creemos que la formación es un elemento clave en el desarrollo del Talento.",
    },
    sect3: {
      title: "Talentos de PAMPA",
      people: [
        {
          img: person,
          title: "Silvia Mataloni",
          content: "Project Manager at Pampa BI",
          content2: (
            <span>
              Analista senior de gestión de proyectos y Scrum Master certificado
              y Product Owner con más de 5 años de experiencia.<br></br>
              Especialidad: Gestión de proyectos, QA, Gestión de cambios,
              Gestión de incidentes, Gestión de configuraciones, Metodologías
              ágiles, Entrega de servicios.
            </span>
          ),
          url: "https://bit.ly/3saF3Ev",
          content3: "Linkedin",
        },
        {
          img: person2,
          title: "Mariano Chiappe",
          content: "Consultor certificado SAP S/4 HANA PM/PP",
          content2: (
            <span>
              3 Años de experiencia en automatización y mantenimiento
              industrial. Conocimientos en metodologías TPM y RCM, Norma ISO
              14224. Como consultor de SAP me he desempeñado en las industrias
              de consumo masivo, minera, pesquera y petrolera.
            </span>
          ),
          url: "https://bit.ly/3lGjs4w",
          content3: "Linkedin",
        },
        {
          img: person3,
          title: "Yumarli Romero Romero",
          content: "Asociado de aplicación certificado como consultor",
          content2:
            "SAP S / 4HANA para asociados de contabilidad financiera. Profesional certificada en SAP FI, SAP BCS e ITIL, experiencia en consultoría financiera; análisis, diagnósticos, configuración, pruebas y puesta en marcha del módulo FICO – Finanzas y Costos en SAP.",
          url: "https://bit.ly/3d2eyLg",
          content3: "Linkedin",
        },
      ],
    },
    sect4: {
      title: "Clientes",
      logos: [logoAccenture, logoEveris, logoJohnDeere, logoSap],
    },
    sect5: {
      title: "Nuestra Experiencia nos define",
      button: "Comunicate con un asesor",
      content: [
        {
          num: 300,
          text: "Consultores SAP en nuestra network",
        },
        {
          num: 10,
          text: "Años de permanencia en el ecosistema SAP",
        },
        {
          num: 100,
          text: "Proyectos SAP",
        },
      ],
    },
    sect6: {
      title: "Algunos detalles del Servicio",
      faqs: [
        {
          faq: "¿Qué consultores especializados proporcionan?",
          ans: (
            <span>
              Actualmente ofrecemos las siguientes especialidades de ingenieros
              de software:<br></br>
              <br></br>● Consultores SAP ERP 6.0 & S/4Hana<br></br>● Consultores
              SAP Hybris / CRM<br></br>● Consultores SAP ARIBA / SRM <br></br>●
              Consultores SAP Success Factors <br></br>● Desarrolladores ABAP
              <br></br>● Desarrolladores Fiori<br></br>● Desarrolladores Mobile
              Servicies SAP UI5/MDK<br></br>● Gerentes de proyectos
            </span>
          ),
        },
        {
          faq: "¿Sus ingenieros dominan el inglés?",
          ans: "Todos nuestros ingenieros dominan el inglés y están clasificados de B2 a C2 en el Marco Común Europeo de Referencia de Idiomas . Creemos que los proyectos exitosos requieren una intensa colaboración y comunicación. Solo buscamos personas que tengan las habilidades blandas y las capacidades lingüísticas para comunicarse con su equipo y los líderes de su equipo de manera efectiva. El lenguaje nos ayuda a crear, sentir empatía y relacionarnos. Te traemos personas que tienen sentido en tu equipo, no fuera de él.",
        },
        {
          faq: "¿Pueden trabajar sus consultores en mi zona horaria?",
          ans: "¡Sí! Todos nuestros ingenieros trabajarán dentro de su zona horaria. Dado que solo obtenemos talento de ubicaciones cercanas a la costa, nuestros ingenieros mitigarán cualquier diferencia de zona horaria ajustando sus horarios personales en una o dos horas.",
        },
        {
          faq: "¿Cuánto Tiempo tarda el “Ciclo de Contratación?",
          ans: "Podemos concretar la incorporación a su Equipo del Talento requerido en 10 días aproximadamente.",
        },
      ],
    },
    sect7: {
      title: "Forem ipsum",
      citas: [
        {
          name: "Forem ipsum",
          declaration:
            "Forem ipsum dolor sit amet Forem ipsum dolor sit amet ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati",
          photo: photoCita,
        },
        {
          name: "Forem ipsum",
          declaration:
            "Forem ipsum dolor sit amet asdsadasd asd asd Forem ipsum dolor sit amet ididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati",
          photo: photoCita2,
        },
      ],
    },
    sect8: {
      title: "Enriquece tu equipo",
      content: "Expertos SAP altamente calificados de América Latina.",
      form: {
        title: "Contáctenos",
        label1: "Nombre y Apellido",
        label2: "Correo electronico",
        label3: "Número de contacto",
        label4: "Mensaje",
        button: "Enviar",
      },
    },
    sect9: {
      title: "Oficinas",
    },
    footer: {
      email: "info@pampabi.com",
      twitter: "https://twitter.com/PampaBI",
      facebook: "https://www.facebook.com/Pampabi",
      instagram: "https://www.instagram.com/pampabusinessideas/",
      linkedin: "https://www.linkedin.com/company/pampabi/",
    },
    map: [
      {
        country: "Argentina",
        adress: "Lamadrid 470, Rosario, Santa Fe, Argentina",
        phones: ["+54 341 5279490", "+54 341 435 3529"],
        flag: arg,
      },
      {
        country: "USA",
        adress: "1227 Fairlake Trace, Weston, FL 3326",
        phones: ["+1 (305) 775 7173"],
        flag: usa,
      },
      {
        country: "Chile",
        adress: "San Sebastián 2812 Of. 809, Las Condes, Santiago, Chile",
        phones: ["+56 22 233 2227", "+56 23 206 1327"],
        flag: chl,
      },
    ],
  },
};
export default texts;
