export default defineAppConfig({
  global: {
    picture: {
      dark: '/iconos/adn_white.png',
      light: '/iconos/adn_color.png',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'ui-pro@nuxt.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    }
  },
  uiPro: {
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
    //   {
    //   'icon': 'i-simple-icons-nuxtdotjs',
    //   'to': 'https://nuxt.com',
    //   'target': '_blank',
    //   'aria-label': 'Nuxt Website'
    // },
     {
      'icon': 'i-simple-icons-facebook',
      'to': 'https://www.facebook.com/canalADNdeportivo',
      'target': '_blank',
      'aria-label': 'Nuxt UI on Discord'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://www.instagram.com/a.d.n.deportivo/',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, 
    {
      'icon': 'i-simple-icons-whatsapp',
      'to': '',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }
  ]
  }
})
