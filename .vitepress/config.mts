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
            { text: "🎞️ Moving Camo", link: "/tutorials/moving-camo" },
            { text: "How To Add Attachments To Weapons In Maya", link: "/tutorials/how-to-add-attachments-to-weapons-in-maya" },
            { text: "How To Export XModels and XAnims", link: "/tutorials/how-to-export-xmodels-and-xanims" },
            { text: "How To Get Attachment Locations Using HydraX", link: "/tutorials/how-to-get-attachment-locations-using-hydrax" },
            { text: "How to install and use ManyAnims", link: "/tutorials/How-to-install-and-use-manyanims" },
            { text: "How To Set Up MayaCoDTools And SE Tools", link: "/tutorials/how-to-set-up-mayacodtools-and-se-tools" }
        ],
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManyAsset' },
      { icon: 'discord', link: 'https://discord.gg/v2TWkeR' },
      { icon: 'youtube', link: 'https://www.youtube.com/@ManyAsset' }
    ]
  }
})
