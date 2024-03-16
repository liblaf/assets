import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { PluginOptions as SearchPluginOptions } from "@easyops-cn/docusaurus-search-local";

const config: Config = {
  title: "Assets",
  url: "https://assets.liblaf.me",
  baseUrl: "/",
  favicon: "/letter/ico/a.ico",

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Assets",
      logo: {
        alt: "Logo",
        src: "/letter/svg/a.svg",
      },
      items: [
        {
          label: "GitHub",
          href: "https://github.com/liblaf/assets",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        docsRouteBasePath: "/",
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      } satisfies SearchPluginOptions,
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/liblaf/assets/tree/main/",
        },
        pages: false,
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
