import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as SearchLocal from "@easyops-cn/docusaurus-search-local";

const config: Config = {
  title: "Assets",
  url: "https://assets.liblaf.me",
  baseUrl: "/",
  favicon: "/letter/ico/a.ico",

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
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
      } satisfies SearchLocal.PluginOptions,
    ],
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          editUrl: "https://github.com/liblaf/assets/tree/main/",
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
