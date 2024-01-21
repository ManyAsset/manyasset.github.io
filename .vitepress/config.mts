import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  title: "ManyAsset Wiki",
  description: "ManyAsset's modding wiki",
  themeConfig: {
    logo: "/favicon.ico",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
    {
        text: "💡 Assets",
        collapsed: false,
        items: [
            { text: "🎞️ Moving Camo", link: "/moving-camo-seraphina" }
        ],
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManyAsset/manyasset.github.io' },
      { icon: 'discord', link: 'https://discord.gg/v2TWkeR' }
    ]
  }
})
