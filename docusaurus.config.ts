import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const NOMBRE_JAC = 'Junta de Aeronáutica Civil (JAC)'

const config: Config = {
  
  // NOTE: MOD HERE ULALA!!!
  title: 'Junta de Aeronáutica Civil',
  tagline: 'Documentación',
  favicon: 'img/gob-icon.svg',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/jac-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jac-mtt', // Usually your GitHub org/user name.
  projectName: 'jac-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jac-mtt/jac-docs/edit/main/',
        },
        /*
         * Aun no se implementa el blog.
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/avatar_gobcl.png',
    navbar: {
      title: 'JAC',
      logo: {
        alt: 'Docs JAC Logo',
        src: 'img/avatar_avion.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'jacDocsSidebar',
          position: 'left',
          label: 'Documentación',
        },
        /*{to: '/blog', label: 'Blog', position: 'left'},*/
        {
          href: 'https://github.com/jac-mtt',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Datos Gob',
              to: '/docs/category/datos-gob',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://cl.linkedin.com/company/jac-mtt',
            },
          ],
        },
        {
          title: 'Otros Sitios',
          items: [
            {
              label: 'Sitio Web JAC',
              to: 'https://www.jac.gob.cl/',
            },
            /*{ label: 'Blog', to: '/blog', },*/
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ${NOMBRE_JAC}. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
