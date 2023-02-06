export default {
  title: "静态文档github-action",
  description: "Just playing around.",
  base: "/vitepress-starter/",
  themeConfig: {
    siteTitle: "静态文档github-action", // false 不显示
    logo: "",
    nav: [
      { text: "Guide", link: "/guide" },
      { text: "Configs", link: "/guide" },
      { text: "Changelog", link: "/guide" },
    ],
    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting started" },
        ],
      },
    ],
  },
};
