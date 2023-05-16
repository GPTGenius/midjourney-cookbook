import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Midjourney Cookbook",
  description: "More Magic Magination",
  base: "/midjourney-cookbook/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Prompts', items: [{ text: 'Human', link: '/markdown-examples' }] },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/GPTGenius/midjourney-cookbook' }
    ]
  }
})
