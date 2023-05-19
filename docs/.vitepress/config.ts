import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Midjourney Cookbook',
  description: 'More Magic Magination',
  base: '/midjourney-cookbook/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs' },
    ],

    sidebar: [
      {
        text: 'Docs',
        items: [
          {
            text: 'Human',
            items: [
              {
                text: 'Boy White Shirt Sea',
                link: '/human/boy_white_shirt_sea',
              },
              {
                text: 'Girl White Dress Sea',
                link: '/human/girl_white_dress_sea',
              },
              {
                text: 'Girl Flower Garden',
                link: '/human/girl_flower_garden',
              },
            ],
          },
          {
            text: 'Animal',
            items: [
              {
                text: 'Cat',
                link: '/animal/cat',
              },
            ],
          },
          // { text: 'Building' },
          // { text: 'Game' }
        ],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/GPTGenius/midjourney-cookbook',
      },
    ],
  },
});
