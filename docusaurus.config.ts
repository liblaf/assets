import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Assets",
  url: "https://assets.liblaf.me",
  baseUrl: "/",
  favicon: "/letter/ico/a.ico",

  themeConfig: {
    navbar: {
      title: "Assets",
      logo: {
        src: "/letter/svg/a.svg",
      },
      items: [
        {
          href: "https://github.com/liblaf/assets",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  } satisfies Preset.ThemeConfig,

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
