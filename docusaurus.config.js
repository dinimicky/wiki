const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");
// const mermaid = require("remark-mermaid-dataurl");
const math = require('remark-math');
const katex = require('rehype-katex');
const mk_mermaid = require("remark-mermaid");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  scripts: [
    // {src:"/mermaid.js", defer: true, async: true, },
    // {src:"/init.js", defer: true, async: true, },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dinimicky/wiki',
          remarkPlugins: [simplePlantUML,
            [mk_mermaid, { simple: true }],
            // (pluginOptions) =>{
            
            //   return function transformer(syntaxTree) {
            //     visit(syntaxTree, "code", node => {
            //       let { lang, value, meta } = node;
            //       if (!lang || !value || lang !== "mermaid") return;
            
            //       node.type = "image";
            //       node.url = `${options.baseUrl.replace(/\/$/, "")}/${plantumlEncoder.encode(value)}`;
            //       node.alt = meta;
            //       node.meta = undefined;
            //     });
            //     return syntaxTree;
            //   };
            // },
            math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dinimicky/wiki/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    // highligh-start
    require.resolve('docusaurus-lunr-search'),
    function myPlugin(context, options) {
      // ...
      return {
        name: 'my-plugin',
        async loadContent() {
          // ...
        },
        injectHtmlTags({ content }) {
          return {

            preBodyTags: [
              // {
              //   tagName: 'script',
              //   attributes: {
              //     charset: 'utf-8',
              //     src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js',
              //     'value': 'mermaid.initialize({ startOnLoad: true })',
              //   },

              // },
              // {
              //   tagName: 'script',
              //   attributes: {
              //     charset: 'utf-8',
              //     src: '/init.js',
              //   },
              // },
            ],
            postBodyTags: [`<div> This is post body </div>`],
          };
        },
        /* other lifecycle API */
      };
    },
  ],
};
