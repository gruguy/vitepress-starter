export default {
  title: "VitePress333",
  description: "Just playing around.",
  themeConfig: {
    siteTitle: "My Coustom Title", // false 不显示
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
