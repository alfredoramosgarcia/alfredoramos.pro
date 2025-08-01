export const languages: Record<'fr' | 'en' | 'es', { name: string; flag: string }> = {
  fr: { name: 'Français', flag: 'fr' },
  en: { name: 'English', flag: 'us' },
  es: { name: 'Español', flag: 'es' },
} as const;

export const defaultLanguage = 'es';

export type LanguageCode = keyof typeof languages;

export const ui = {
  fr: {
    projectsContent: {
      sampleProject: {
        title: 'Exemple de Projet',
        description: "Ceci est un projet d'exemple pour le template.",
        imageAltText: "Image placeholder pour le projet d'exemple",
        categoryText: 'Application Web',
        dateText: 'Janvier 2025',
        detailedDescription:
          "Une description plus détaillée de ce projet d'exemple, montrant comment structurer le contenu pour la page de détail du projet.",
        keyFeatures: {
          responsiveDesign: {
            title: 'Design Adaptatif',
            description: "Le projet s'adapte à toutes les tailles d'écran.",
          },
          contentManagement: {
            title: 'Gestion de Contenu Facile',
            description:
              'Permet une gestion aisée du contenu via des fichiers Markdown ou un CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // Si tu actives la galerie pour l'exemple
          //   alt: "Texte alternatif pour l'image de galerie 1",
          //   caption: "Légende pour l'image de galerie 1",
          // },
        },
        challenges:
          'Description des défis rencontrés lors de la création de ce projet exemple.',
        learnings: 'Description des apprentissages tirés de ce projet exemple.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Développement Frontend',
        description:
          "Création d'interfaces utilisateur interactives et performantes.",
      },
      backendDevelopment: {
        title: 'Développement Backend',
        description: "Construction de logiques serveur robustes et d'API.",
      },
      uiUxDesign: {
        title: 'Design UI/UX',
        description:
          "Conception d'expériences utilisateur intuitives et esthétiques.",
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatisation des processus de développement et de déploiement.',
      },
    },
    site: {
      title: 'Mon Super Template',
      description:
        'Un template Astro moderne et performant pour démarrer votre projet.',
    },
    nav: {
      home: 'Accueil',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projets',
      tips: 'Astuces',
    },
    footer: {
      rights: 'Tous droits réservés.',
    },
    homePage: {
      pageTitle: 'Accueil |  Développeur FullStack',
      pageDescription:
        "Bienvenue sur le portfolio de YOUR_NAME, développeur FullStack passionné par la création d'expériences web innovantes.",
      heroGreeting: "Salut, c'est YOUR_NAME",
      heroSubtitlePart1: 'Développeur FullStack',
      heroSubtitlePart2: 'Passionné UI/UX',
      heroIntroduction: 'Ajouter une introduction ici.',
      heroViewWorkButton: 'Mes réalisations',
      heroContactButton: 'Me contacter',
      heroImageAlt:
        'Illustration représentant YOUR_NAME ou un concept de développement',
      featuredProjectsTitle: '3 derniers projets',
      featuredProjectsDescription:
        "Voici quelques projets sur lesquels j'ai récemment travaillé. N'hésitez pas à les explorer !",
      projectCardViewProject: 'Voir le projet',
      projectCardViewCode: 'Voir le code',
      imageNotAvailable: 'Image bientôt disponible',
      mySkillsTitle: 'Mes Compétences',
      mySkillsDescription:
        "Explorez l'expertise et les capacités qui définissent mon travail et ma passion.",
    },
    blogPage: {
      pageTitle: 'Mon Blog Technique',
      pageDescription:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      title: 'Mon Blog Technique',
      description:
        "Articles et réflexions sur le développement web, l'architecture logicielle, et les nouvelles technologies.",
      comingSoon:
        'Les articles de blog apparaîtront ici bientôt. Revenez plus tard !',
      heroImageAlt: "Image de couverture pour l'article : ",
      publishedOn: 'Publié le : ',
      readMore: 'Lire la suite',
      readingTimeSuffix: 'min de lecture',
      searchPlaceholder: 'Rechercher des articles...',
      filterByTagButtonLabel: 'Filtrer par tag',
      noTagFound: 'Aucun tag trouvé.',
      selectTagCommandPlaceholder: 'Rechercher un tag...',
      allTagsLabel: 'Tous les tags',
      noPostsFound: 'Aucun article trouvé.',
    },
    blogPost: {
      publishedOn: 'Publié le : ',
      updatedOn: 'Mis à jour le : ',
      heroImageAlt: "Image de couverture pour l'article : ",
      backToList: 'Retour à la liste des articles',
      readingTimeSuffix: 'min de lecture',
      relatedPostsTitle: 'Je te recommande aussi :',
      readMore: 'Lire la suite',
      editOnGithub: 'Proposer une modification sur GitHub',
    },
    toc: {
      title: "Sommaire de l'article",
    },
    contactPage: {
      pageTitle: 'Me Contacter',
      pageDescription:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",
      title: 'Me Contacter',
      description:
        "Discutons de ton projet, d'une collaboration potentielle, ou simplement pour échanger sur la tech !",

      formTitle: 'Envoyer un message',
      firstNameLabel: 'Prénom',
      lastNameLabel: 'Nom',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Envoyer',
      firstNamePlaceholder: 'Ton prénom',

      lastNamePlaceholder: 'Ton nom de famille',
      emailPlaceholder: 'Ton adresse e-mail',
      messagePlaceholder: 'Ton message ici...',
      calendarTitle: 'Planifier un RDV',
      calendarDescription:
        'Tu préfères discuter de vive voix ? Réservez directement un créneau dans mon agenda.',
      calendarButtonLabel: 'Voir mes disponibilités',
      calendarLinkLabel: 'Voir mon agenda',
      calendarPlaceHolder:
        "L'intégration avec Google Calendar se fera bientôt...",
      orSeparatorText: 'OU',
      toastSuccessMessageSent: 'Message envoyé avec succès !',
      toastErrorFailedToSend: "Échec de l'envoi du message.",
      toastErrorUnexpected: "Une erreur inattendue s'est produite.",
      toastErrorDetails: "Détails de l'erreur:",
      toastErrorValidationFailed: 'Validation du formulaire échouée.',
    },
    projectDetailPage: {
      backToProjects: 'Retour aux Projets',
      categoryLabel: 'Catégorie :',
      dateLabel: 'Date :',
      aboutTitle: 'À propos de ce projet',
      keyFeaturesTitle: 'Fonctionnalités Clés',
      galleryTitle: 'Galerie',
      challengesTitle: 'Défis Rencontrés',
      learningsTitle: 'Leçons Apprises',
      visitProjectButton: 'Visiter le Projet',
      viewCodeButton: 'Voir le Code',
    },
    projectsPage: {
      title: 'Mes Projets',
      metaTitle: 'Mes Projets | Portfolio',
      metaDescription: 'Découvrez tous les projets.',
      noProjects: 'Aucun projet à afficher pour le moment.',
      noProjectsDescription:
        "Il semble que vous n'ayez pas encore de projets à afficher.",
    },
    notFoundPage: {
      pageTitle: 'Page Non Trouvée',
      title: 'Oups ! Page Non Trouvée',
      message:
        "Désolé, la page que vous recherchez ne semble pas exister. Vérifiez l'URL ou retournez à la page d'accueil.",
      homeLink: "Retourner à l'Accueil",
    },

    tipsPage: {
      metaTitle: 'Astuces de Développement',
      metaDescription:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      description:
        'Découvrez des astuces et conseils rapides sur le développement web et la cloud computing.',
      title: 'Nos Dernières Astuces',
      noTips: 'Aucune astuce à afficher pour le moment.',
      readTip: "Lire l'astuce",
      backToList: 'Retour à la liste des astuces',
      featuredTips: 'Astuces recommandées',
      allTips: 'Toutes les astuces',
      tipsAvailable: 'astuces disponibles',
      tipAvailable: 'astuce disponible',
      editOnGithub: 'Modifier sur GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Type invalide.',
      invalid_type_received_undefined: 'Ce champ est requis.', // For required fields (fallback)
      required_field_custom: 'Le champ {fieldName} est requis.',
      // String errors
      too_small_string_minimum: 'Doit contenir au moins {minimum} caractères.',
      too_big_string_maximum: 'Ne doit pas dépasser {maximum} caractères.',
      invalid_string_email: 'Adresse e-mail invalide.',
      invalid_string_url: 'URL invalide.',
      invalid_string_uuid: 'UUID invalide.',
      // You can add more specific messages as needed
    },
  },
  en: {
    projectsContent: {
      sampleProject: {
        title: 'Sample Project',
        description: 'This is a sample project for the template.',
        imageAltText: 'Placeholder image for the sample project',
        categoryText: 'Web Application',
        dateText: 'January 2025',
        detailedDescription:
          'A more detailed description of this sample project, showing how to structure content for the project detail page.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Responsive Design',
            description: 'The project adapts to all screen sizes.',
          },
          contentManagement: {
            title: 'Easy Content Management',
            description:
              'Allows for easy content management via Markdown files or a CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: { // If you enable gallery for the example
          //   alt: 'Alt text for gallery image 1',
          //   caption: 'Caption for gallery image 1',
          // },
        },
        challenges:
          'Description of challenges encountered while creating this sample project.',
        learnings: 'Description of learnings from this sample project.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Frontend Development',
        description:
          'Building interactive and high-performance user interfaces.',
      },
      backendDevelopment: {
        title: 'Backend Development',
        description: 'Constructing robust server logic and APIs.',
      },
      uiUxDesign: {
        title: 'UI/UX Design',
        description: 'Designing intuitive and aesthetic user experiences.',
      },
      devOps: {
        title: 'DevOps',
        description: 'Automating development and deployment processes.',
      },
    },
    site: {
      title: 'My Awesome Template',
      description:
        'A modern and performant Astro template to kickstart your project.',
    },
    nav: {
      home: 'Home',
      blog: 'Blog',
      contact: 'Contact',
      projects: 'Projects',
      tips: 'Tips',
    },
    footer: {
      rights: 'All rights reserved.',
    },
    homePage: {
      pageTitle: 'Home | YOUR_NAME - FullStack Developer',
      pageDescription:
        'Welcome to the portfolio of YOUR_NAME, a FullStack developer passionate about creating innovative web experiences.',
      heroGreeting: "Hi, I'm YOUR_NAME",
      heroSubtitlePart1: 'Full Stack Developer',
      heroSubtitlePart2: 'UI/UX Enthusiast',
      heroIntroduction: 'Add an introduction here.',
      heroViewWorkButton: 'View My Work',
      heroContactButton: 'Get In Touch',
      heroImageAlt:
        'Illustration representing YOUR_NAME or a development concept',
      featuredProjectsTitle: '3 latest projects',
      featuredProjectsDescription:
        "Here are some of the projects I've recently worked on. Feel free to explore!",
      projectCardViewProject: 'View Project',
      projectCardViewCode: 'View Code',
      imageNotAvailable: 'Image not available for now',
      mySkillsTitle: 'My Skills',
      mySkillsDescription:
        'Explore the expertise and abilities that define my work and passion.',
    },
    blogPage: {
      pageTitle: 'My Technical Blog',
      pageDescription:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      title: 'My Technical Blog',
      description:
        'Articles and thoughts on web development, software architecture, and new technologies.',
      comingSoon: 'Blog posts will appear here soon. Check back later!',
      heroImageAlt: 'Hero image for article: ',
      publishedOn: 'Published on: ',
      readMore: 'Read more',
      readingTimeSuffix: 'min read',
      searchPlaceholder: 'Search articles...',
      filterByTagButtonLabel: 'Filter by tag',
      noTagFound: 'No tag found.',
      selectTagCommandPlaceholder: 'Search tag...',
      allTagsLabel: 'All tags',
      noPostsFound: 'No posts found.',
    },
    blogPost: {
      publishedOn: 'Published on: ',
      updatedOn: 'Updated on: ',
      heroImageAlt: 'Hero image for article: ',
      backToList: 'Back to blog list',
      readingTimeSuffix: 'min read',
      relatedPostsTitle: 'Continue Reading',
      readMore: 'Read more',
    },
    toc: {
      title: 'Table of Contents',
    },
    contactPage: {
      pageTitle: 'Contact Me',
      pageDescription:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",

      title: 'Contact Me',
      description:
        "Let's discuss your project, a potential collaboration, or just chat about tech!",
      formTitle: 'Send a message',
      firstNameLabel: 'First Name',
      lastNameLabel: 'Last Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      sendButtonLabel: 'Send',
      firstNamePlaceholder: 'Your first name',
      lastNamePlaceholder: 'Your last name',
      emailPlaceholder: 'Your email address',
      messagePlaceholder: 'Your message here...',
      calendarTitle: 'Schedule a Meeting',
      calendarDescription:
        'Prefer to talk live? Book a slot directly in my calendar.',
      calendarButtonLabel: 'See my availability',
      calendarLinkLabel: 'See my calendar',
      calendarPlaceHolder:
        'The integration with Google Calendar will be soon...',
      orSeparatorText: 'OR',
      toastSuccessMessageSent: 'Message sent successfully!',
      toastErrorFailedToSend: 'Failed to send message.',
      toastErrorUnexpected: 'An unexpected error occurred.',
      toastErrorDetails: 'Error details:',
      toastErrorValidationFailed: 'Form validation failed.',
    },
    projectDetailPage: {
      backToProjects: 'Back to Projects',
      categoryLabel: 'Category:',
      dateLabel: 'Date:',
      aboutTitle: 'About this project',
      keyFeaturesTitle: 'Key Features',
      galleryTitle: 'Gallery',
      challengesTitle: 'Challenges',
      learningsTitle: 'Learnings',
      visitProjectButton: 'Visit Project',
      viewCodeButton: 'View Code',
    },
    projectsPage: {
      title: 'My Projects',
      metaTitle: "My Projects | YOUR_NAME's Portfolio",
      metaDescription: "Discover all of YOUR_NAME's projects.",
      noProjects: 'No projects to display at the moment.',
      noProjectsDescription:
        "It seems that you don't have any projects to display at the moment.",
    },
    notFoundPage: {
      pageTitle: 'Page Not Found',
      title: 'Oops! Page Not Found',
      message:
        'Sorry, the page you are looking for does not seem to exist. Check the URL or return to the homepage.',
      homeLink: 'Return to Homepage',
    },

    tipsPage: {
      metaTitle: 'Development Tips | YOUR_NAME',
      metaDescription:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      title: 'Latest Tips',
      description:
        'Browse a collection of quick tips and advice on Web Development and Cloud Computing.',
      noTips: 'No tips to display at the moment.',
      readTip: 'Read tip',
      backToList: 'Back to list',
      featuredTips: 'Featured Tips',
      allTips: 'All Tips',
      tipsAvailable: 'tips available',
      tipAvailable: 'tip available',
      editOnGithub: 'Edit on GitHub',
    },
    zodErrors: {
      // Common errors
      invalid_type: 'Invalid type.',
      invalid_type_received_undefined: 'This field is required.', // For required fields (fallback)
      required_field_custom: 'The {fieldName} field is required.',
      // String errors
      too_small_string_minimum: 'Must be at least {minimum} characters long.',
      too_big_string_maximum: 'Must be no more than {maximum} characters long.',
      invalid_string_email: 'Invalid email address.',
      invalid_string_url: 'Invalid URL.',
      invalid_string_uuid: 'Invalid UUID.',
      // You can add more specific messages as needed
    },
  },
  es: {
    projectsContent: {
      sampleProject: {
        title: 'Proyecto de Ejemplo',
        description: 'Este es un proyecto de ejemplo para la plantilla.',
        imageAltText: 'Imagen de ejemplo para el proyecto de muestra',
        categoryText: 'Aplicación Web',
        dateText: 'Enero 2025',
        detailedDescription:
          'Una descripción más detallada de este proyecto de ejemplo, mostrando cómo estructurar el contenido para la página de detalle del proyecto.',
        keyFeatures: {
          responsiveDesign: {
            title: 'Diseño Responsivo',
            description: 'El proyecto se adapta a todos los tamaños de pantalla.',
          },
          contentManagement: {
            title: 'Gestión de Contenido Fácil',
            description:
              'Permite una gestión sencilla del contenido mediante archivos Markdown o un CMS.',
          },
        },
        galleryImages: {
          // sampleGalleryImage1: {
          //   alt: 'Texto alternativo para la imagen de la galería 1',
          //   caption: 'Leyenda para la imagen de la galería 1',
          // },
        },
        challenges:
          'Descripción de los desafíos enfrentados durante la creación de este proyecto de ejemplo.',
        learnings:
          'Descripción de los aprendizajes obtenidos a partir de este proyecto de ejemplo.',
      },
    },
    skillsContent: {
      frontendDevelopment: {
        title: 'Desarrollo Frontend',
        description: 'Creación de interfaces de usuario interactivas y eficientes.',
      },
      backendDevelopment: {
        title: 'Desarrollo Backend',
        description: 'Construcción de lógica de servidor robusta y APIs.',
      },
      uiUxDesign: {
        title: 'Diseño UI/UX',
        description:
          'Diseño de experiencias de usuario intuitivas y atractivas.',
      },
      devOps: {
        title: 'DevOps',
        description:
          'Automatización de procesos de desarrollo y despliegue.',
      },
    },
    site: {
      title: 'Mi Súper Plantilla',
      description:
        'Una plantilla moderna y eficiente con Astro para comenzar tu proyecto.',
    },
    nav: {
      home: 'Inicio',
      blog: 'Blog',
      contact: 'Contacto',
      projects: 'Proyectos',
      tips: 'Consejos',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
    homePage: {
      pageTitle: 'Inicio | Desarrollador FullStack',
      pageDescription:
        'Bienvenido al portafolio de YOUR_NAME, desarrollador FullStack apasionado por crear experiencias web innovadoras.',
      heroGreeting: 'Hola, soy YOUR_NAME',
      heroSubtitlePart1: 'Desarrollador FullStack',
      heroSubtitlePart2: 'Apasionado por UI/UX',
      heroIntroduction: 'Agrega una introducción aquí.',
      heroViewWorkButton: 'Mis proyectos',
      heroContactButton: 'Contáctame',
      heroImageAlt:
        'Ilustración representando a YOUR_NAME o un concepto de desarrollo',
      featuredProjectsTitle: 'Últimos 3 proyectos',
      featuredProjectsDescription:
        'Estos son algunos proyectos recientes en los que he trabajado. ¡Échales un vistazo!',
      projectCardViewProject: 'Ver proyecto',
      projectCardViewCode: 'Ver código',
      imageNotAvailable: 'Imagen disponible pronto',
      mySkillsTitle: 'Mis Habilidades',
      mySkillsDescription:
        'Explora las habilidades y capacidades que definen mi trabajo y pasión.',
    },
    blogPage: {
      pageTitle: 'Mi Blog Técnico',
      pageDescription:
        'Artículos y reflexiones sobre desarrollo web, arquitectura de software y nuevas tecnologías.',
      title: 'Mi Blog Técnico',
      description:
        'Artículos y reflexiones sobre desarrollo web, arquitectura de software y nuevas tecnologías.',
      comingSoon:
        'Los artículos del blog aparecerán aquí pronto. ¡Vuelve más tarde!',
      heroImageAlt: 'Imagen de portada del artículo: ',
      publishedOn: 'Publicado el: ',
      readMore: 'Leer más',
      readingTimeSuffix: 'min de lectura',
      searchPlaceholder: 'Buscar artículos...',
      filterByTagButtonLabel: 'Filtrar por etiqueta',
      noTagFound: 'No se encontraron etiquetas.',
      selectTagCommandPlaceholder: 'Buscar una etiqueta...',
      allTagsLabel: 'Todas las etiquetas',
      noPostsFound: 'No se encontraron artículos.',
    },
    blogPost: {
      publishedOn: 'Publicado el: ',
      updatedOn: 'Actualizado el: ',
      heroImageAlt: 'Imagen de portada del artículo: ',
      backToList: 'Volver a la lista de artículos',
      readingTimeSuffix: 'min de lectura',
      relatedPostsTitle: 'También te puede interesar:',
      readMore: 'Leer más',
      editOnGithub: 'Sugerir una edición en GitHub',
    },
    toc: {
      title: 'Tabla de Contenido',
    },
    contactPage: {
      pageTitle: 'Contáctame',
      pageDescription:
        'Hablemos sobre tu proyecto, una posible colaboración o simplemente charlemos sobre tecnología.',
      title: 'Contáctame',
      description:
        'Hablemos sobre tu proyecto, una posible colaboración o simplemente charlemos sobre tecnología.',

      formTitle: 'Enviar un mensaje',
      firstNameLabel: 'Nombre',
      lastNameLabel: 'Apellido',
      emailLabel: 'Correo electrónico',
      messageLabel: 'Mensaje',
      sendButtonLabel: 'Enviar',
      firstNamePlaceholder: 'Tu nombre',
      lastNamePlaceholder: 'Tu apellido',
      emailPlaceholder: 'Tu correo electrónico',
      messagePlaceholder: 'Tu mensaje aquí...',
      calendarTitle: 'Agendar una Reunión',
      calendarDescription:
        '¿Prefieres hablar en persona? Reserva directamente un espacio en mi agenda.',
      calendarButtonLabel: 'Ver disponibilidad',
      calendarLinkLabel: 'Ver mi agenda',
      calendarPlaceHolder:
        'La integración con Google Calendar estará disponible pronto...',
      orSeparatorText: 'O',
      toastSuccessMessageSent: '¡Mensaje enviado con éxito!',
      toastErrorFailedToSend: 'Error al enviar el mensaje.',
      toastErrorUnexpected: 'Ocurrió un error inesperado.',
      toastErrorDetails: 'Detalles del error:',
      toastErrorValidationFailed: 'Falló la validación del formulario.',
    },
    projectDetailPage: {
      backToProjects: 'Volver a Proyectos',
      categoryLabel: 'Categoría:',
      dateLabel: 'Fecha:',
      aboutTitle: 'Acerca de este proyecto',
      keyFeaturesTitle: 'Características Clave',
      galleryTitle: 'Galería',
      challengesTitle: 'Desafíos Enfrentados',
      learningsTitle: 'Lecciones Aprendidas',
      visitProjectButton: 'Visitar el Proyecto',
      viewCodeButton: 'Ver el Código',
    },
    projectsPage: {
      title: 'Mis Proyectos',
      metaTitle: 'Mis Proyectos | Portafolio',
      metaDescription: 'Descubre todos los proyectos.',
      noProjects: 'No hay proyectos para mostrar por ahora.',
      noProjectsDescription:
        'Parece que aún no tienes proyectos para mostrar.',
    },
    notFoundPage: {
      pageTitle: 'Página No Encontrada',
      title: '¡Ups! Página no encontrada',
      message:
        'Lo sentimos, la página que buscas no existe. Verifica la URL o vuelve a la página principal.',
      homeLink: 'Volver al Inicio',
    },
    tipsPage: {
      metaTitle: 'Consejos de Desarrollo',
      metaDescription:
        'Descubre consejos rápidos sobre desarrollo web y computación en la nube.',
      description:
        'Descubre consejos rápidos sobre desarrollo web y computación en la nube.',
      title: 'Últimos Consejos',
      noTips: 'No hay consejos para mostrar en este momento.',
      readTip: 'Leer el consejo',
      backToList: 'Volver a la lista de consejos',
      featuredTips: 'Consejos Recomendados',
      allTips: 'Todos los Consejos',
      tipsAvailable: 'consejos disponibles',
      tipAvailable: 'consejo disponible',
      editOnGithub: 'Editar en GitHub',
    },
    zodErrors: {
      invalid_type: 'Tipo inválido.',
      invalid_type_received_undefined: 'Este campo es obligatorio.',
      required_field_custom: 'El campo {fieldName} es obligatorio.',
      too_small_string_minimum: 'Debe tener al menos {minimum} caracteres.',
      too_big_string_maximum: 'No debe superar los {maximum} caracteres.',
      invalid_string_email: 'Correo electrónico inválido.',
      invalid_string_url: 'URL inválida.',
      invalid_string_uuid: 'UUID inválido.',
    },
  }
} as const;

export const getLanguageName = (lang: LanguageCode) => languages[lang];

export type UISchema = typeof ui;
export type FeatureType = keyof UISchema[typeof defaultLanguage];

export function useTranslations<F extends FeatureType>(
  lang: LanguageCode | undefined,
  feature: F
) {
  const currentLanguage = lang || defaultLanguage;

  // Get the available keys for this feature from the default language
  type AvailableKeys = keyof UISchema[typeof defaultLanguage][F];

  return function t(key: AvailableKeys): string {
    // Safely access the translation, falling back to default language if necessary
    const featureTranslations = ui[currentLanguage]?.[feature];
    if (featureTranslations && key in featureTranslations) {
      return featureTranslations[
        key as keyof typeof featureTranslations
      ] as string;
    }

    // Fallback to default language
    return ui[defaultLanguage][feature][
      key as keyof (typeof ui)[typeof defaultLanguage][F]
    ] as string;
  };
}
