import type { NavigationMenuItem } from '@nuxt/ui'

export const navLinks: NavigationMenuItem[] = [{
  label: 'Inicio',
  icon: 'i-lucide-home',
  to: '/'
}, {
  label: 'Tabla de Posiciones',
  icon: 'i-lucide-folder',
  to: '/standings'
}, 
// {
//   label: 'Blog',
//   icon: 'i-lucide-file-text',
//   to: '/blog'
// }, {
//   label: 'Speaking',
//   icon: 'i-lucide-mic',
//   to: '/speaking'
// }, {
//   label: 'About',
//   icon: 'i-lucide-user',
//   to: '/about'
// }
]
