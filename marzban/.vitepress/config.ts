import { defineConfig } from 'vitepress'

export const BASE = '/'

const persianThemeConfig = {
  sidebar: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/documentation/' },
        { text: 'Runtime API Examples', link: '/examples/' },
      ],
    },
  ],
  nav: [
    { text: 'Home', link: '/' },
    { text: 'Documentation', link: '/documentation/' },
    { text: 'Examples', link: '/examples/' },
  ],

  footer: {
    message: 'تحت لایسنس AGPL-3.0.',
    copyright: 'کپی‌رایت © 2023-تا حال گذرگاه',
  },
}

const englishThemeConfig = {
  sidebar: [
    {
      text: 'Examples',
      items: [
        { text: 'Markdown Examples', link: '/en/documentation/' },
        { text: 'Runtime API Examples', link: '/en/examples/' },
      ],
    },
  ],
  nav: [
    { text: 'Home', link: '/en/' },
    { text: 'Documentation', link: '/en/documentation/' },
    { text: 'Examples', link: '/en/examples/' },
  ],

  footer: {
    message: 'Released under AGPL-3.0 License.',
    copyright: 'Copyright © 2023-present Gozargah',
  },
}

const persianLang = {
  label: 'فارسی',
  lang: 'fa',
  dir: 'rtl',
  title: 'مرزبان',
  description: '',
  link: '/',
  themeConfig: persianThemeConfig,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Marzban',
  description: 'Unified Censorship Resistant Solution',
  base: BASE,
  cleanUrls: true,
  lang: 'fa',
  locales: {
    root: persianLang,
    fa: {
      ...persianLang,
      link: '/fa/',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: englishThemeConfig,
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: true,
    editLink: {
      pattern: 'https://github.com/gozargah/gozargah-docs/edit/main/:path',
      text: 'Edit this page on GitHub',
    },
    logo: '/images/logo-dark.png',

    socialLinks: [{ icon: 'github', link: 'https://github.com/gozargah/marzban' }],
  },
})