// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EXX Developer Documentations',
  tagline: 'Accelerating Global Web3 Adoption through Quality infrastructure',
  url: 'https://docs.exx.network',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/EXX_Favicon_Primary.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EXX Network', // Usually your GitHub org/user name.
  projectName: 'EXX Developer Documentations', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'EXX logo',
          src: 'img/Exx_docs.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/exxnetwork',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Whitepaper',
                href: 'https://exx.network/litepaper',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/hKaRvewJnd',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/exxnetwork',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About us',
                href: 'https://exx.network/about',
              },
              {
                label: 'Contact us',
                href: 'https://exx.network/contact-us',
              },
              
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EXX Network`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
