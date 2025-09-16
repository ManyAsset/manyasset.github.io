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

    sidebar: [
    {
        text: "💡 Tutorials",
        collapsed: false,
        items: [
            { text: "🎞️ Moving Camo", link: "/tutorials/moving-camo" }
            { text: "🎞️ How To Add Attachments To Weapons In Maya", link: "/tutorials/How To Add Attachments To Weapons In Maya" }
        ],
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManyAsset/manyasset.github.io' },
      { icon: 'discord', link: 'https://discord.gg/v2TWkeR' }
    ]
  }
})
