// ===========================================
// CONTENIDO CENTRALIZADO - PORTFOLIO NADIA
// Edita este archivo para cambiar textos
// ===========================================

export const SITE_CONFIG = {
  name: "Nadia Diéguez",
  tagline: "Maquilladora y Caracterizadora Profesional",
  email: "Nadiadieguez2@gmail.com",
  phone: "722 61 13 75",
  instagram: "@nadiadieguezmakeup",
  instagramUrl: "https://instagram.com/nadiadieguezmakeup",
  location: "Madrid",
  experience: "+2 Años",
  favicon: "/logoNadia.png",
}

export const DICTIONARY = {
  es: {
    nav: [
      { href: "#portfolio", label: "Portfolio" },
      { href: "#about", label: "Sobre mí" },
      { href: "#services", label: "Servicios" },
      { href: "#contact", label: "Contacto" },
    ],
    hero: {
      subtitle: "Maquilladora Profesional",
      title: {
        line1: "Donde la Belleza",
        line2: "se une al",
        emphasis: "Arte",
      },
      description:
        "Creando looks atemporales y etéreos que realzan tu belleza natural. Especializada en Novias, Moda y Caracterización para Cine y Teatro.",
      cta: {
        primary: "Reserva tu Sesión",
        secondary: "Ver Portfolio",
      },
      badge: {
        label: "Experiencia",
        value: "+5 Años",
      },
    },
    about: {
      sectionLabel: "Sobre mí",
      whoIAm: {
        title: "Quién Soy",
        description:
          "Soy maquilladora y caracterizadora profesional, especializada en maquillaje y peinado para novias, invitadas y diversos tipos de eventos, incluyendo producciones de moda y pasarelas. Cuento con amplia experiencia en maquillaje para proyectos audiovisuales como cortometrajes y películas.",
      },
      myTraining: {
        title: "Mi Formación",
        description:
          "Estudiante de Maquillaje y Caracterización en el CIFP Barrio de Bilbao (2024-2025). Formación previa en maquillaje para teatro en la Escuela de teatro Janna (2023-2024).",
      },
      myPurpose: {
        title: "Mi Propósito",
        description:
          "Ofrecer un servicio integral y profesional que combine la técnica editorial con la caracterización, adaptándome a las necesidades de cada cliente, ya sea en eventos sociales, producciones de cine o teatro.",
      },
      badges: ["Maquillaje Social", "Caracterización", "Moda y Pasarela", "Cine y TV"],
    },
    credentials: [
      {
        title: "Maquillaje y Caracterización",
        subtitle: "CIFP Barrio de Bilbao",
        year: "2024 - 2025",
        icon: "graduation",
      },
      {
        title: "Maquillaje para Teatro",
        subtitle: "Escuela de teatro Janna",
        year: "2023 - 2024",
        icon: "palette",
      },
    ],
    portfolio: {
      sectionLabel: "Portfolio",
      title: "Una Colección Curada",
      description:
        "Del realce de la belleza natural en eventos sociales a la transformación técnica para el cine y el teatro. Cada trabajo refleja una dedicación absoluta al detalle y una narrativa visual única.",
    },
    portfolioSections: [
      {
        title: "Maquillaje Social",
        description: "Realzando tu belleza para eventos inolvidables.",
        projects: [
          { src: "/images/foto_proyecto_social1.jpeg", alt: "Maquillaje nupcial romántico", title: "Novia Romántica" },
          { src: "/images/foto_proyecto_social2.jpeg", alt: "Maquillaje glamour de noche", title: "Maquillaje de Teatro" },
          { src: "/images/foto_proyecto_social3.jpeg", alt: "Maquillaje corporativo elegante", title: "Invitada de Boda" },
        ],
      },
      {
        title: "Maquillaje de Fantasía",
        description: "Creatividad sin límites para transformaciones mágicas.",
        projects: [
          { src: "/images/foto_proyecto_fantasia1.jpeg", alt: "Maquillaje artístico de labios", title: "Maquillaje de Halloween" },
          { src: "/images/foto_proyecto_fantasia2.jpeg", alt: "Maquillaje editorial con ojos ahumados", title: "Estilo Congelado" },
          { src: "/images/foto_proyecto_fantasia3.jpeg", alt: "Maquillaje natural y fresco", title: "Maquillaje de Teatro" },
        ],
      },
      {
        title: "Maquillaje FX",
        description: "Efectos especiales que cobran vida.",
        projects: [
          { src: "/images/foto_proyecto_fx1.jpeg", alt: "Efectos especiales herida", title: "Herida Realista" },
          { src: "/images/foto_proyecto_fx2.jpeg", alt: "Caracterización envejecimiento", title: "Herida Realista" },
          { src: "/images/foto_proyecto_fx3.jpeg", alt: "Caracterización zombie", title: "Envejecimiento" },
        ],
      },
    ],
    services: {
      sectionLabel: "Servicios",
      title: "Tarifas y Servicios",
      description: "Cada servicio incluye consulta previa y productos de alta gama para garantizar resultados excepcionales.",
    },
    pricing: [
      { service: "Maquillaje para Teatro", description: "Caracterización y puesta en escena", price: "50€ - 200€", includes: ["Caracterización", "Pruebas de luz", "Durabilidad extrema"], icon: "users" },
      { service: "Maquillaje para Cine", description: "Producciones audiovisuales", price: "50€ - 200€", includes: ["Continuidad (Raccord)", "Efectos especiales", "Monitorización en set"], icon: "camera" },
      { service: "Maquillaje para Boda", description: "Novias e invitadas", price: "50€ - 150€", includes: ["Prueba previa", "Maquillaje día B", "Kit de retoques"], icon: "heart" },
      { service: "Pasarela y Eventos", description: "Moda y eventos sociales", price: "40€ - 300€", includes: ["Diseño de look", "Tendencias actuales", "Fijación duradera"], icon: "star" },
    ],
    contact: {
      sectionLabel: "Contacto",
      title: "Creemos Algo Hermoso Juntas",
      description: "¿Lista para reservar tu sesión o tienes preguntas sobre mis servicios? Me encantaría saber de ti. Rellena el formulario y te responderé en 24-48 horas.",
      form: { name: "Nombre", namePlaceholder: "Tu nombre", email: "Correo", emailPlaceholder: "tu@email.com", service: "Servicio de Interés", servicePlaceholder: "ej., Maquillaje Nupcial, Sesión Editorial", date: "Fecha Preferida", message: "Mensaje", messagePlaceholder: "Cuéntame tu visión...", submit: "Enviar Mensaje", submitting: "Enviando..." },
      success: { title: "Mensaje enviado correctamente", description: "Te responderé en 24-48 horas." },
    },
    footer: { madeWith: "", location: "", rights: "Todos los derechos reservados.", downloadPortfolio: "Descargar Portfolio (PDF)" },
  },
  en: {
    nav: [
      { href: "#portfolio", label: "Portfolio" },
      { href: "#about", label: "About Me" },
      { href: "#services", label: "Services" },
      { href: "#contact", label: "Contact" },
    ],
    hero: {
      subtitle: "Professional Makeup Artist",
      title: {
        line1: "Where Beauty",
        line2: "meets",
        emphasis: "Art",
      },
      description:
        "Creating timeless and ethereal looks that enhance your natural beauty. Specialized in Brides, Fashion, and Characterization for Cinema and Theatre.",
      cta: {
        primary: "Book Your Session",
        secondary: "View Portfolio",
      },
      badge: {
        label: "Experience",
        value: "+5 Years",
      },
    },
    about: {
      sectionLabel: "About Me",
      whoIAm: {
        title: "Who I Am",
        description:
          "I am a professional makeup artist and characterizer, specialized in makeup and hair for brides, guests, and various types of events, including fashion productions and runways. I have extensive experience in makeup for audiovisual projects such as short films and movies.",
      },
      myTraining: {
        title: "My Training",
        description:
          "Student of Makeup and Characterization at CIFP Barrio de Bilbao (2024-2025). Previous training in theater makeup at Janna Theater School (2023-2024).",
      },
      myPurpose: {
        title: "My Purpose",
        description:
          "To offer a comprehensive and professional service that combines editorial technique with characterization, adapting to the needs of each client, whether in social events, film productions, or theater.",
      },
      badges: ["Social Makeup", "Characterization", "Fashion & Runway", "Cinema & TV"],
    },
    credentials: [
      {
        title: "Makeup and Characterization",
        subtitle: "CIFP Barrio de Bilbao",
        year: "2024 - 2025",
        icon: "graduation",
      },
      {
        title: "Theater Makeup",
        subtitle: "Janna Theater School",
        year: "2023 - 2024",
        icon: "palette",
      },
    ],
    portfolio: {
      sectionLabel: "Portfolio",
      title: "A Curated Collection",
      description:
        "From enhancing natural beauty in social events to technical transformation for cinema and theater. Each work reflects absolute dedication to detail and a unique visual narrative.",
    },
    portfolioSections: [
      {
        title: "Social Makeup",
        description: "Enhancing your beauty for unforgettable events.",
        projects: [
          { src: "/images/foto_proyecto_social1.jpeg", alt: "Romantic bridal makeup", title: "Romantic Bride" },
          { src: "/images/foto_proyecto_social2.jpeg", alt: "Glamour night makeup", title: "Theater Makeup" },
          { src: "/images/foto_proyecto_social3.jpeg", alt: "Elegant corporate makeup", title: "Wedding Guest" },
        ],
      },
      {
        title: "Fantasy Makeup",
        description: "Limitless creativity for magical transformations.",
        projects: [
          { src: "/images/foto_proyecto_fantasia1.jpeg", alt: "Artistic lip makeup", title: "Halloween Makeup" },
          { src: "/images/foto_proyecto_fantasia2.jpeg", alt: "Editorial makeup with smokey eyes", title: "Frozen Style" },
          { src: "/images/foto_proyecto_fantasia3.jpeg", alt: "Natural and fresh makeup", title: "Theater Makeup" },
        ],
      },
      {
        title: "FX Makeup",
        description: "Special effects that come to life.",
        projects: [
          { src: "/images/foto_proyecto_fx1.jpeg", alt: "Special effects wound", title: "Realistic Wound" },
          { src: "/images/foto_proyecto_fx2.jpeg", alt: "Aging characterization", title: "Realistic Wound" },
          { src: "/images/foto_proyecto_fx3.jpeg", alt: "Zombie characterization", title: "Aging" },
        ],
      },
    ],
    services: {
      sectionLabel: "Services",
      title: "Rates and Services",
      description: "Each service includes prior consultation and high-end products to ensure exceptional results.",
    },
    pricing: [
      { service: "Theater Makeup", description: "Characterization and staging", price: "50€ - 200€", includes: ["Characterization", "Lighting tests", "Extreme durability"], icon: "users" },
      { service: "Cinema Makeup", description: "Audiovisual productions", price: "50€ - 200€", includes: ["Continuity (Raccord)", "Special effects", "Set monitoring"], icon: "camera" },
      { service: "Wedding Makeup", description: "Brides and guests", price: "50€ - 150€", includes: ["Prior trial", "D-Day Makeup", "Touch-up kit"], icon: "heart" },
      { service: "Runway and Events", description: "Fashion and social events", price: "40€ - 300€", includes: ["Look design", "Current trends", "Long-lasting hold"], icon: "star" },
    ],
    contact: {
      sectionLabel: "Contact",
      title: "Let's Create Something Beautiful Together",
      description: "Ready to book your session or have questions about my services? I'd love to hear from you. Fill out the form and I'll respond within 24-48 hours.",
      form: { name: "Name", namePlaceholder: "Your name", email: "Email", emailPlaceholder: "you@email.com", service: "Service of Interest", servicePlaceholder: "e.g., Bridal Makeup, Editorial Session", date: "Preferred Date", message: "Message", messagePlaceholder: "Tell me your vision...", submit: "Send Message", submitting: "Sending..." },
      success: { title: "Message sent successfully", description: "I will reply within 24-48 hours." },
    },
    footer: { madeWith: "", location: "", rights: "All rights reserved.", downloadPortfolio: "Download Portfolio (PDF)" },
  },
}
