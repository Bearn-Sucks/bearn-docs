import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'
import math from 'remark-math'
import katex from 'rehype-katex'

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bearn Docs',
  tagline: 'Docs Suck',
  favicon: 'img/bearn-logo.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Bearn', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          sidebarCollapsed: false,
          sidebarCollapsible: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          breadcrumbs: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'BEARN DOCS',
      logo: {
        alt: 'Bearn Logo',
        src: 'img/bearn-logo.png',
      },
      hideOnScroll: false,
      items: [
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'bearnSidebar',
        //   position: 'left',
        //   label: 'test',
        // },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/DezJ8GPm',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/Bearnsucks',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/fealTheBearn/',
            },
            // {
            //   label: 'Governance Forum',
            //   href: 'https://gov.yearn.fi',
            // },
            // {
            //   label: 'Snapshot Voting',
            //   href: 'https://snapshot.org/#/veyfi.eth',
            // },
          ],
        },
        {
          href: 'https://github.com/bearn-sucks',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://bearn.sucks',
          position: 'right',
          className: 'header-bearn-link',
          'aria-label': 'bearn.sucks',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
