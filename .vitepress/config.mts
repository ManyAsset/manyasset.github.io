import { HeadConfig, defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:image', content: "https://manyasset.github.io/logo.png"}])
    head.push(['meta', { name: 'theme-color', content: '#d6851a' }])
    
    return head
  },
  cleanUrls: true,
  title: "ManyAsset Wiki",
  description: "ManyAsset's modding wiki",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: 'Home', link: '/' }
    ],


    sidebar: {
      "/tutorials": [
        {
          text: "💡 Tutorials",
          items: [
            { text: "Overview", link: "tutorials/overview" },

            {
              text: "Weapon Porting",
              collapsed: false,
              link: "tutorials/WeaponPorting",
              items: [
                { text: "Basics", link: "tutorials/WeaponPorting/basics" },
                { text: "Tools/Programs", link: "tutorials/WeaponPorting/tools-programs" },
                { text: "Per-game", link: "tutorials/WeaponPorting/per-game" },
              ],
            },
            { text: "🎞️ Moving Camo", link: "tutorials/moving-camo" }
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManyAsset' },
      { icon: 'discord', link: 'https://discord.gg/v2TWkeR' },
      { icon: 'youtube', link: 'https://www.youtube.com/@ManyAsset' }
    ]
  }
})
